import React from 'react'
import { NavLink, HashRouter } from "react-router-dom";
import styles from './ListPosts.module.scss'

const ListPosts = ({posts, updateCurrentPostId}) => {
    return (
        <ol className={styles.list_posts}>
            {
                posts.map( curr => {
                    return (
                        <HashRouter key={curr.id}>
                            <li className={styles.single_post}>
                                <NavLink to="/post-details"><h6 className={styles.title} onClick={() => updateCurrentPostId(curr.id)}>{curr.title}</h6></NavLink>
                                <p className={styles.content}>{curr.body}</p>
                                <hr />
                            </li>
                        </HashRouter>
                        
                    )
                } )
            }
        </ol>
    )
};

export default ListPosts;