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
    let widget =  window.cloudinary.createUploadWidget({
        cloud_name: "dpvjs2wig",
        upload_preset: "gtdegmoh",
        cropping: true,
        croppingCoordinatesMode: "custom",
        croppingAspectRatio: 1,
        showSkipCropButton: false
    },
    function (error, result) {
        imageUpload(result);
    });

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


    function imageUpload(resultEvent) {
        const userID = user._id;
        if(resultEvent.event === "success") {
            const imageURL = {
                image: resultEvent.info.secure_url
            };

            API.updateImage(userID, imageURL)
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
        }
    }

    function showWidget() {
        widget.open();
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
                            {user.image === "" && (
                                <Image src={ProfilePic} alt="ProfilePic" fluid/>
                            )}
                            {user.image !== "" && (
                                <Image src={user.image} alt="ProfilePic" fluid/>
                            )}
                            <FormBtn onMouseOver={MouseOver} onMouseOut={MouseOut} onClick= {showWidget} style={{ color: "#5680E9", marginTop: ".5em" }}>Edit/Update Profile Picture</FormBtn>
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
                            
                                <Notification 
                                    action={() => setShow(true)}
                                    close={() => setShow(false)}
                                    show={show}
                                    delay={3000}
                                />
                        </Card>
                    </div>
                </div>
            )}

        </>
    )
}

export default ProfileCard;