import React from "react";

const PhotoData = props =>{
    return(
        <div className = "card">
          <div>
            <img src = {props.photo} alt ="SpaceImg"></img>
          </div>
          <div>
            <h1>{props.date}</h1>
          </div>
          <div>
            <h2>{props.title}</h2>
          </div>
          <div>
            <p>{props.para}</p>
          </div>
        </div>
    );
};

export default PhotoData;