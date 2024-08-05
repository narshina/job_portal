import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Userreg } from './Userreg';
import { Login } from './Login';
import { Addjob } from './Addjob';
import { Viewjob } from './Viewjob';
import { Apply } from './Apply';
import { Home } from './Home';
import { Viewapply } from './Viewapply';
import { Adminav } from './Adminav';
import { Adminhome } from './Adminhome';
import { Adminvjob } from './Adminvjob';
import { Editjob } from './Editjob';
import { Navbar } from './Navbar';
import { Addimage } from './Addimage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/viewjob' element={<Viewjob/>}/>
      <Route path='/apply/:id' element={<Apply/>}/>

      <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Userreg/>}/>


      </Route>
      
      <Route path='/admin' element={<Adminav/>}>
      <Route index element={<Adminhome/>}/>
      <Route path='addjob' element={<Addjob/>}/>
      <Route path='viewapply' element={<Viewapply/>}/>
      <Route path='advjob' element={<Adminvjob/>}/>
      <Route path='editjob/:id' element={<Editjob/>}/>
      <Route path='addimage' element={<Addimage/>}/>





      </Route>


    </Routes>
    
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
