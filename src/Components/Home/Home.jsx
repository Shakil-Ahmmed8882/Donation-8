import { useState } from "react";
import Donation from "../Donation/Donation";
import Banner from "./Banner";


const Home = () => {
        // state for searching the donation cards
        const [matchedWord,setMatchedWord] = useState('')
        const [inputValue,setInputValue] = useState('')
        
      return (
            <div> 
                  <Banner
                  setMatchedWord={setMatchedWord}
                  setInputValue={setInputValue}
                  ></Banner>         
                  <Donation
                  matchedWord={matchedWord}
                  inputValue={inputValue}
                  ></Donation>
            </div>
      );
};

export default Home;