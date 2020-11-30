import React, { useCallback, useState, useEffect, useRef } from 'react';
import './profileUser.css';
import '../../components/List/List.css';
import bgImg from '../../assets/profilebg.svg';
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';
import AUTH from "../../utils/AUTH";
import API from "../../utils/API";
import Loading from '../../components/Loading/Loading';
import { useSpring, animated as a, interpolate } from 'react-spring';



export default function ProfileUser() {

    //react spring interpolate
    const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
    const interpBg = xy.interpolate((x, y) => `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(0%, 0%, 0)`);
    const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), []);
    const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), []);


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
        <>
            {loading && (
                <Loading />
            )}
            {!loading && (
                <div className="box" style={{backgroundSize: "cover", backgroundImage: `url(${bgImg})`, justifyContent:"center", alignItems:"center"}} onMouseMove={onMove} onScroll={onScroll}>
                    <div className="row" style={{ display: "flex", width: "100%", marginLeft: "0px", marginRight: "0px", justifyContent:"center", alignItems:"center"}}>
                        <div className="col-md-12" id="flexfix" style={{ padding: "0px", justifyContent:"center", alignItems:"center", display: "flex"}}>
                            <a.div className="profileCard" style={{ width: "100%", maxWidth: "500px", transform: interpBg, boxShadow: "0px 0px 10px black"}}>
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
                            </a.div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

}
