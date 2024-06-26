import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React from 'react';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

export default function Barchart(props) {

const [pricedata,setPricedata]=React.useState([]);
const [namedata,setNamedata]=React.useState([]);

const data= {
  labels:  namedata, // ['jio','Airtel','BSNL','Reliance','ACT Broadband','Ticfiber','Hathway'],
  datasets:[
    {
    label: 'Price',
    data:  pricedata,        /*[299,400,500,700,300,200,100],*/
    backgroundColor: '#95bb72'
    }
  ],
}

let priceArray=[];

console.log(props.services);
console.log(pricedata);

React.useEffect(()=>{
  const priceArray = props.services.map((serv) => serv.price);
  const nameArray = props.services.map((serv) => serv.name);
  setPricedata((prevChartData) => [...prevChartData, ...priceArray]
  );
  setNamedata((prevChartData) => [...prevChartData, ...nameArray]);
  },[])

  return (
  <>
  <div style={{width:'600px', height:'365px',backgroundColor:'white',borderRadius:'1rem'}}>
  <center><strong>Barchart</strong></center>
  <Bar options={options} data={data}/>
  </div>
  </>
);
}


