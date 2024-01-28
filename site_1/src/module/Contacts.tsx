import React from "react";

class Contacts extends React.Component {
    render() {
        return (
            <div className='contact-container'>
                <div className='contact-block'>

                    <h2 className='our-contacts'>НАШИ КОНТАКТЫ</h2>
                    <p className='contact-info'>
                        8 800 555 35 35
                    </p>
                    <p className='contact-info'>
                        hello@company.com
                    </p>

                </div>

                <div className='social-block'>

                    <p className='social'>
                        Мы в социальных сетях
                    </p>

                    <div className='social-img'>
                        <img src="#" alt="img" className='img'/>
                        <img src="#" alt="img" className='img'/>
                        <img src="#" alt="img" className='img'/>
                    </div>

                </div>

            </div>
        )
    }
}

export default Contacts;