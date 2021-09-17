import React from 'react';
import Comment from './Comment.js';

function Reptile(props) {
    console.log(props.name);
    let allComments = props.comments.map((c, i) => {
        return <Comment key={i} body={c.comment} username={c.username}/>
    })
    return (
        <div>
            <h1>{props.title}!</h1>
            <p>{props.author}</p>
            <p>{props.body}</p>
            <div className="com">
            <h3>Reptiles:</h3>
            {allComments}
            </div>
        </div>
    );
}

export default Reptile;