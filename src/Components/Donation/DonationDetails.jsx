import { useLoaderData, useParams } from "react-router-dom";
import { saveInLocalStorage } from "../../utils/LocalStorage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const ClickedCard = data.find((card) => card.id == id);
  const { img, caption, description, text_color, price } = ClickedCard;

  return (
    <div className="max-w-6xl mx-auto pb-11 px-2">
      <div className="h-[50vh] md:h-[80vh] max-w-6xl bg">
        <img
          className="w-full h-full object-center object-cover "
          src={img}
          alt=""
        />
        <button
          onClick={() => saveInLocalStorage(id, toast)}
          className="absolute bottom-6 border-none text-white md:px-3 md:text-white p-2 md:p-0 text-[14px] md:text-[16px] rounded md:btn left-3"
          style={{ backgroundColor: text_color }}>
          Donate ${price}
        </button>
      </div>
      <div className="mt-8 md:mt-11 space-y-2">
        <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{caption}</h1>
        <p className="text-[#0B0B0BB2] text-[14px] sm:text-15px md:text-[16px] line-height">{description}</p>
      </div>

      {/* error */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* success */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default DonationDetails;
