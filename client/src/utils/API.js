import axios from "axios";

export default {
    getAllPosts: function() {
        return axios.get('/api/posts');
    },
    getUserPosts: function(id) {
        return axios.get('/api/posts/userPosts/' + id);
    },
    createPost: function(postData) {
        return axios.post('/api/posts', postData);
    },
    getSinglePost: function(id) {
        return axios.get('/api/posts/' + id)
    },
    updateProfile: function(id, userData) {
        return axios.put('/api/users/' + id, userData);
    },
    getMentors: function(language) {
        return axios.get('/api/users/mentor/' + language);
    },
    getStudents: function(language) {
        return axios.get('/api/users/student/' + language);
    },
    updateImage: function(id, image) {
        return axios.put("/api/users/image/" + id, image);
    }
};
