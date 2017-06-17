import { com as config } from '../config';
import { hydrateUsers, hydrateUserProduct } from '../action';
import { users } from './__fixture__/users';

export const init = store => {
    return store.dispatch(hydrateUsers(users));

    // polling for all visitors
    {
        let timeout = null;

        const loop = () => {
            clearTimeout(timeout);

            fetch(config.endPoint + '/users')
                .then(res => res.json())
                .then(users => store.dispatch(hydrateUsers(users)))
                .catch(err => console.log(err))
                .then(() => (timeout = setTimeout(loop, config.pooling_delay)));
        };

        loop();
    }

    // polling for selected visitor
    {
        let timeout = null;

        const loop = () => {
            clearTimeout(timeout);

            const { selectedVisitorId } = store.getState();

            if (!selectedVisitorId) {
                timeout = setTimeout(loop, config.pooling_delay);
                return;
            }

            fetch(config.endPoint + '/users/' + selectedVisitorId)
                .then(res => res.json())
                .then(products =>
                    store.dispatch(
                        hydrateUserProduct(selectedVisitorId, products)
                    )
                )
                .catch(err => console.log(err))
                .then(() => (timeout = setTimeout(loop, config.pooling_delay)));
        };

        loop();
    }
};
