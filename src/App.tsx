import Modal from "./UI/Modal/Modal.tsx";
import {useState} from "react";
import Alert from "./UI/Alert/Alert.tsx";

const App = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const btnArray = [
        {type: 'primary', label: 'Continue', onClick: () => alert("continue worked")},
        {type: 'danger', label: 'Close', onClick: () => setShowModal(!showModal)}
    ]

    const closeModal = () => {
        setShowModal(!showModal);
    }

    const closeAlert = () => {
        setShowAlert(!showAlert);
    }

    return (
        <>
            <Modal show={showModal} title="Here was your Order" closeModal={closeModal}>
                <p className="p-2">Children have any props</p>
                {btnArray.map((item) => (
                        <button key={crypto.randomUUID()} className={`btn btn-${item.type} m-2`} onClick={item.onClick}>{item.label}</button>
                    )
                )}
            </Modal>
            <button className="btn btn-primary m-2" onClick={() => setShowModal(!showModal)}>Modal</button>
            <Alert show={showAlert} closeAlert={closeAlert} type="warning-subtle">
                <p className="m-0">This is a warning type alert</p>
            </Alert>
            <Alert show={showAlert} type="success-subtle"><p className="m-0">This is a success type alert</p></Alert>
            <button className="btn btn-warning" onClick={() => setShowAlert(!showAlert)}>Alert</button>
        </>
    )

};

export default App
