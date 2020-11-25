import axios from "axios";

export default {
    getUserPosts: function() {
        return axios.get('/api/posts')
    },
    createPost: function(postData) {
        return axios.post('/api/posts', postData);
    },
    updateProfile: function(id, userData) {
        return axios.put('/api/users/' + id, userData);
    }
};
