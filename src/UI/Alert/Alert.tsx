import * as React from "react";

interface Props {
    show: boolean;
    type: string;
    closeAlert?: () => void;
    clickDismissable?: () => void;
}

const Alert: React.FC<Props> = ({show, closeAlert, type, clickDismissable}) => {
    return (
        <>
            <div className="modal show" style={{display: show ? "block" : "none"}} >
                <div className="modal-dialog">
                    <div className={`modal-content bg-${type} border-0`} onClick={clickDismissable}>
                        <div className="modal-header border-0">
                            <div className="m-0"><p className="m-0">This is a {type} type alert</p></div>
                            {closeAlert && (
                                <button type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={closeAlert}>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Alert;