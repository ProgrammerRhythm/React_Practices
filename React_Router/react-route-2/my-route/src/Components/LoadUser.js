import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link } from "react-router-dom";
import Button from '@mui/material/Button';
const LoadUser = (props) => {
    const {id,title,body} = props.post;
    // console.log(props.user);
   
    return (
    <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
    <Card style={{margin:'20px'}} sx={{ maxWidth: 575 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Post Id : {id}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined" color="error"> 
      <Link color="error" style={{textDecoration: "none"}}to={`/posts/${id}`}>View Details</Link>
        
      </Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default LoadUser;