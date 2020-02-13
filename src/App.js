import React from 'react';
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import { Route, NavLink, HashRouter } from "react-router-dom";
import axios from 'axios';

import './App.css';
import ListPosts from './ListPosts/ListPosts';
import AddNewPost from './AddNewPost.js/AddNewPost';
import PostDetails from './PostDetails/PostDetails';

const initialState = {
	posts: [],
	comments: [],
	current_post_id: ''
}
const INIT_POSTS = 'INIT_POSTS';
const ADD_POST = 'ADD_POST';
const UPDATE_POST_ID = 'UPDATE_POST_ID';
const ADD_COMMENT = 'ADD_COMMENT';

let store = createStore(counterReducer, initialState);
store.subscribe(() => console.log(store.getState()));

function counterReducer(state = initialState, action) {
	switch (action.type) {
		case INIT_POSTS:
			return {
				...state,
				posts: [...action.value.data]
			}
		case ADD_POST: 
			return {
				...state,
				posts: [...state.posts, {userId: action.value.userId, id: action.value.id, title: action.value.title, body: action.value.body}]
			}
		case UPDATE_POST_ID:
			return {
				...state,
				current_post_id: action.value
			}
		case ADD_COMMENT:
			return {
				...state,
				comments: [...state.comments, {comment_details: action.value.comment_details, post_id: action.value.post_id}]
			}
		default:
			return state;
	}
}

axios.get('https://jsonplaceholder.typicode.com/posts').then(res => store.dispatch({ type: INIT_POSTS, value: res}))

const mapDispatchToProps = dispatch => {
	return {
	  addPost: newContent => dispatch({ type: ADD_POST, value: newContent }),
	  updateCurrentPostId: postId => dispatch({ type: UPDATE_POST_ID, value: postId }),
	  addComment: newComment => dispatch({ type: ADD_COMMENT, value: newComment }),
	};
  };

const ConnectedListPosts = connect(
	state => state,
	mapDispatchToProps
)(ListPosts);

const ConnectedAddNewPost = connect(
	state => state,
	mapDispatchToProps
)(AddNewPost);

const ConnectedPostDetails = connect(
	state => state,
	mapDispatchToProps
)(PostDetails);

function App() {
	return (
		<HashRouter>
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<NavLink to="/">List Posts</NavLink>
						<NavLink to="/new-post">New Post</NavLink>
					</header>
					<content>
						<Route exact path="/" component={ConnectedListPosts} />
						<Route path="/new-post" component={ConnectedAddNewPost} />
						<Route path="/post-details" component={ConnectedPostDetails} />
					</content>
				</div>
			</Provider>
		</HashRouter>
	);
}

export default App;
