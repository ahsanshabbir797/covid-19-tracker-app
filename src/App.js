import React from "react";
import {Cards, Chart2, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData,fetchDailyData } from "./api";

class App extends React.Component {
    
    state = {
        data:{   },
        data2:[  ],
        country: '',

    }

    handleCountryChange = async (country) => {
        const fetchedData=await fetchData(country);
        console.log("handle change " , country)
        console.log("fetched data= ", fetchedData)
        //fetch the data
        //set the state
           this.setState({data:fetchedData,country:country})
    }

   async componentDidMount(){
       const fetchedData=await fetchData();
       this.setState({data : fetchedData})
       const dailyData = await fetchDailyData()
       this.setState({data2:dailyData})
    //    console.log("test chart data in app.js= ",dailyData)
    //    console.log("fetched data= ",fetchedData)
    //    console.log("sorted data= ",this.state)

   }

    render() {
        // console.log("hello")
        const {data,data2,country} = this.state;
       

        
        return (
            
            <div className={styles.container}>
               <Cards data={data} />
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Chart2 data={data} data2={data2}  country={country}/>
            </div>
        )
    }
}

export default App;