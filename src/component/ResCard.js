import "../styles/style.css";
export const ResCard = (props) => {
  const {
    name,
    avgRatingString,
    cuisines,
    costForTwo,
    deliveryTime,
    cloudinaryImageId
  } = props;
  return (
    <div className="res-card" >
      <img
        className="res-image"
        alt="res-logo"
        src={
          `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_420,c_fill/` +
          cloudinaryImageId
        }
      />
      <h3 className="res-title">{name}</h3>
      <div className="middle-content">
        <h4 className="res-item">
          <span className="fa fa-star checked"></span>{" "}
          {avgRatingString + " - " + deliveryTime + " mins"} mins
        </h4>
        <h4 className="res-item">{costForTwo}</h4>
      </div>
      <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
    </div>
  );
};
