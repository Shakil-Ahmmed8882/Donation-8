import "./donation.css";
import DonationCard from "./DonationCard";
import PropTypes from "prop-types";

const Donation = ({ data }) => {
  return (
    <div className="max-w-6xl mx-auto pt-8 pb-11 px-2">
      <div className={`responsive-grid`}>
        {data.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

Donation.propTypes = {
  matchedWord: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
};

export default Donation;
