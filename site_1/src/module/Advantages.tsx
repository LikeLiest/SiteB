import React from "react";

import checkMark from '../styles/images/galochka.svg'

class Advantages extends React.Component {
    render () {

        return (
            <div className='advant-container'>
                <div className='advant-container-title'>
                    <h1 id='advant-title'>Преимущества компании</h1>
                    <h2 id='advant-subtitle'>
                        Помогите клиенту принять решение, рассказав о своих
                        сильных сторонах и причинах работать именно с вами
                    </h2>
                </div>


                <div className='our-advantages'>

                    <div className='advant-full-block'>

                        <div className='advant-block-img'>
                            <img src={checkMark} alt="img" className='checkmark'/>
                            <img src={checkMark} alt="img" className='checkmark'/>
                            <img src={checkMark} alt="img" className='checkmark'/>
                        </div>


                        <div className='advant-block-text'>

                            <h2 id='advant-subtitle-block'>Преимущество</h2>
                            <p id='advant-text'>
                                Расскажите, что отличает ваши услуги от услуг в других компаниях
                            </p>

                            <h2 id='advant-subtitle-block'>Преимущество</h2>
                            <p id='advant-text'>
                                Расскажите, что отличает ваши услуги от услуг в других компаниях
                            </p>

                            <h2 id='advant-subtitle-block'>Преимущество</h2>
                            <p id='advant-text'>
                                Расскажите, что отличает ваши услуги от услуг в других компаниях
                            </p>

                        </div>

                    </div>


                </div>

            </div>
        )
    }
}


export default Advantages;