import React from 'react';
import { Line,Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

import styles from './Chart.module.css'

ChartJS.register(...registerables);

const Chart2 = ({data:{confirmed,recovered,deaths},data2,country}) => {
   
    let dataGlobal={data2}
  
    console.log("final data 2 = " , {confirmed,recovered,deaths})
    // console.log("length of final data 2 = " , dataGlobal.data2.length)

    
   const lineChart = (
     dataGlobal.data2.length ? (<Line
     data={{ 
        labels:dataGlobal.data2.map(({date}) => date),
        datasets:[{
            data: dataGlobal.data2.map(({confirmed}) => confirmed),
            label:'Infected',
            borderColor:'#3333ff',
            fill:true,
        },{
         data: dataGlobal.data2.map(({deaths}) => deaths),
         label:'Deaths',
         borderColor:'red',
         backgroundColor:'rgba(255,0,0,0.5)',
         fill:true,
     }], 
     }}
     />) : "Loading Charts"
   );
  

     const barChart = (
      confirmed ? (
        <Bar
          data={{
               labels: ['Infected', 'Recovered', 'Deaths'],
              datasets:[{
                label: [`Current state in ${country}`],
                backgroundColor:[
                  'rgba(0, 0, 255, 0.5)',
                  'rgba(0, 255, 0, 0.5)',
                  'rgba(255, 0, 0, 0.5)'
                ],
                data:[confirmed.value, recovered.value, deaths.value]
              }]
          }}
          options={{
            legend:{ display:false} ,
            title: {display:true , text: `Current state in ${country}`}
          }}
        />
      ) : null

     )


  //  if (data2.length) { return "loading charts"} 
   return (
  
     <div className={styles.container
   }
     >{(country && country!=="global") ? barChart : lineChart}</div>
   
  )
}

export default Chart2
