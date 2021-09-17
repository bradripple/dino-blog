import React, { useState } from 'react';
import Comment from './Comment.js';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';

function Dino(props) {
    let [state, setState] = useState({
        body: props.body,
        tempBody: ''
    })
    console.log(state); // { body: "Check out this body property"}

    let allComments = props.comments.map((c, i) => {
        return <Comment key={i} body={c.comment} username={c.username} />
    })

    // handleBodyEdit
    const handleBodyEdit = (e) => {
        let input = prompt("What is the newedit for the blog post");
        console.log(input);
        setState({
            body: input

        })

    }


    // handleFormEdit
    const handleFormEdit = (e) => {
        e.preventDefault();
        setState({
            body: state.tempBody
        })

    }

    return (
        <div>
            <h1>{props.title} Blog!</h1>
            <p>Written by: {props.author}</p>
            <form onSubmit={handleFormEdit}>
                <label htmlFor="body">Add new blogpost  </label>
                <input type="text" name="body" onChange={e => setState({ tempBody: e.target.value })} />
                <button type="submit">Submit</button>
            </form>
            <br />
            <br />
            <Alert variant="success">
                <Alert.Heading>Blog post</Alert.Heading>
                <p className="mb-0">By: {props.author}</p>
                <hr />
                <p>{state.body}</p>
                <button onClick={handleBodyEdit}>Edit Post</button>
            </Alert>

            <div className="com">
                <h3>Comments:</h3>
                {allComments}
            </div>
        </div>
    );
}

export default Dino;