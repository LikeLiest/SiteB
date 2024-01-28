import React from "react";

import img1 from '../styles/images/call.svg';
import img2 from '../styles/images/group.svg';
import img3 from '../styles/images/error.svg';
import img4 from '../styles/images/draft.svg';
import img5 from '../styles/images/diamond.svg';
import img6 from '../styles/images/comment.svg';

class Service extends React.Component {
    render() {
        return (
            <div className='service-container'>
                <h1 id='service-title'>Наши услуги</h1>

                <div className='service-content'>
                    <div className='service-content-block'>
                        <img src={img1} alt="service" className="service-img"/>
                        <h2 id='service-content-title'>Первая услуга</h2>
                        <p id='service-content-text'>
                            Коротко расскажите в чем ее суть и добавить яркое фото,
                            чтобы привлечь больше внимания клиентов
                        </p>
                    </div>

                    <div className='service-content-block'>
                        <img src={img2} alt="service" className="service-img"/>
                        <h2 id='service-content-title'>Вторая услуга</h2>
                        <p id='service-content-text'>
                            Коротко расскажите в чем ее суть и добавить яркое фото,
                            чтобы привлечь больше внимания клиентов
                        </p>
                    </div>

                    <div className='service-content-block'>
                        <img src={img3} alt="service" className="service-img"/>
                        <h2 id='service-content-title'>Третья услуга</h2>
                        <p id='service-content-text'>
                            Коротко расскажите в чем ее суть и добавить яркое фото,
                            чтобы привлечь больше внимания клиентов
                        </p>
                    </div>

                    <div className='service-content-block'>
                        <img src={img4} alt="service" className="service-img"/>
                        <h2 id='service-content-title'>Четвертая услуга</h2>
                        <p id='service-content-text'>
                            Коротко расскажите в чем ее суть и добавить яркое фото,
                            чтобы привлечь больше внимания клиентов

                        </p>
                    </div>

                    <div className='service-content-block'>
                        <img src={img5} alt="service" className="service-img"/>
                        <h2 id='service-content-title'>Пятая услуга</h2>
                        <p id='service-content-text'>
                            Коротко расскажите в чем ее суть и добавить яркое фото,
                            чтобы привлечь больше внимания клиентов
                        </p>
                    </div>

                    <div className='service-content-block'>
                        <img src={img6} alt="service" className="service-img"/>
                        <h2 id='service-content-title'>Шестая услуга</h2>
                        <p id='service-content-text'>
                            Коротко расскажите в чем ее суть и добавить яркое фото,
                            чтобы привлечь больше внимания клиентов
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}


export default Service;