import React from 'react';
import {FaCirclePlus} from 'react-icons/fa6';
import {MdDoubleArrow} from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";

export default function Accordian(props) {

const [toggle,setToggle]=React.useState(false);

function handleClick(){
 setToggle(toggle=>!toggle)
}
return (
  <> 
    <div className='accordianContainer'>
    <center><h2>FAQ Questions</h2></center>
        {props.faq.map((q)=>(
        <>
        <div id={q.Id} className='main-menu'>
         <p className='Quest'>{q.Id}.{q.Question}</p>
         {toggle?<FaMinusCircle onClick={handleClick}/>:<FaCirclePlus onClick={handleClick}/>}
        </div>
        <div className='collap-menu'>
        {toggle&&<p><MdDoubleArrow style={{marginLeft:'7px'}}/>{q.Answer}</p>}
        </div>
        </>
     ))}
    </div>
  </>
  )
}