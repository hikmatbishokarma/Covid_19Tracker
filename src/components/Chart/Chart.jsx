import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'
const Chart=({data:{confirmed, recovered, deaths}, country})=>{
 const [dailyData, setDailyData]= useState([]);

    useEffect(()=>{
        const fetchAPI= async ()=>{
          setDailyData(await fetchDailyData());
        }
       fetchAPI();
    },[setDailyData])

    const lineChart=(
        dailyData.length?
        (<Line data={{
            labels:dailyData.map(({data})=> data), 
            datasets:[{
                   data:dailyData.map(({confirmed})=> confirmed),
                   label:'infected',
                    borderColor:'#3333ff',
                   fill:true },

                 {
                  data:dailyData.map(({deaths})=> deaths),
                  label:'deaths',
                  borderColor:'red',
                  backgroundColor: 'rgba(255,0,0,0.5)',
                  fill:true 
            }]
        }}/>): null
    );
console.log(confirmed, recovered, deaths)
    const barchat=(
        confirmed ?(
        <Bar
        data={{
            labels:['infected', 'Recovered', 'Deaths'],
            datasets:[{
                labels:'people',
                backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
               data: [confirmed.value, recovered.value, deaths.value]
            }]
        }}
        options={{
            legend:{display:false},
            title:{display:true, text: `current state in ${country}`}
        }}
        />
        ):null
    )
    return(<div className={styles.container}>
        {country?barchat:lineChart}
    </div>)
}

export default Chart