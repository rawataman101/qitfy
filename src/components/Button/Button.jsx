import React from "react";
import styles from "./Button.module.css";
import "./Button.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function Button({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className={styles.button} onClick={handleOpen}>
        {children}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <form action="/" className={styles.form}>
            <h3 className={styles.form__h3}>Feedback</h3>
            <input
              className={styles.input__field}
              type="text"
              placeholder="Full name"
              required
            />
            <input
              className={styles.input__field}
              type="email"
              placeholder="Email ID"
              required
            />
            <input
              className={styles.input__field}
              type="text"
              placeholder="Subject"
              required
            />
            <input
              className={styles.input__description}
              type="text"
              placeholder="Description"
              required
            />
            <button className={styles.button__feedback}>Submit Feedback</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Button;
