import styles from './rating-card.module.css';
export default function RatingCard(){
    return <div className={styles.card}>
       <div>
        <img className={styles.star} src='/icon-star.svg' alt='star'/>
       </div>
        
        <h1 className={styles.title}>How did we do?</h1>

        <p className={styles.description}>
            Please let us know how we did with your support request. Aprecciated help us improve our offering!
        </p>

        <button className={styles.button}>1</button>
        <button className={styles.button}> 2</button>
        <button className={styles.button}>3</button>
        <button className={styles.button}>4</button>
        <button className={styles.button}>5</button>
        <button className={styles.submit}>submit</button>
    </div>
}