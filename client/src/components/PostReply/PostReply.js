import React from 'react'
import Moment from "moment";

export default function PostReply(props) {
    console.log(props);
    return (
        <div className="postContainer">
            <div className="commentBy">
                Comment by {props.value.createdby.firstName} {props.value.createdby.lastName}
            </div>
            {/* <div className="time">
            {Moment().format('MMMM Do YYYY')}
            </div> */}
            <p>
            {props.value.body}
            </p>
        </div>
    )
}