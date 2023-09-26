import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DonatedCard = ({ card }) => {
  const {id,img,price, category, caption, bg_color, btn_bg, text_color } = card;
  const navigate = useNavigate()

  
  return (
    <div className="sm:flex gap-1  rounded" style={{ backgroundColor: bg_color }}>
      <div>
        <img className="w-[100%] sm:w-[180px] h-full object-cover rounded-tl-lg rounded-bl-lg" src={img} alt="" />
      </div>
      <div>
        <div className="p-3 space-y-3">
          <button
            style={{ backgroundColor: btn_bg, color: text_color }}
            className="py-1 px-3 rounded font-bold text-[14px]">
            {category}
          </button>
          <h1 className="font-bold md:text-[20px]">
            {caption}
          </h1>
          <p style={{color:text_color,fontWeight:'bold'}}>${price}</p>
            <button onClick={()=>navigate(`/details/${id}`)} style={{backgroundColor:text_color}} className='text-white px-2 py-2 rounded text-[13px]'>View Details</button>
        </div>
      </div>
    </div>
  );
};

DonatedCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    bg_color: PropTypes.string.isRequired,
    btn_bg: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
    price:PropTypes.number.isRequired
  }).isRequired,
};

export default DonatedCard;