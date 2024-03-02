import { ResCard } from "./ResCard.js";
import "../styles/style.css";
import { menuOptions } from "../../demo/mocks/menu_mock.js";
export const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="res-containter">
        {menuOptions.map((item) => (
          <ResCard
            key={item?.data?.id}
            cloudinaryImageId={item.data?.cloudinaryImageId}
            name = {item.data.name}
            totalRatingsString={item?.data?.totalRatingsString}
            cuisines={item?.data?.cuisines}
            costForTwo={item?.data?.costForTwo}
            costForTwoString={item?.data?.costForTwoString}
            deliveryTime={item?.data?.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};
