import React, { useCallback, useState, useEffect, useRef } from 'react';
import './profileUser.css';
import '../../components/List/List.css';
import bgImg from '../../assets/profilebg.svg';
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';
import AUTH from "../../utils/AUTH";
import API from "../../utils/API";
import Loading from '../../components/Loading/Loading';
import { useSpring, animated as a, interpolate } from 'react-spring';



export default function ProfileUser(props) {

    //react spring interpolate
    const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
    const interpBg = xy.interpolate((x, y) => `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(0%, 0%, 0)`);
    const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), []);
    const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), []);


    //get routes and stuff here

    // User information is not being pulled :(
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [skillsArr, setSkillsArr] = useState([]);

    const profile = props.location.state.userInfo;

    useEffect(() => {
        loadUser();
    }, []);


    function loadUser() {
        setLoading(true);
        AUTH.getUser()
            .then(res => {
                setUser(res.data.user);
                return res.data.user;
            })
            .then(() => {
                setSkillsArr(getSkills(profile));
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
                <div className="box" style={{backgroundSize: "cover", backgroundImage: `url(${bgImg})`, justifyContent:"center", alignItems:"center", overflowX:"auto", height: "100vh"}} onMouseMove={onMove} onScroll={onScroll}>
                    <div className="row" style={{ display: "flex", width: "100%", height: "100%", marginLeft: "0px", marginRight: "0px", justifyContent:"center", alignItems:"center", overflow: "hidden"}}>
                        <div className="col-md-12" id="flexfix" style={{ padding: "0px", justifyContent:"center", alignItems:"center", display: "flex"}}>
                            <a.div className="profileCard" style={{ width: "100%", maxWidth: "500px", maxHeight: "600px", transform: interpBg, boxShadow: "0px 0px 10px black"}}>
                                <div className="profileContent" style={{ textAlign: "center" }}>
                                    {profile.image === "" && (
                                        <img src={ProfilePicL} className="profileImg"/>
                                    )}
                                    {profile.image !== "" && (
                                        <img src={profile.image} className="profileImg"/>
                                    )}
                                    <h4 style={{ fontWeight: "bold", color: "#5680E9" }}>{profile.firstName} {profile.lastName}</h4>
                                    <p style={{ wordWrap: "break-word" }}>{profile.bio}</p>
                                    <p style={{ wordWrap: "anywhere" }}><strong>LinkedIn:</strong><br /> <a id="LinkedText" href={profile.linkedin} target="blank">{profile.linkedin}</a></p>
                                    <p style={{ wordWrap: "anywhere" }}><strong>GitHub:</strong><br /> <a id="GitText" href={profile.linkedin} target="blank">{profile.github}</a></p>

                                    <hr/>
                                    <h4 style={{ marginTop: "15px", fontWeight: "bold", color: "#5680E9" }}>Skills</h4>
                                    {skillsArr.length ? (
                                        <ul className="profileskills" style={{ textAlign: "left" }}>
                                            {skillsArr.map((skill, i) => (
                                                <li style={{marginLeft: "10px"}} key={i}>{skill}</li>
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
