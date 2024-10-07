import Modal from "./UI/Modal/Modal.tsx";
import {useState} from "react";
import Alert from "./UI/Alert/Alert.tsx";

const App = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showAlertWarning, setShowAlertWarning] = useState<boolean>(false);
    const [showAlertSuccess, setShowAlertSuccess] = useState<boolean>(false);
    const btnArray = [
        {type: 'primary', label: 'Continue', onClick: () => alert("continue worked")},
        {type: 'danger', label: 'Close', onClick: () => setShowModal(!showModal)}
    ]

    const closeModal = () => {
        setShowModal(!showModal);
    }

    const closeAlertWarning = () => {
        setShowAlertWarning(!showAlertWarning);
    }

    const closeAlertSuccess = () => {
        setShowAlertSuccess(!showAlertSuccess);
    }


    return (
        <>
            <Modal show={showModal} title="Here was your Order" closeModal={closeModal}>
                <p className="p-2">Children have any props</p>
                {btnArray.map((item) => (
                        <button key={crypto.randomUUID()} className={`btn btn-${item.type} m-2`}
                                onClick={item.onClick}>{item.label}</button>
                    )
                )}
            </Modal>
            <button className="btn btn-primary m-2" onClick={() => setShowModal(!showModal)}>Modal</button>
            <Alert show={showAlertWarning} closeAlert={closeAlertWarning} type="warning-subtle" />
            <Alert show={showAlertSuccess} clickDismissable={closeAlertSuccess} type="success-subtle"/>
            <button className="btn btn-warning" onClick={() => setShowAlertWarning(!showAlertWarning)}>Warning Alert</button>
            <button className="btn btn-success ms-2" onClick={() => setShowAlertSuccess(!showAlertSuccess)}>Success Alert</button>
        </>
    )

};

export default App
