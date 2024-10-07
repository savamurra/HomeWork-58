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
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"
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