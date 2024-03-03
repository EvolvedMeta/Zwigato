import { ResCard } from "./ResCard.js";
import "../styles/style.css";
import { menuOptions } from "../../demo/mocks/menu_mock.js";
export const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="res-containter">
        {menuOptions.data.cards[0].card.card.gridElements.infoWithStyle.restaurants.map((item) => (
          <ResCard
            key={item?.info?.id}
            cloudinaryImageId={item.info?.cloudinaryImageId}
            name = {item?.info?.name}
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
