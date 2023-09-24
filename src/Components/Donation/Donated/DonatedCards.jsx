
import { useLoaderData } from "react-router-dom";
import { getDataFromLs } from "../../../utils/LocalStorage";
import DonatedCard from "./DonatedCard";


const DonatedCards = () => {
      const data = useLoaderData()
      const savedCardIds = getDataFromLs()
      const DonatedItems = []
      for(const id of savedCardIds){
            const foundDonation = data?.filter(donation => donation.id == id)
            DonatedItems.push(...foundDonation)
      
      }
      return (
            <div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 py-11">
                  {
                        DonatedItems?.map(card => <DonatedCard key={card.id} card={card}></DonatedCard>)
                  }
            </div>
            <div className="text-center pt-4">
            <button className="bg-green-500 hover:bg-green-600 btn text-white">Show all</button>
            </div>
            </div>
      );
};

export default DonatedCards;