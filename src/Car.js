import styles from './my-style.module.css';

const Car = () => {
    return (
        <>
            <h1 className={styles.bigblue}>Hello Car!</h1>
            <p id={styles.deneme}>Deneme!</p>
        </>
    )
}

export default Car;