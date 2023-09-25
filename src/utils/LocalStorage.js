
const getDataFromLs = () =>{
      const retrievedData = localStorage.getItem('donation')
      if(retrievedData){
            return JSON.parse(retrievedData)
      }
      return []
}

const saveInLocalStorage = (id,toast) =>{
      const existedDonation = getDataFromLs()

      const duplyItem = existedDonation.includes(id) 
      if(duplyItem){
            return toast.error('Already donated!', {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
      } else{
            toast.success('Donated', {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
            existedDonation.push(id)
            localStorage.setItem('donation',JSON.stringify(existedDonation))
      }
}


export {saveInLocalStorage,getDataFromLs}