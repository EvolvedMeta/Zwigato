import { useState } from "react/cjs/react.development.js";
import { ResCard } from "./ResCard.js";
import "../styles/style.css";
import { menuOptions } from "../../demo/mocks/menu_mock.js";

export const Body = () => {
  const data =
    menuOptions.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
  const [ListOfRestaurants, setListOfRestaurants] = useState(data);
  return (
    <div className="body">
      <div className="search-bar">
        <button
          className="top-rated-button"
          onClick={() => {
            setListOfRestaurants(
              ListOfRestaurants.filter((item) => {
                return item.info.avgRating >= 4;
              })
            );
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="list-all-button"
          onClick={() => {
            setListOfRestaurants(data);
          }}
        >
          Show All Restaurants
        </button>
      </div>

      <div className="res-containter">
        {ListOfRestaurants.map((item) => (
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
    </div>
  );
};
