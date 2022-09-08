import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const ItemDetails = () => {
  const params = useParams();
  const playlistId = params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});
  useEffect(() => {
    console.log("playlistId", playlistId);
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const response = await fetch(
      `https://fortnite-api.com/v1/playlists/${playlistId}`
    );
    const data = await response.json();
    console.log("data", data);
    setItem(data);
    setIsLoading(false);
  };

  console.log("item", item);
  console.log("type of item", typeof item);

  return (
    // <div className="App item_display">
    //   {isLoading ? (
    //     <LoadingSpinner />
    //   ) : (
    //     <>
    //       <h1>name: {item.data.name}</h1>
    //       <p>maxPlayers:{item.data.maxPlayers}</p>
    //       <p>minPlayers:{item.data.minPlayers}</p>
    //       <p>maxTeamSize:{item.data.maxTeamSize}</p>
    //       <p>maxTeams:{item.data.maxTeams}</p>
    //     </>
    //   )}
    // </div>

    // WHY BELOW 2 are NOT WORKING
    // how to verify whether object is available after fetching from API to display
    // && condition checking, OR  ? ternary, OR  ?. chain operator, OR isloading
    // why inside isLoading logic unable to verify && verify object condition verify
    // what is the exact way to verify this

    // <div className="App item_display">
    //   <h1>name: {item?.data?.name}</h1>
    //   <p>maxPlayers:{item?.data?.maxPlayers}</p>
    //   <p>minPlayers:{item?.data?.minPlayers}</p>
    //   <p>maxTeamSize:{item?.data?.maxTeamSize}</p>
    //   <p>maxTeams:{item?.data?.maxTeams}</p>
    // </div>

    <div className="App item_display">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          {item.data && (
            <>
              <h1>name: {item.data.name}</h1>
              <p>maxPlayers:{item.data.maxPlayers}</p>
              <p>minPlayers:{item.data.minPlayers}</p>
              <p>maxTeamSize:{item.data.maxTeamSize}</p>
              <p>maxTeams:{item.data.maxTeams}</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ItemDetails;
