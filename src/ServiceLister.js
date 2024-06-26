import React from 'react';
import './style.css';
import { IoHome } from "react-icons/io5";
import { FaTachometerAlt,FaPhoneAlt,FaRupeeSign,FaDownload,FaShare,FaSearch } from "react-icons/fa";
import { MdOutlineAttachEmail,MdDoubleArrow,MdOutlineNavigateNext} from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";

export default function Servicelist(props) {
  const [Service, setService] = React.useState({
    name: 'ISP Name',
    price: '0',
    maxspeed: 0,
    phone: 9100000000,
    email: 'example@gmail.com',
    minplan: '0',
    description: 'Description...',
  });

  const [search, setSearch] = React.useState('');

  function handleClick(id) {
    props.services.map((ser) => {
      return ser.name === id ? setService(ser) : {};
    });
  }

  function handleSearch(searchvalue) {
    setSearch(searchvalue);
    return;
  }

  return (
    <main>
      <div
        className="div1"
        style={{ width: '70%', border: '1px solid black', margin: '2rem' }}
      >
        <div className="innerdiv">
         
          <strong><span style={{marginRight:'5px'}}><IoHome /></span>Home</strong>
          <input
            className="input"
            placeholder="Search (by ISP name, price, rating)"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <ul
          style={{
            listStyleType: 'none',
            padding: '0px',
          }}
        >
          {props.services
            .filter((serv) => {
              const fil =
                search.toLowerCase() === ''
                  ? serv
                  : serv.name.toLowerCase().includes(search) ||
                    serv.price.toLowerCase().includes(search);
              console.log(fil);
              return fil;
            })
            .map((serv) => (
              <li
                className="listitem"
                key={serv.name}
                onClick={() => handleClick(serv.name)}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpQPY_ScazvgI-jIHxgIKDpOGkxwr7fexyA&s"
                  className="list-image"
                />
                {serv.name}
                <span style={{ marginLeft: 'auto' }}>
                <FaRupeeSign style={{marginRight:'5px'}}/>{serv.price}
                <MdDoubleArrow style={{marginLeft:'7px'}}/>
                </span>
              </li>
            ))}
        </ul>
        <div class="footer">
          <button onClick={props.sortList}>Sort By Price<TbArrowsSort style={{bottom:'0',paddingLeft:'3px'}}/></button>
        </div>
      </div>
      <div
        className="div2"
        style={{ width: '30%', border: '1px solid black', margin: '2rem' }}
      >
        <div className="backdiv"></div>
        <div className="Card">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'black',
              padding: '0.2rem',
            }}
          >
            <strong style={{ color: 'white', backgroundColor: 'black' }}>
              {Service ? Service.name : 'ISP Name'}
            </strong>
          </div>
          <ul
            style={{
              listStyleType: 'none',
              paddingLeft: '5px',
              marginTop: '0.4rem',
            }}
          >
            <li><FaTachometerAlt style={{marginRight:'5px'}}/>Max. Speed: {Service && Service.maxspeed}mbps</li>
            <li><FaPhoneAlt style={{marginRight:'5px'}}/>Phone: {Service && Service.phone}</li>
            <li><MdOutlineAttachEmail style={{marginRight:'5px'}}/>Email: {Service && Service.email}</li>
            <li><FaRupeeSign style={{marginRight:'5px'}}/>Min. Plan: {Service && Service.minplan} /-</li>
          </ul>
        </div>
        <br />
        <strong className="rating">Rating ******</strong>
        <p
          style={{
            width: '100%',
            height: '15%',
            backgroundColor: '#D8EFF8',
            borderRadius: '0.4rem',
            border: '1px solid grey',
            overflowY: 'scroll',
          }}
        >
          {Service.description}
        </p>
        <div className="buttongroup">
          <button className="button"><FaLink style={{paddingRight:'5px'}}/>Link</button>
          <button className="button"><FaShare style={{paddingRight:'5px'}}/>Share</button>
          <button className="button"><FaDownload style={{paddingRight:'5px'}}/>Download</button>
        </div>
      </div>
    </main>
  );
}
