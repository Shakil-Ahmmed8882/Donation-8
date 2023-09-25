import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DonatedCard = ({ card }) => {
  const {id,img, category, caption, bg_color, btn_bg, text_color } = card;
  const navigate = useNavigate()

  
  return (
    <div className="flex gap-1 items-center rounded" style={{ backgroundColor: bg_color }}>
      <div>
        <img className="w-[160px]" src={img} alt="" />
      </div>
      <div>
        <div className="p-3 space-y-3">
          <button
            style={{ backgroundColor: btn_bg, color: text_color }}
            className="py-1 px-3 rounded font-bold text-[14px]">
            {category}
          </button>
          <h1 style={{ color: text_color }} className="font-bold text-[18px]">
            {caption}
          </h1>
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
  }).isRequired,
};

export default DonatedCard;