import BackDrop from "../BackDrop/BackDrop.tsx";
import * as React from "react";

interface Props extends React.PropsWithChildren {
    show: boolean;
    title: string;
    closeModal: () => void;
}
const Modal:React.FC<Props> = ({show, title = "Start title", children, closeModal}) => {
    return (
        <div>
            <BackDrop show={show}/>
            <div className="modal show" style={{display: show ? 'block' : 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header align-items-center justify-content-between">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <button style={{background: "url(https://www.svgrepo.com/show/524430/close-circle.svg) center center / 20px auto no-repeat",
                                            border: "none",
                                            padding: "10px",
                            }}
                                    onClick={closeModal}>
                            </button>
                        </div>
                        <div className="p-2">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;