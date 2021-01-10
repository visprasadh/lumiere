import styles from "./ButtonCarousel.module.sass";
import { Sun } from "react-feather";

const ButtonCarousel = (props) => {
  return (
    <div className={styles.ButtonCarousel}>
      <button className={styles.ThemeButton} onClick={props.toggleTheme}>
        <Sun color="black" />
      </button>
      <button className={`${styles.FontButton} ${props.isSerif ? styles.Sans : styles.Serif}`} onClick={props.toggleFont}>Aa</button>
    </div>
  );
};

export default ButtonCarousel;
