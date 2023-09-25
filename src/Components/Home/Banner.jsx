import './home.css'
import PropTypes from 'prop-types'
const Banner = ({setMatchedWord,setInputValue}) => {
      const matchedElements = ['education','health','clothing','food']

      // handle search
      
      const handleSearch = (e) =>{
             setInputValue(e.target.value)
            const value =  e.target.value.toLowerCase()
            for(const char of matchedElements){
                  const matchingChar = char.includes(value)

                  if(matchingChar){
                        setMatchedWord(char)
                  }
            }
            // console.log(matchedElements.includes(value))
      }


      return (
            <div className="w-full h-[75vh] banner-bg flex flex-col items-center justify-center">
                        <h1 className="text-3xl text-center md:text-5xl mt-20 text-black font-bold py-3">I Grow By Helping People In Need</h1>
                        <label className="flex mt-8 w-full px-4 justify-center text-[10px] md:text-[16px]">
                              <div className="py-2  border-[1px] w-[80%] sm:w-[50%] md:w-[40%] px-3 border-r-none border-[#9e9e9e78] bg-white">
                              <input onChange={handleSearch} className="bg-transparent outline-none" type="search" name="" id="" placeholder="Search here.." />
                              </div>
                              <button className="bg-[#FF444A] text-white md:p-3 md:px-6 rounded-r">Search</button>
                        </label>
            </div>
      );
};


Banner.propTypes = {
      setMatchedWord:PropTypes.func.isRequired,
      setInputValue : PropTypes.func.isRequired
}

export default Banner;