import React from "react";

class Form extends React.Component {
    render () {
        return (
            <div className='form-container'>
                <h1 className='form-title'>
                    Заголовок формы
                </h1>

                <p className='form-text'>
                    Укажите поля и данные, которые необходимо заполнить клиенту
                    для заказа услуги или связи с вами.
                </p>

                <div className='form-buttons-group'>
                    <button className='form-button'>Name</button>
                    <button className='form-button'>Email</button>
                    <button className='form-button'>Text</button>
                    <button className='form-button-send'>Отправить</button>
                </div>


            </div>
        )
    }
}


export default Form;