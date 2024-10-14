// src/services/PostService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/posts';

export const createPost = async (postData) => {
    return await axios.post(API_URL, postData);
};

export const deletePost = async (postId) => {
    return await axios.delete(`${API_URL}/${postId}`);
};

export const getPosts = async () => {
    return await axios.get(API_URL);
};