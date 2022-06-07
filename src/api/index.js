import axios from "axios";

const url = 'https://covid19.mathdro.id/api'

export const fetchData=async (country) => {
  let changeableUrl = url;
   if (country && country!=='global') {
     changeableUrl = `${url}/countries/${country}`}
    
    
  try {

    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
   
    const modifiedData= {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    }
    
    //can also return {confirmed,recovered,deaths,lastUpdate} straight away 
    return modifiedData

   } 
   
   catch (error) {
       return "error fetching data"
   }

}

export const fetchDailyData = async () => {
    try {
      const {data} = await axios.get(`${url}/daily`)
      const modifiedData = data.map((dailyData)=> ({
          confirmed:dailyData.confirmed.total,
          deaths:dailyData.deaths.total,
          date: dailyData.reportDate
      }))
      // console.log("dailyData in index.js = ", modifiedData)
      return modifiedData
   
    } 
    
    catch (error) {
      console.log(error)
    }
}

export const fetchCountries = async () => {
  try {
    const {data:{countries}} = await axios.get(`${url}/countries`);
    return countries.map((country)=> country.name)

  } 
  
  catch (error) {
    console.log(error)
  }
}

//

