import PropTypes from 'prop-types';

const DonatedCard = ({ card }) => {
  const {img, category, caption, bg_color, btn_bg, text_color } = card;

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
          <button>View Details</button>
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