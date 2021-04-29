import React from 'react';

//Context
import  {AlertConsumer} from '../../context/AlertContext';

//Containers
import ModalContainer from "./ModalContainer";

//Compoments
import AlertContent from '../../component/modal/AlertContent';

const AlertContainer = (props) => {

    return(
        <AlertConsumer>
            {(context) =>
                <ModalContainer
                    visible={context.visible}
                    setVisible={context.setVisible}
                    height={context.height}
                    width={context.width}
                    zIndex={110}
                >
                    <AlertContent
                        content={context.content}
                        buttonInfo={context.buttonInfo}
                        close={context.close}
                    />
                </ModalContainer>
            }
        </AlertConsumer>
    )
}

export default AlertContainer