import { com as config } from './config';
import { hydrate } from '../action';

export const init = store => {
    let timeout = null;

    const loop = () => {
        clearTimeout(timeout);

        fetch(config.endPoint)
            .then(res => res.json())
            .then(date => store.dispatch(hydrate(date)))
            .catch(err => console.log(err))
            .then(() => (timeout = setTimeout(loop, config.pooling_delay)));
    };

    loop();
};
