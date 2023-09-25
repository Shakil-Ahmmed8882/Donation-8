import './donation.css'
import { useData } from "../../API/useData";
import DonationCard from "./DonationCard";
import PropTypes from 'prop-types'

const Donation = ({matchedWord,inputValue}) => {

  const { data, error } = useData();
  const displaySearchData = []
  
  if (!data) {
    console.log(error);
    return <p className="text-center text-6xl">Loading....</p>;
  } 
  else{
    const filteredDonation = data.filter(eachCard => eachCard.category == matchedWord)
    displaySearchData.push(...filteredDonation)
  }

  let xx;
  if(matchedWord === '' || inputValue === ''){
    xx = data

  }else{
    xx = displaySearchData
    matchedWord = ''
  }
  return (
    <div className="max-w-6xl mx-auto pt-8">
      <div className={`responsive-grid`}>
      {
            xx.map((donation) => (
                  <DonationCard key={donation.id} 
                  donation={donation}
                  ></DonationCard>
                ))
      }
      </div>
    </div>
  );
};

Donation.propTypes = {
  matchedWord:PropTypes.string.isRequired
}


export default Donation;
