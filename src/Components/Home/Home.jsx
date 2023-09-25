import { useState } from "react";
import Donation from "../Donation/Donation";
import Banner from "./Banner";
import { useData } from "../../API/useData";


const Home = () => {

      const {data,error} = useData()

        const [inputValue,setInputValue] = useState('')
        let [foundResult, setSearch] = useState([])

        const displaySearchData = []

        if (!data) {
          console.log(error);
          return <p className="text-center text-6xl">Loading....</p>;
        }
        else {
         const foundCategory = data.filter(card => card.category.includes(inputValue) )
         displaySearchData.push(...foundCategory)
        }


        const handleSearch = () => {
              const foundData = displaySearchData.length === 0 ? data: displaySearchData;
            setSearch(foundData)
        }


      return (
            <div> 
                  <Banner
                  setInputValue={setInputValue}
                  handleSearch={handleSearch}
                  ></Banner>         
                  <Donation
                  data={foundResult.length == [] ? data : foundResult}
                  error={error}
                  inputValue={inputValue}
                  ></Donation>
            </div>
      );
};

export default Home;