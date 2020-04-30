import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader, Button, CardFooter} from 'reactstrap';

const PhotoData = props =>{
    return(
        <div className = "cardContainer">
          <Card body outline color="danger">
          <CardHeader>Photo Of The Day</CardHeader>
        <CardImg top width="100%" src={props.photo} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardText>{props.para}</CardText>
          <Button>Click for More Info!</Button>
        </CardBody>
        <CardFooter className="text-muted">Photo Updates Daily</CardFooter>
      </Card>
        </div>
        
    );
};

export default PhotoData;