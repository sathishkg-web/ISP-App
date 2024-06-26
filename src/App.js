import React from 'react';
import './style.css';
import allservices from './data.js';
import accrd from './faqdata.js'
import Nav from './Nav.js';
import Servicelist from './ServiceLister.js';
import Footer from './Footer.js';
import Barchart from './Barchart.js';
import Piechart from './Piechart.js';
import Accordian from './Accordian.js';

export default function App() {
  const [Services, setServices] = React.useState(allservices.data);
  const [faq,setFaq]= React.useState(accrd.data);
  const [Count, setcount] = React.useState(Services.length);
  const [Asc, setAsc] = React.useState(false);
  console.log(faq);
  function sortByName() {
    const unsorted = [...Services];
    let sortedItems = unsorted.sort((a, b) =>
      Asc ? b.price - a.price : a.price - b.price
    );
    setServices(sortedItems);
    setAsc(!Asc);
  }

  return (
    <>
      <Nav count={Count} />
      <Servicelist sortList={sortByName} services={Services} />
      <div className='chartContainer' style={{display:'flex',backgroundColor:'rgb(211, 208, 208)',width:'100%',justifyContent:'space-around',right:'0', padding:'1rem'}}>
      <Barchart services={Services}/>
      <Piechart services={Services}/>
      </div>
      <Accordian faq={faq}/>
      <Footer />
    </>
  );
}
