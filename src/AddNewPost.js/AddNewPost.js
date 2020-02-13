import React, {useState} from 'react'
import styles from './AddNewPost.module.css'

const ListPosts = ({posts, newContent, addPost}) => {
    const [postContent, setContent] = useState({});
    const posts_number = posts.length + 1;

    return (
        <div className={styles.add_new_post}>
            <form className={styles.form}>
                <input type="text" className={styles.title} onChange={(event) => setContent({...postContent, title: event.target.value})} name="title" placeholder="Title" />
                <input type="text" className={styles.user_id} onChange={(event) => setContent({...postContent, userId: event.target.value})} name="user-id" placeholder="User ID" />
                <textarea className={styles.body} onChange={(event) => setContent({...postContent, body: event.target.value})} placeholder="Post Content" />
            </form>
            <button className={styles.button} onClick={() => addPost(newContent = {...postContent, id: posts_number})}>Submit</button>
        </div>
    )
};

export default ListPosts;