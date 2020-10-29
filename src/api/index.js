import axios from 'axios'

const url='https://covid19.mathdro.id/api'

 export const fetchData= async(country)=>{
     let changableurl= url
     if(country){
        changableurl=`${url}/countries/${country}`
     }
      try{
          /*  one way of getting the required data from api */
        //  const {data} = await axios.get(url)
         
        //   const modifieddata={
        //       confirmed:data.confirmed,
        //       recovered: data.recovered,
        //       deaths: data.deaths,
        //       lastUpdate: data.lastUpdate
        //   }
        //    return modifieddata

        /*  OR we can just Do this shortcut*/

        const {data:{ confirmed, recovered, deaths, lastUpdate}} = await axios.get(changableurl)
          const modified={confirmed, recovered, deaths, lastUpdate}
          return modified

}
catch(error){
      console.log(error)
        }
}

 export const fetchDailyData= async ()=>{
     try {
         const {data}=  await axios.get(`${url}/daily`)

         const modifiedData= data.map((dailyData)=>({
             confirmed: dailyData.confirmed.total,
             deaths:dailyData.deaths.total,
             data:dailyData.reportDate}))

             return modifiedData;
     } 
     catch (error) {
         console.log(error)
     }
 }

 export const fetchCountries= async()=>{
 try {
     const {data:{countries}}= await axios.get(`${url}/countries`)

     return countries.map((country)=>country.name)
 } catch (error) {
      console.log(error)
 }

 }