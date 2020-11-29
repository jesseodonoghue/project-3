import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import './PostSelect.css';
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';


export default function PostSelect(props) {


const [userPost, setUserPost] = useState({});
const [loading, setLoading] = useState(false);


useEffect(() => {
        loadUserPost();
}, []);

function loadUserPost() {
    setLoading(true);
    API.getSinglePost(props.location.state.postInfo._id)
        .then(res => {
            setUserPost(res.data[0]);
            // console.log(res.data[0]);
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
}

    console.log(userPost)
    
    return (
        <div className="box" style={{ height: "100%" }}>
            <div className="postContainer">
                <div className="postNameDate">
                    <div className="nameImg">
                        <div className="posterImg"></div>
                        <div>Poster's Name</div>
                    </div>
                    <div className="date">
                        date goes here
                    </div>
                </div>
                <h1  className="postTitle">{userPost.title}</h1>
                <div className="postCopyContainer">
                    <p>
                        {userPost.body}
                    </p>
                </div>
            </div>
            <div className="favoriteBtn">   
                <Button>Favorite Post</Button>
            </div>
            <div className="commentAs mlmr">
                Comment as UserName
            </div>
            <div className="postContainer" style={{ marginTop: "1em", marginBottom: "0px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                <div className="postCopyContainer">
                    <p>
                    Duis lobortis nunc sed urna sollicitudin congue. Cras sed elit enim. Pellentesque sagittis, ex non pellentesque dapibus, dolor mauris laoreet tellus, ut finibus erat lacus sed orci. Duis lobortis nunc sed urna sollicitudin congue. Cras sed elit enim. Pellentesque sagittis, ex non pellentesque dapibus, dolor mauris laoreet tellus, ut finibus erat lacus sed orci.
                    </p>
                </div>
            </div>
            <div className="submitCommentBox mlmr">
                    <Button className="submitBtn">Submit Comment</Button>
            </div>
            <div className="postContainer">
                <div className="commentBy">
                    Comment by UserName
                </div>
                <div className="time">
                    9:30pm
                </div>
                <p>
                    Duis lobortis nunc sed urna sollicitudin congue. Cras sed elit enim. Pellentesque sagittis, ex non pellentesque dapibus, dolor mauris laoreet tellus, ut finibus erat lacus sed orci. Duis lobortis nunc sed urna sollicitudin congue. Cras sed elit enim. Pellentesque sagittis, ex non pellentesque dapibus, dolor mauris laoreet tellus, ut finibus erat lacus sed orci.
                </p>
            </div>
        </div>
    )
}
