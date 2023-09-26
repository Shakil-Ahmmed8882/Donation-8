import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DonationCard = ({ donation }) => {


      const {id,img,category,caption,bg_color,btn_bg,text_color} = donation;
      const navigate = useNavigate()

      const handleDetails = () =>{
            navigate(`/details/${id}`)
      }
      

  return (
<div style={{ backgroundColor: bg_color }} onClick={handleDetails} className='cursor-pointer rounded-lg pb-2 shadow-sm'>
      <img className='w-full rounded-tr-lg rounded-tl-lg h-[150px] object-top object-cover' src={img} alt={caption}/>
      <div className='p-3 space-y-3'>
      <button style={{backgroundColor:btn_bg,color:text_color}} className='py-1 px-3 rounded text-[14px]'>{category}</button>
      <h1 style={{color:text_color}} className='font-bold text-[18px]'>{caption}</h1>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired, 
  matchedWord:PropTypes.string.isRequired
};

export default DonationCard;
