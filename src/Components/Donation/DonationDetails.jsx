import { useLoaderData, useParams } from "react-router-dom";
import { saveInLocalStorage } from "../../utils/LocalStorage";

const DonationDetails = () => {
      const {id} = useParams()
      const data = useLoaderData()
      const ClickedCard = data.find(card => card.id == id)
      const {img,caption,description, text_color,price} = ClickedCard;
      
      return (
            <div className="max-w-6xl mx-auto pb-11" >
                  <div className="h-[80vh] bg">
                        <img className="w-full h-full object-center object-cover " src={img} alt="" />
                        <button onClick={()=> saveInLocalStorage(id)} className="absolute bottom-6 border-none text-white btn left-3" style={{backgroundColor:text_color}}>Donate ${price}</button>
                  </div>
                  <div className="mt-11 space-y-2">
                        <h1 className=" text-3xl md:text-5xl font-bold">{caption}</h1>
                        <p className="text-[#0B0B0BB2] line-height">{description}</p>

                  </div>
            </div>
      );
};

export default DonationDetails;