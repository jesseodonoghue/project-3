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
    },
    getMentors: function(language) {
        return axios.get('/api/users/mentor/' + language);
    },
    getStudents: function(language) {
        return axios.get('/api/users/student/' + language);
    }
};
