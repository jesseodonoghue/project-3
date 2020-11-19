import React from 'react';
import './PostSelect.css';
import Button from 'react-bootstrap/Button';

export default function PostSelect() {
    return (
        <div className="box" style={{ height: "100%" }}>
            <div className="postContainer">
                <div className="postNameDate">
                    <div className="nameImg">
                        <div className="posterImg"></div>
                        <div>Posters Name</div>
                    </div>
                    <div className="date">
                        00/00/0000
                    </div>
                </div>
                <h1  className="postTitle">Post Title</h1>
                <div className="postCopyContainer">
                    <p>
                        Duis lobortis nunc sed urna sollicitudin congue. Cras sed elit enim. Pellentesque sagittis, ex non pellentesque dapibus, dolor mauris laoreet tellus, ut finibus erat lacus sed orci. Quisque at lacinia dolor. Aenean tempus maximus nisl placerat dapibus. Curabitur fringilla lectus sit amet sapien tempor tempus. Sed placerat in mi a tincidunt.
                        Sed vehicula augue a auctor dictum. Sed aliquam, libero sed tristique faucibus, augue nisl mollis nibh, eu porttitor metus augue ut nunc. Pellentesque imperdiet elit nibh, sit amet varius lorem accumsan nec. Mauris sodales urna vitae vestibulum imperdiet. Phasellus vestibulum maximus dolor. Donec id vehicula felis, congue blandit ex. Cras efficitur vehicula rhoncus. Sed eget lacus mattis quam congue volutpat. Duis sagittis et dui a sollicitudin. Vestibulum eu egestas dolor. Nam vestibulum purus ut justo viverra, non blandit ante dapibus. Proin sodales consequat ante, at dignissim ante. Etiam eleifend orci nec felis luct
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
