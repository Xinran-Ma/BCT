import axios from 'axios';

const FetchPosts = axios.get('https://jsonplaceholder.typicode.com/posts');

export default FetchPosts;