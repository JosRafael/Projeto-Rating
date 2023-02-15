import styles from './rating-card.module.css';
import {useState} from 'react'
export default function RatingCard(){
    
    const [rating, setRating]=useState<number>();
    const [isSubmited, setIsSubmited]=useState<boolean>(false);
    
    function handleSetRating(rating:number){
        setRating(rating)
    }
    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        setIsSubmited(true)
    }
   
    if(isSubmited){
        return(
            <h1>Thank You! {rating}</h1>
        )
    }
   
   return(
   <form onSubmit={handleSubmit} className={styles.card}>
       <div>
        <img className={styles.star} src='/icon-star.svg' alt='star'/>
       </div>

       <div className={styles.text}>
        <p>{rating}</p>
        <h1 className={styles.title}>How did we do?</h1>
        <p className={styles.description}>
            Please let us know how we did with your support request. all feedbacks is 
            aprecciated help us improve our offering!
        </p>
        </div> 
       
        <div className={styles.buttonGroup}>
            {[1,2,3,4,5].map((rating)=>(
           <button onClick={()=>handleSetRating(rating)} className={styles.button}>{rating}</button>
            ))}
        </div>
        <button type="submit" className={styles.buttonSubmit}>submit</button>
    </form>
   )
}