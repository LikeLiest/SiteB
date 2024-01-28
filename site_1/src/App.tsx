import React from 'react';

import Header from './module/Header';
import About from './module/About'
import Service from './module/Service'
import Advantages from "./module/Advantages";
import Review from './module/Review';
import Form from "./module/Form";
import Contacts from "./module/Contacts";
import Footer from "./module/Footer";

import './styles/reset.css';
import './styles/header.css';
import './styles/about.css'
import './styles/service.css'
import './styles/advant.css';
import './styles/review.css';
import './styles/form.css';
import './styles/contacs.css';
import './styles/footer.css';
import './styles/mediaScreen.css';

function App() {
  return (
    <div className="container">
        <Header />
        <About />
        <Service />
        <Advantages />
        {/*<Review />*/}
        <Form />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
