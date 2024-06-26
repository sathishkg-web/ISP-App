import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  import { Pie } from 'react-chartjs-2';
  import React from 'react';
  
  
  ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      Legend: {
         position: 'top'
      },
      Title: {
       display: true,
       text: 'Price chart'
      }
    }
  };
  
  export default function Piechart(props) {
  
  const [speeddata,setSpeeddata]=React.useState([]);
  const [namedata,setNamedata]=React.useState([]);

  const data= {
    labels:  namedata,// ['jio','Airtel','BSNL','Reliance','ACT Broadband','Ticfiber','Hathway'],
    datasets:[
      {
      label: 'Network Speed',
      data:  speeddata,        /*[299,400,500,700,300,200,100],*/
      backgroundColor: ['#478c20','grey','#649e94','#b3cf99','#8db9b2','#87ab69','#306e61']
      }
    ],
  }
  
  let priceArray=[];
  
  console.log(props.services);
  console.log(speeddata);
  
    React.useEffect(()=>{
    const speedArray = props.services.map((serv) => serv.maxspeed);
    const nameArray = props.services.map((serv) => serv.name);
    setSpeeddata((prevChartData) => [...prevChartData, ...speedArray]);
    setNamedata((prevChartData) => [...prevChartData, ...nameArray]);
    },[])
  
    return (
    <>
    <div style={{width:'500px', height:'351px',backgroundColor:'white',borderRadius:'1rem',paddingBottom:'1rem'}}>
    <center><strong>Piechart</strong></center>
    <Pie options={options} data={data}/>
    </div>
    </>
  );
  }
  
  
  