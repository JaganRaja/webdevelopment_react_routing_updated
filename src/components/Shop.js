import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      // const response = await fetch("https://fortnite-api.com/v2/cosmetics/br");
      const response = await fetch("https://fortnite-api.com/v1/playlists");
      const data = await response.json();
      const data_first_10 = data.data.slice(0, 10);
      console.log(data_first_10);
      setItems(data_first_10);
      setIsLoading(false);
    } catch {
      setErrorMessage(
        "Unable to fetch user list.. please check the internet connection..."
      );
      setIsLoading(false);
    }
  };

  //   return (
  //     <div className="App">
  //       {isLoading ? (
  //         <div>Loading</div>
  //       ) : (
  //         <>
  //           <h2>Please click on any of the playlist to know more details</h2>
  //           {items.map((item) => {
  //             return (
  //               <div key={item.id} className="item_style">
  //                 <h5>
  //                   <Link to={`/shop/${item.id}`}>
  //                     playlist name: {item.name}
  //                   </Link>
  //                 </h5>
  //               </div>
  //             );
  //           })}
  //         </>
  //       )}
  //     </div>
  //   );
  // };

  return isLoading ? (
    <div className="App">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="App">
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <h2>Please click on any of the playlist to know more details</h2>
      )}

      {items.map((item) => {
        return (
          <div key={item.id} className="item_style">
            <h5>
              <Link to={`/shop/${item.id}`}>playlist name: {item.name}</Link>
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
