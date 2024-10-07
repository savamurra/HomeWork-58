import * as React from "react";
import { motion } from "framer-motion";

interface Props {
  show: boolean;
  type: string;
  closeAlert?: () => void;
  clickDismissable?: () => void;
}

const Alert: React.FC<Props> = ({
  show,
  closeAlert,
  type,
  clickDismissable,
}) => {
  return (
    <>
      {show && (
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          className="modal show"
          style={{ display: show ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div
              className={`modal-content bg-${type} border-0`}
              onClick={clickDismissable}
            >
              <div className="modal-header border-0">
                <div className="m-0">
                  <p className="m-0">This is a {type} type alert</p>
                </div>
                {clickDismissable
                  ? null
                  : closeAlert && (
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={closeAlert}
                      ></button>
                    )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Alert;
