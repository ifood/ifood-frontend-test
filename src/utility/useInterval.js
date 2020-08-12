/**
 * IMPORTS
 */
import {useEffect} from 'react';
import {useRef} from 'react';


/**
 * CODE
 */

// interval hook
function useInterval(callback, delay) {
    const savedCallback = useRef();

    // remember the latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // set up the interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

/**
 * EXPORTS
 */
export {useInterval};
