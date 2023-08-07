import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import { getData } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import WatchCard from "../Components/WatchCard";

const Watches = () => {
  const watches = useSelector((store) => store.appState.watches);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div style={{display:"flex"}}>
      <Filter />
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)" ,gap:"30px",margin:"20px"}}>
        {/* Map through the watch list here using WatchCard Component */}
        {watches.map((el) => {
          return <WatchCard key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
};

export default Watches;
