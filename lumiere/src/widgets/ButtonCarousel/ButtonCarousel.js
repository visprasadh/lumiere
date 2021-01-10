import styles from "./ButtonCarousel.module.sass";
import { Sun, Moon } from "react-feather";

const ButtonCarousel = (props) => {
  return (
    <div className={styles.ButtonCarousel}>
      <button className={styles.ThemeButton} onClick={props.toggleTheme}>
        {props.isLight ? <Moon color="black" /> : <Sun color="white" />}
      </button>
      <button
        className={`${styles.FontButton} ${
          props.isSerif ? styles.Sans : styles.Serif
        } ${props.isLight ? styles.Light : styles.Dark}`} 
        onClick={props.toggleFont}
      >
        Aa
      </button>
    </div>
  );
};

export default ButtonCarousel;
