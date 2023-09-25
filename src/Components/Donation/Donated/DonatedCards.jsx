
import { useLoaderData } from "react-router-dom";
import { getDataFromLs } from "../../../utils/LocalStorage";
import DonatedCard from "./DonatedCard";
import { useState } from "react";


const DonatedCards = () => {
      const data = useLoaderData()
      const savedCardIds = getDataFromLs()
      const DonatedItems = []

      //state to sliced and show less and all based on logic
      const [dataLength, setDataLength] = useState(4)
      const length4 = dataLength === 4

      for(const id of savedCardIds){
            const foundDonation = data?.filter(donation => donation.id == id)
            DonatedItems.push(...foundDonation)
      }


      // if no donation yet
      if(DonatedItems.length === 0){
            return <div className="w-full h-[60vh] flex justify-center items-center">
                  <p className="text-center text-9xl">😢</p>
            </div> 
      }

      return (
            <div className="mb-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 py-11">
                  {
                        DonatedItems?.slice(0,dataLength).map(card => <DonatedCard key={card.id} card={card}></DonatedCard>)
                  }
            </div>
            <div className={`${DonatedItems.length <= 4?'hidden':'block'} text-center`}>
            <button onClick={()=> length4? setDataLength(DonatedItems.length):setDataLength(4)} className={`bg-green-500 hover:bg-green-600 btn text-white`}>{length4?'Show All':'Show Less'}</button>
            </div>
            </div>
      );
};

export default DonatedCards;