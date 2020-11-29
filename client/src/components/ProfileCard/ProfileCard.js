import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../../components/Card';
import { Input, FormBtn, TextArea } from '../../components/Form';
import AUTH from '../../utils/AUTH';
import API from "../../utils/API";
import ProfilePic from '../../assets/defaultprofilepic.svg'
import Image from 'react-bootstrap/Image'
import './style.css'
import Notification from '../Notification/index';
import Loading from '../../components/Loading/Loading';



function ProfileCard() {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [formObject, setFormObject] = useState({});
    let formPass = {};
    const formEl = useRef(null);
    const formPassEl = useRef(null);

    //Toast Alert Hook
    const [show, setShow] = useState(false);

    // //Button Hover
    // const [buttonHover, setButtonHover] = useState(false);



    useEffect(() => {
        loadUser();
    }, []);


    function loadUser() {
        setLoading(true);
        AUTH.getUser()
            .then(res => {
                const { data: { user: { firstName, lastName, email, bio, linkedin, github }}} = res;
                setFormObject({ firstName, lastName, email, bio, linkedin, github });
                setUser(res.data.user);
                return res.data.user;
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }


    function MouseOver(event) {
        event.target.style.background = '#5680E9';
    }

    function MouseOut(event) {
        event.target.style.background='#8860D0';
    }

    function handleInputChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value});
        console.log(formObject);
    };

    // function handlePassChange(event) {
    //     event.preventDefault();
    //     const { name, value } = event.target;
    //     formPass = {...formPass, [name]: value};
    //     console.log(formPass);
    // };

    function handleFormSubmit(event) {
        event.preventDefault();
        
        
        const userID = user._id;
        console.log(formObject);

        API.updateProfile(userID, formObject)
        .then(res => {
            formEl.current.reset();
            setUser(res.data);
            console.log(user);
            setShow(true);
        })
        .catch(err => console.log(err));
        
        
    };


    // function handlePassSubmit(event) {
    //     event.preventDefault();

    //     if (!formPass.currPass) {
    //         formPass.firstName = user.firstName;
    //     }

        
    //     const userID = user._id;

    //     API.updateProfile(userID, formObject)
    //     .then(res => {
    //         formEl.current.reset();
    //         setUser(res.data);
    //         console.log(user);
    //     })
    //     .catch(err => console.log(err));
    // };

    function imageUpload() {
        cloudinary.openUploadWidget({
            cloud_name: "dpvjs2wig",
            upload_preset: "gtdegmoh",
            max_image_width: 200,
            max_image_height: 200,
            gravity: "faces",
            crop: "limit"
        },
        function (error, result) {
            if (error) throw error;
            console.log(result);
            console.log(result[0].url);
        });
    }

    return (

        <>
            {loading && (
                <Loading />
            )}
            {!loading && (
                <div style={{ display: "flex", flexDirection: "column", height: "100%"}}>
                    {/* //// Profile Photo Card //// */}
                    <h3 style={{ color: '#5680E9' }}>Profile Photo</h3>
                    <Card>
                        <div className="profile-photo">
                            <Image src={ProfilePic} alt="ProfilePic" fluid/>
                            <FormBtn onMouseOver={MouseOver} onMouseOut={MouseOut} onClick= {imageUpload} style={{ color: "#5680E9", marginTop: ".5em" }}>Edit/Update Profile Picture</FormBtn>
                        </div>
                    </Card> 
                    <div style={{ marginTop: "3em", marginBottom: "3em"}}>
                        <h3 style={{ color: '#5680e9' }}>Personal</h3>
                        <Card title="Profile settings">
                            <form style={{marginTop: 10}} ref={formEl}>
                                    <label htmlFor="firstName">First name: </label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    value={formObject.firstName}
                                    onChange={handleInputChange}
                                />
                                    <label htmlFor="lastName">Last name: </label>
                                <Input
                                    type="text"
                                    name="lastName"
                                    value={formObject.lastName}
                                    onChange={handleInputChange}
                                />
                                    <label htmlFor="email">Email: </label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={formObject.email}
                                    onChange={handleInputChange}
                                />
                                    <label htmlFor="bio">Bio: </label>
                                <TextArea
                                    type="text"
                                    name="bio"
                                    value={formObject.bio}
                                    onChange={handleInputChange}
                                />
                                    <label htmlFor="github">GitHub: </label>
                                <Input
                                    type="text"
                                    name="github"
                                    value={formObject.github}
                                    onChange={handleInputChange}
                                />
                                    <label htmlFor="linkedin">LinkedIn: </label>
                            
                                <Input
                                    type="text"
                                    name="linkedin"
                                    value={formObject.linkedin}
                                    onChange={handleInputChange}
                                />

                                <FormBtn onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={handleFormSubmit}>Save Info</FormBtn>
                            </form>
                            
                                <Notification style={{
                                    top: 500,
                                    left: 300
                                }}
                                    action={() => setShow(true)}
                                    close={() => setShow(false)}
                                    show={show}
                                    delay={3000}
                                />
                        </Card>
                    </div>
                        
                    {/* //// Password Change Form //// */}

                    {/* <div style={{ marginTop: "3em"}}>
                            <h3 style={{ color: '#5680e9' }}>Change Password</h3>
                        <Card title="Create an Account">
                            <form style={{marginTop: 10}} ref={formPassEl}>
                                <label htmlFor="password">Current Password </label>
                                <Input
                                    type="password"
                                    name="currPass"
                                    onChange={handlePassChange}
                                />
                                <label htmlFor="newPass">New Password </label>
                                <Input
                                    type="password"
                                    name="newPass"
                                    onChange={handlePassChange}
                                />
                                <label htmlFor="confPass">Confirm Password </label>
                                <Input
                                    type="password"
                                    name="confPass"
                                    onChange={handlePassChange}
                                />
                                <FormBtn style={{ color: '#5680e9' }} onClick={handlePassSubmit}>Change Password</FormBtn>
                            </form>
                        </Card>
                    </div> */}
                </div>
            )}

        </>
    )
}

export default ProfileCard;