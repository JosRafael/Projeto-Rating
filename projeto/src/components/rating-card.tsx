import styles from './rating-card.module.css';
import {useState} from 'react'
export default function RatingCard(){
    
    const [rating, setRating]=useState<number>();
    function handleSetRating(rating:number){
        setRating(rating)
    }

    return <div className={styles.card}>
       <div>
        <img className={styles.star} src='/icon-star.svg' alt='star'/>
       </div>

       <div className={styles.text}>
        <h1 className={styles.title}>How did we do?</h1>
        <p className={styles.description}>
            Please let us know how we did with your support request. all feedbacks is 
            aprecciated help us improve our offering!
        </p>
        </div> 
       
        <div className={styles.buttonGroup}>
            {[1,2,3,4,5]}
        <button onClick={()=>handleSetRating(rating)} className={styles.button}>1</button>
        <button className={styles.button}> 2</button>
        <button className={styles.button}>3</button>
        <button className={styles.button}>4</button>
        <button className={styles.button}>5</button>
        </div>
        <button className={styles.buttonSubmit}>submit</button>
    </div>
}