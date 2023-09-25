import './donation.css'
import { useData } from "../../API/useData";
import DonationCard from "./DonationCard";
import { createContext, useState } from 'react';

const Donation = () => {
  const { data, error } = useData();
  
  // state for searching the donation cards
  const [matchedWord,setMatchedWord] = useState('')
  
  const searchWord = createContext()

  if (!data) {
    console.log(error);
    return <p className="text-center text-6xl">Loading....</p>;
  }


  return (
    <div className="max-w-6xl mx-auto pt-8">
      <div className={`responsive-grid`}>
      {
            data.map((donation) => (
                  <DonationCard key={donation.id} 
                  donation={donation}
                  ></DonationCard>
                ))
      }
      </div>
    </div>
  );
};

export default Donation;
