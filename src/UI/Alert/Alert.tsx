import * as React from "react";

interface Props extends React.PropsWithChildren {
    show: boolean;
    type: string;
    closeAlert?: () => void;
}

const Alert: React.FC<Props> = ({show, closeAlert, children, type}) => {
    return (
        <>
            <div className="modal show" style={{display: show ? "block" : "none"}} onClick={closeAlert}>
                <div className="modal-dialog">
                    <div className={`modal-content bg-${type} border-0`}>
                        <div className="modal-header border-0">
                            <div className="m-0">{children}</div>
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