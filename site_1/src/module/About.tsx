import React from "react";
import img1 from '../styles/images/img1.png'
import img2 from '../styles/images/image.png'
import img3 from '../styles/images/HeaderImages/logo.png'

class About extends React.Component {
    render () {
        return (
            <div className='about-container'>

                <div className='left-part-about'>
                    <h1 id='about-our-company'>О нашей компании</h1>
                    <p id='text-about-our-company'>
                        Коротко представьтесь и расскажите о компании или сервисе в 3-4 строках.
                        С какими клиентами вы работаете, что вас вдохновляет.
                        Чем гордится ваша команда, какие у нее ценности и мотивация.
                    </p>
                </div>

                <div className='right-part-about'>
                    <img src={img1} alt="Image" className='images'/>
                    <img src={img2} alt="Image" className='images'/>
                </div>


            </div>
        )
    }
}


export default About;