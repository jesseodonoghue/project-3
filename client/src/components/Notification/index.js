import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import { Checkmark } from 'react-checkmark';

function Success(props) {

    //const [show, setShow] = useState(false);
  
    return (
        //   <Toast onClick={() => setShow(true)} onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast style={{
                zIndex: '4',
                position: 'absolute',
                top: 535,
                right: 30,
                minHeight: '100px',
            }} 
                onClick={props. action} 
                onClose={props.close} 
                show={props.show} 
                delay={props.delay} autohide>
            <Toast.Header>
            <Checkmark size='medium'/>
              <strong style={{ padding: '.5em', marginRight: '2em'}}>Success!  </strong>
              <small>This message will self destruct.</small>
            </Toast.Header>
            <Toast.Body>Your information was updated successfully.</Toast.Body>
        </Toast>
        
    );
  }
  
  export default Success;