import React from 'react';
import './UserList.css';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';


export default function UserList(props) {
    return (
        <Button className="userListBtn">
        <li className="list-group-item" id="userList">
            <div className="postTitle">
             Post Title{props.children}
             <ArrowRightCircle style={{ color: "white" }}/>
            </div>
        </li>
        </Button>
    );
}