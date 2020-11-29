import React, { useState, useEffect, useRef } from 'react';
import './profileUser.css';
import '../../components/List/List.css';
import bgImg from '../../assets/profilebg.svg';
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';
import AUTH from "../../utils/AUTH";
import API from "../../utils/API";
import Loading from '../../components/Loading/Loading';



export default function ProfileUser() {
    //get routes and stuff here

    // User information is not being pulled :(
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [skillsArr, setSkillsArr] = useState([]);
    let formObject = {};
    const formEl = useRef(null);

    useEffect(() => {
        loadUser();
    }, []);


    function loadUser() {
        setLoading(true);
        AUTH.getUser()
            .then(res => {
                setUser(res.data.user);
                console.log(res.data.user);
                return res.data.user;
            })
            .then((userData) => {
                // console.log(userData);
                setSkillsArr(getSkills(userData));
                // console.log(skillsArr);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function getSkills(user) {
        const tempArr = [];

        if(user.jsMentor === true) {
            tempArr.push("JavaScript");
        }
        if(user.htmlMentor === true) {
            tempArr.push("HTML");
        } 
        if(user.cssMentor === true) {
            tempArr.push("CSS");
        }
        if(user.nodejsMentor === true) {
            tempArr.push("Node.js");
        }
        if(user.expressMentor === true) {
            tempArr.push("Express");
        }
        if(user.reactMentor === true) {
            tempArr.push("React");
        }
        if(user.mongodbMentor === true) {
            tempArr.push("MongoDB");
        }
        if(user.mysqlMentor === true) {
            tempArr.push("mySQL");
        }

        // console.log(tempArr);
        return tempArr;
    }

    return (
        <div>
            {loading && (
                <Loading />
            )}
            {!loading && (
                <div className="box" style={{backgroundSize: "cover", backgroundImage: `url(${bgImg})`, justifyContent:"center", alignItems:"center"}}>
                    <div className="row" style={{ display: "flex", width: "100%", marginLeft: "0px", marginRight: "0px", justifyContent:"center", alignItems:"center"}}>
                        <div className="col-md-12" id="flexfix" style={{ padding: "0px", justifyContent:"center", alignItems:"center", display: "flex"}}>
                            <div className="profileCard" style={{ width: "100%", maxWidth: "500px"}}>
                                <div className="profileContent">
                                    <img src={ProfilePicL} className="profileImg"/>
                                    <h3>{user.firstName} {user.lastName}</h3>
                                    <p style={{ wordWrap: "break-word" }}>{user.bio}</p>
                                    <p style={{ wordWrap: "break-word" }}>LinkedIn: {user.linkedin}</p>
                                    <p style={{ wordWrap: "break-word" }}>GitHub: {user.github}</p>
                                    <hr/>
                                    <h3>Skills</h3>
                                    {skillsArr.length ? (
                                        <ul>
                                            {skillsArr.map((skill, i) => (
                                                <li key={i}>{skill}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                    <p>No skills added yet</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}
