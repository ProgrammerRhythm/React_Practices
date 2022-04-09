// import React, { useState } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
const News = (props) => {
    const handleAdded = (props) => {
        window.open(props, '_blank');
    }
    return (
        <div style={{textAlign: 'center',display: 'flex',flexDirection: 'row',justifyContent: 'center'}}>
        <Card style={{textAlign: 'center',padding: '10px',margin: '40px'}} sx={{ maxWidth: 600}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.articles.urlToImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.articles.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.articles.description}
            </Typography>
            <Button onClick={() => handleAdded(props.articles.url)} variant="contained" color="success">
                Success
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    );
};

export default News;









// // import React, { useState } from 'react';
// import {Card,Button} from 'react-bootstrap'
// const News = (props) => {
//     const handleAdded = (props) => {
//         window.open(props, '_blank');
//     }
//     return (
//     <Card>
//   {/* <Card.Header>{props.articles.title}</Card.Header> */}
//   <Card.Body>
//     <Card.Title>{props.articles.title}</Card.Title>
//     <img style={{width: '600px', height: '350px'}} src={props.articles.urlToImage} alt="" />
//     <Card.Text>
//       With supporting text below as a natural lead-in to additional content.
//     </Card.Text>
//     <Button onClick={() => handleAdded(props.articles.url)} variant="primary">Read More</Button>
//   </Card.Body>
// </Card>
//     );
// };

// export default News;