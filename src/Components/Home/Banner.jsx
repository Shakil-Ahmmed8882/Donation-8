

const Banner = () => {
      const matchedElements = ['education','health','clothing','food']

      const handleSearch = (e) =>{
            const value =  e.target.value.toLowerCase()
            for(const char of matchedElements){
                  const matchingChar = char.includes(value)

                  if(matchingChar){
                        console.log(char)
                  }else{
                        console.log(matchingChar)
                  }
            }
            // console.log(matchedElements.includes(value))
      }


      return (
            <div className="w-full h-[70vh] bg-[#f4f3ff] flex flex-col items-center justify-center">
                        <h1 className="text-5xl text-black font-bold py-3">I Grow By Helping People In Need</h1>
                        <label className="flex mt-8">
                              <div className="py-2 px-3 border-[1px] w-80 border-r-none border-[#9e9e9e78] bg-white">
                              <input onChange={handleSearch} className="bg-transparent outline-none" type="search" name="" id="" placeholder="Search here.." />
                              </div>
                              <button className="bg-[#FF444A] text-white p-3 rounded-r">Search</button>

                        </label>
            </div>
      );
};

export default Banner;