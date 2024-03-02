import '../styles/style.css';
export const ResCard = (props) => {
  const { name, totalRatingsString, cuisines, costForTwo, costForTwoString, deliveryTime, cloudinaryImageId } = props;
  return (
    <div className="res-card key">
      <img className="res-image" alt="res-logo" src={
        `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_420,c_fill/`+ cloudinaryImageId
      } />
      <h3 className="res-title">{name}</h3>
      <h4 className='res-item'>{cuisines.join(', ')}</h4>
      <h4 className='res-item'>{totalRatingsString}</h4>
      <h4 className='res-item'>Delivery in: {deliveryTime} mins</h4>
      <h4 className='res-item'>{costForTwoString}</h4>
    </div>

  );
};
