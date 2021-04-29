import React from 'react';
import AlertButtons from '../../container/modal/AlertButtonContainer';

const AlertContent = (props) => {

    return (
        <>
            <div className='alert-content'>
                {props.content}
            </div>

            <div className='alert-button-container'>
                <AlertButtons
                    buttonInfo={props.buttonInfo}
                    close={props.close}
                />
            </div>

        </>
    )
}

export default AlertContent;