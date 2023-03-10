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
            <div className={styles.card} style={{alignItems: 'center'}}>
           <div>
            <img src='/illustration-thank-you.svg' alt='cellphone'/>
           </div>
           
            <div className={styles.pill}>
                <p>You select {rating} out of 5</p>
            </div>
           <div className={styles.textCenter}>
            
           <h1 className={styles.title}>Thank you!</h1>
           <p>Thanks for the review, we are grateful for your feedback!</p>
           </div>
            </div>
        )
    }
   
   return(
   <form onSubmit={handleSubmit} className={styles.card}>
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
            {[1,2,3,4,5].map((rating)=>(
           <button key={rating} type="button" onClick={()=>handleSetRating(rating)} className={styles.button}>{rating}</button>
            ))}
        </div>
        <button type="submit" className={styles.buttonSubmit}>submit</button>
    </form>
   )
}