import './donation.css'
import { useData } from "../../API/useData";
import DonationCard from "./DonationCard";

const Donation = () => {
  const { data, error } = useData();

  if (!data) {
    console.log(error);
    return <p className="text-center text-6xl">Loading....</p>;
  }
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-6xl">Donation: {data.length}</h1>

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
