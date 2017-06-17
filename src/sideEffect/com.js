import { com as config } from '../config';
import { hydrate } from '../action';
import { users } from './__fixture__/users';

export const init = store => {
    let timeout = null;

    const loop = () => {
        clearTimeout(timeout);

        store.dispatch(hydrate({ users }));

        fetch(config.endPoint)
            .then(res => res.json())
            .then(data => store.dispatch(hydrate(data)))
            .catch(err => console.log(err))
            .then(() => (timeout = setTimeout(loop, config.pooling_delay)));
    };

    loop();
};
