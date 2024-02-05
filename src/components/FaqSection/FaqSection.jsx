import React from "react";
import styles from "./FaqSection.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FaqSection({ data }) {
  return (
    <div className={styles.faqSection}>
      <h1 className={styles.faq}>FAQs</h1>
      <div className={styles.accordian}>
        <Accordion className={styles.acc1}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.arrow} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <p className={styles.q}>{data[0]?.question}</p>
          </AccordionSummary>
          <AccordionDetails className={styles.accSumm}>
            <p className={styles.a}>{data[0]?.answer}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.acc2}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.arrow} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <p className={styles.q}>{data[1]?.question}</p>
          </AccordionSummary>
          <AccordionDetails className={styles.accSumm}>
            <p className={styles.a}>{data[1]?.answer}</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqSection;
