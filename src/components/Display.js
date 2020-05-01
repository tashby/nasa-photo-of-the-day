import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoData from "./PhotoData.js";

export default function Display(){

  const [pic, setPic] = useState([]);
  const [title, setTitle] = useState([]);
  const [para, setPara] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
      console.log(response);
      setPic(response.data.url);
      setTitle(response.data.title);
      setPara(response.data.explanation);
      setDate(response.data.date);
    })
    .catch(response => {
      console.log("error");
    });
  }, []);


  return(
      <PhotoData photo={pic}
      date ={date}
      title = {title}
      para = {para}
      />

  )
}