import React from 'react';
import Toast from 'react-bootstrap/Toast';

function Comment(props) {
    return (
        <>
            <Toast style={{ margin: "25px auto" }}>
                <Toast.Header>
                <img src="https://ca.slack-edge.com/T0351JZQ0-U01J32BRK4H-4267dda409c0-512" style={{ height: "25px", width: "25px"}} className="rounded me-2" alt="" />
                    <strong className="me-auto">{props.username}</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>{props.body}</Toast.Body>
            </Toast>
        </>
    );
}

export default Comment;