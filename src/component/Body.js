import { useEffect, useState } from "react";
import { ResCard } from "./ResCard.js";
import "../styles/style.css";
import { menuOptions } from "../../demo/mocks/menu_mock.js";
import { Swiggy_Endpoint } from "../utils/urls.js";
import { Smimmer } from "./Shimmer.js";

export const Body = () => {
  // const data =
  //   menuOptions.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [FilteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    ListOfRestaurants.length === 0 ?? setListOfRestaurants([]);
  }, []);

  const fetchData = async () => {
    const API_DATA = await fetch(Swiggy_Endpoint);
    const response = await API_DATA.json();
    const data =
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(data);
    ListOfRestaurants.length === 0 ?? setListOfRestaurants([]);
    setFilteredListOfRestaurants(data);
  };

  return (
    <div className="body">
      <div className="options-bar">
        <div className="seach-container space">
          <input
            type="text"
            className="seach-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-button"
            onClick={() => {
              const NewItems = ListOfRestaurants.filter((item) => {
                return item.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              NewItems.length === 0
                ? setFilteredListOfRestaurants([])
                : setFilteredListOfRestaurants(NewItems);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-button space"
          onClick={() => {
            setFilteredListOfRestaurants(
              ListOfRestaurants.filter((item) => {
                return item.info.avgRating >= 4;
              })
            );
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="list-all-button space"
          onClick={() => {
            setFilteredListOfRestaurants(ListOfRestaurants);
          }}
        >
          Show All Restaurants
        </button>
      </div>
      {FilteredListOfRestaurants.length === 0 ? (
        <Smimmer />
      ) : (
        <div className="res-containter">
          {FilteredListOfRestaurants.map((item) => (
            <ResCard
              key={item?.info?.id}
              cloudinaryImageId={item.info?.cloudinaryImageId}
              name={item?.info?.name}
              avgRatingString={item?.info?.avgRatingString}
              cuisines={item?.info?.cuisines}
              costForTwo={item?.info?.costForTwo}
              deliveryTime={item?.info?.sla?.deliveryTime}
            />
          ))}
        </div>
      )}
    </div>
  );
};
