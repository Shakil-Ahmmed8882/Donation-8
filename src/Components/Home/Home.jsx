import { useState } from "react";
import Donation from "../Donation/Donation";
import Banner from "./Banner";
import { useData } from "../../API/useData";
import { RotatingLines } from  'react-loader-spinner'




const Home = () => {
  const { data } = useData();

  const [inputValue, setInputValue] = useState("");
  let [foundResult, setSearch] = useState([]);


  const displaySearchData = [];
  if (!data) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
      </div>
    );
  } else {
      
    let foundCategory = data.filter((card) =>
      card.category.includes(inputValue)
    );

    displaySearchData.push(...foundCategory);
  }

  const handleSearch = () => {
    const foundData = displaySearchData.length === 0 ? data : displaySearchData;
    setSearch(foundData)
  };

  return (
    <div>
      <Banner
        setInputValue={setInputValue}
        handleSearch={handleSearch}></Banner>
      <Donation
        data={foundResult.length == [] ? data : foundResult}
        inputValue={inputValue}></Donation>
    </div>
  );
};

export default Home;
