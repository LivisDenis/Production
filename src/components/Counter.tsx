import {useState} from "react";
import styles from  './Counter.module.scss'

export const Counter = () => {
    const [state, setState] = useState(0)

    const increment = () => {
        setState(state + 1)
    }

    return (
        <div>
            <h1 className={styles.btn2}>{state}</h1>
            <button className={styles.btn} onClick={increment}>CLICK</button>
        </div>
    );
};
