import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios"

const SingleWatch = () => {
  const [singlewatch, setSingleWatch] = useState({});

  const { id } = useParams();


  useEffect(()=>{
    axios.get(`http://localhost:8080/watches/${id}`)
    .then((res)=>setSingleWatch(res.data))
  })

  // const store = useSelector((store) => store.appState.watches);

  // console.log(store, id);

  // useEffect(() => {
  //   const singlewatchdata = store.filter((el) => {
  //     return id == el.id;
  //   });
  //   setSingleWatch(singlewatchdata);
  // }, []);

  // console.log(singlewatch[0]);

  return (
    <div style={{textAlign:"center"}}>
      <h2>Watch name</h2>
      <div>
        <img src={singlewatch.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{singlewatch.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
