import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/commonPage/Footer'
import Home from './components/MainPage/Home';
import About from './components/AboutUs/About';
import News from './components/News/News';
import Programs from './components/Programs/Programs';
import Contact from './components/Contact/Contact'
import Join from './components/JoinOurTeam/Join'
import Donation from './components/Donation/Donation'
import Login from  './components/Login/Login'
import SignUp from './components/Login/SignUp';
import Page404 from './components/Login/Page404';
import ForgotPassword from  './components/Login/ForgotPassword'
import TermsAndConditions from './components/Login/TermsAndConditions';
import ResetPassword from './components/Login/ResetPassword'
import VerifyEmail from './components/Login/VerifyEmail';
import AllPrograms from './components/Programs/AllPrograms';


function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="join-our-team" element={<Join />} />
          <Route path="donation" element={<Donation />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="404" element={<Page404 />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="all-programs" element={<AllPrograms />} />
          <Route path="news" element={<News />} />


          {/* Use Navigate to redirect to Home on unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>


       </BrowserRouter>





      <Footer />


    </div>
  );
}

export default App;