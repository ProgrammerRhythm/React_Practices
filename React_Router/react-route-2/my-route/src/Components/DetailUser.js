import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const DetailUser = () => {
    const postId = useParams();
    console.log(postId.postId);
    const [userData, setUserData] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId.postId}`)
        .then(res => res.json())
        .then(data => setUserData(data))
    },[])

    console.log(userData);
    const {title,body} = userData;

    const [comment,setComment] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId.postId}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])
    // console.log(comment);
    return (
        <div style={{textAlign: 'center',padding: '40px'}}>
            <h2>Post details</h2>
            <h4>{title}</h4>
            <h5>{body}</h5>
            {/* <button</button> */}
            <h2>Comments-{comment.length}</h2>
            {
                comment.map(com => <ShowComments comment={com}></ShowComments>)
            }
        </div>
    );
};

function ShowComments(props){
    const {body,email,name} = props.comment;
    return( 
        <div style={{border: '1px solid black',margin: '20px', borderRadius:'8px',padding: '10px'}}>
            <img src={`https://avatars.abstractapi.com/v1/?api_key=792016207dd64ae38c42b470904c44f4&name=${email}`} alt="" />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Comment: {body}</p>  
        </div>
    )
}

export default DetailUser;