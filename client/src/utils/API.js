import axios from "axios";

export default {
    getSingleUser: function(id) {
        return axios.get('/api/users/' + id);
    },
    getAllPosts: function() {
        return axios.get('/api/posts');
    },
    getUserPosts: function(id) {
        return axios.get('/api/posts/userPosts/' + id);
    },
    getMentors: function(language) {
        return axios.get('/api/users/mentor/' + language);
    },
    getStudents: function(language) {
        return axios.get('/api/users/student/' + language);
    },
    getSinglePost: function(id) {
        return axios.get('/api/posts/' + id)
    },
    addComment: function(id, comment) {
        return axios.put('/api/posts/' + id, comment);
    },
    createPost: function(postData) {
        return axios.post('/api/posts', postData);
    },
    updateProfile: function(id, userData) {
        return axios.put('/api/users/' + id, userData);
    },
    updateImage: function(id, image) {
        return axios.put("/api/users/image/" + id, image);
    }
};
