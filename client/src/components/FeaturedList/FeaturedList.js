import React from 'react';
import './FeaturedList.css';
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';

export default function FeaturedList(props) {

    const post = props.post;

    return (
        <div>
            {post && (
                <li className="list-group-item" id="featuredList">
                    <div className="postTitle">
                    {post.title}
                    </div>
                    <div className="nameandImgContainer">
                        <div className="poster">
                            {post.createdby.firstName} {post.createdby.lastName}
                        </div>
                        <img src={post.createdby.image || ProfilePicL} className="posterImg"/>
                    </div>
                </li>
            )}
        </div>
    );
}