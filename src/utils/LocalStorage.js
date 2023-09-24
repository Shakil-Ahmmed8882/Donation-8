const getDataFromLs = () =>{
      const retrievedData = localStorage.getItem('donation')
      if(retrievedData){
            return JSON.parse(retrievedData)
      }
      return []
}

const saveInLocalStorage = id =>{
      const existedDonation = getDataFromLs()

      const duplyItem = existedDonation.includes(id) 
      if(duplyItem){
            return alert('already added')
      } else{
            existedDonation.push(id)
            localStorage.setItem('donation',JSON.stringify(existedDonation))
      }
}


export {saveInLocalStorage,getDataFromLs}