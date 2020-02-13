import React, {useState} from 'react';
import styles from './PostDetails.module.scss'

const PostDetails = ({posts, comments, current_post_id, addComment, newComment}) => {
    const current_post = posts.find(post => post.id === current_post_id)
    const total_comments = comments.filter(curr => curr.post_id === current_post_id)
    const [savedComment, setComment] = useState({});

    return (
        <div className={styles.post_details}>
            <h1>{current_post.title}</h1>
            <p>{current_post.title}</p>
            <div className={styles.make_a_comment}>
                <form className={styles.form}>
                    <textarea className={styles.comment_input_field} onChange={(event) => setComment({...savedComment, comment_details: event.target.value})} placeholder="Make your new comment" />
                </form>
                <button className={styles.button} onClick={() => addComment(newComment = {...savedComment, post_id: current_post_id})}>Submit</button>
            </div>
            <h3 className={styles.comments_title} >Comments:</h3>
            <ol className={styles.comments}>
                {
                total_comments.length === 0 ? <p>No Comments</p> : (
                    total_comments.map((curr, index) => {
                        return (
                        <li className={styles.single_comment} key={index} className={styles.single_comment}>{curr.comment_details}</li>
                        )
                    })
                )
                }
            </ol>
        </div>
    )
}

export default PostDetails;