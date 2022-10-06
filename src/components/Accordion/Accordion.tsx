import { useToggle } from "../Toggle/Toggle.hooks";
import styles from "components/Accordion/Accordion.module.css";

interface AccordionProps {
  options: string[];
  title: string;
}

export const Accordion = ({ options, title }: AccordionProps) => {
  const { isOpen, toggle } = useToggle();

  return (
    <div className={styles.container}>
      <div className={styles.btnTopContainer}>
        <h3 className={styles.title}>{title}</h3>
        <button className={styles.btn} onClick={toggle}>
          {isOpen ? "CLOSE" : "OPEN"}
        </button>
      </div>
      <div className={styles.optionsContainer}>
        {isOpen &&
          options?.map((option, index) => (
            <div
              key={index}
              className={styles.options}
              onClick={() => console.log(`${options[index]}`)}
            >
              {option}
            </div>
          ))}
      </div>
    </div>
  );
};
