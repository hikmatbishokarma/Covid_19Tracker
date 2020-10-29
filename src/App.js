import React, { Component } from 'react';
import {Cards, Chart, Country} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
class App extends Component {

    state={ data: {}, country:''}

      async componentDidMount(){

            const datareceived= await fetchData();
            this.setState({data:datareceived})
            console.log(datareceived)
     }

     handelCountryChange= async(country)=>{
      //fetch api
       //set state
       const datareceived= await fetchData(country);
       this.setState({data:datareceived, country:country})
      
     }
    render() { 

        const {data, country}= this.state
        return ( <div className={styles.container}>
            <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="covir_19"/>
            <Cards data={data}/>
            <Country handelCountryChange={this.handelCountryChange}/>
            <Chart data={data} country={country}/>
            
        </div> );
    }
}
 
export default App;