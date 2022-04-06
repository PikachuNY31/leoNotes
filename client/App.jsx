import React, { useState } from 'react';
import '../styles/_reset.css';
import '../styles/_base.css';
import '../styles/_transitions.css';
import '../styles/styles.css';
// import SignInModal from './components/Modals/SignInModal';
import ProductCard from './components/ProductCard';
import Banner from './components/banner.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import huyBanner from './assets/huyBanner.png';
// import roses from './assets/roses.jpeg';
import All from './pages/All';
import Shop from './pages/Shop';
import SignInModal from './components/Modals/SignInModal';
import SignUpModal from './components/Modals/SignUpModal';
import LetterModal from './components/Modals/LetterModal';
import {CSSTransition} from 'react-transition-group';
import CartBar from './components/Cart/CartBar';
import '../styles/cart.css';
// import huywelcomingu from './assets/huywelcomingu.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { RiChatHeartFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import NoteContainer from './containers/NoteContainer';


const App = () => {

  const [cartToggle, setCartToggle] = useState(false);
  const [signInModalToggle, setSignInModalToggle] = useState(false);
  const [signUpModalToggle, setSignUpModalToggle] = useState(false);
  const [letterModalToggle, setLetterModalToggle] = useState(false);
  const firstName = useSelector((state) => state.user.firstName);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <BrowserRouter>
      <CSSTransition in={cartToggle} timeout={0} classNames="expanded-transition" unmountOnExit appear>
        <CartBar setCartToggle={setCartToggle}/>
      </CSSTransition>
      {signInModalToggle && <SignInModal setSignInModalToggle={setSignInModalToggle} setSignUpModalToggle={setSignUpModalToggle}/>}
      {signUpModalToggle && <SignUpModal setSignInModalToggle={setSignInModalToggle} setSignUpModalToggle={setSignUpModalToggle}/>}
      {letterModalToggle && <LetterModal setLetterModalToggle={setLetterModalToggle}/>}
       

      <div className='grid-container'>
        
        <header className='header'>
          <a href="/" className="title">LEONOTES</a> 
          <BiUserCircle className="icon" size={40} onClick={() => setSignInModalToggle(true)} style={{alignSelf: 'flex-end' , bottom: 25, position:'absolute' , right:120}}/>
          <AiOutlineShoppingCart className="icon" size={40} onClick={() => setCartToggle(true)}
            style={{alignSelf: 'flex-end' , position:'absolute' , bottom: 25, right:50 }}/> 
          <p style={{textShadow: 'none', fontFamily: 'Roboto Condensed', alignItem: 'center', alignSelf: 'flex-end', position:'absolute',  right:200, bottom: 30, fontSize: '3rem', letterSpacing:'1px'}}>Welcome, {firstName ? firstName : 'Guest'}</p>
        </header>
  
      <NoteContainer setCartToggle={setCartToggle}/>

        {/* <nav className='sidebar'>
          <div id='navbar'>
            <Link to='/all'>
              <button type='button' className="navbtn" onClick={() => <Link to='/all'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;ALL&nbsp;
                <span className="bi bi-heart-fill"></span></button>
            </Link>
            <Link to='/clothing'>
              <button type='button' className="navbtn" onClick={() => <Link to='/clothing'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;CLOTHING&nbsp;
                <span className="bi bi-heart-fill"></span></button>
            </Link>
            <Link to='/miscellaneous'>
              <button type='button' className="navbtn" onClick={() => <Link to='/micellaneous'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;MICELLANEOUS&nbsp;
                <span className="bi bi-heart-fill"></span></button>
            </Link>
            <Link to='/chocolate'>
              <button type='button' className="navbtn" onClick={() => <Link to='/chocolate'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;SWEETS&nbsp;
                <span className="bi bi-heart-fill"></span></button>
            </Link>
            <Link to='/card'>
              <button type='button' className="navbtn" onClick={() => <Link to='/card'/>}>
                <span className="bi bi-heart-fill"></span>
                &nbsp;CARD&nbsp;
                <span className="bi bi-heart-fill"></span></button>
            </Link>
           
            <RiChatHeartFill type="button" className="navbtn" size={45} style={{marginTop: 0}}onClick={() => setLetterModalToggle(true)}/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
          </div>
        </nav> */}

          
      </div>

      <Routes>
        {/* <Route path="/" element={<Banner />} /> */}
        {/* <Route path="/all" element={<All />} />
        <Route path="/clothing" element={<Shop page='clothing' />} />
        <Route path="/miscellaneous" element={<Shop page='miscellaneous' />} />
        <Route path="/chocolate" element={<Shop page='sweets' />} />
        <Route path="/card" element={<Shop page='card' />} /> */}
      </Routes>

      <footer className='footer'>Copyright &#169; {year}. All rights reserved.</footer>
    </BrowserRouter>
  ); 
};

export default App;