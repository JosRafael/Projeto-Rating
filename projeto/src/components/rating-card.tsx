import styles from './rating-card.module.css';
export default function RatingCard(){
    return <div className={styles.card}>
        <img className={styles.star} src='/icon-star.svg' alt='star'/>
        
        <h1>How did we do?</h1>

        <p>
            Please let us know how we did with your support request. Aprecciated help us improve our offering!
        </p>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>submit</button>
    </div>
}