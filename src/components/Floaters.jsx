import styles from "./floaters.module.css";

export default function Floaters({ clicked, correct }) {
  function colorSetter() {
    return clicked
      ? correct
        ? styles.correct
        : styles.incorrect
      : styles.default;
  }
  return (
    <div className={`${styles.container} ${colorSetter()}`}>
      <div unselectable="on" className={`${styles.floater} ${styles.large}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.medium}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.large}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.large}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.medium}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.medium}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.medium}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.medium}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.medium}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.medium}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.medium}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.medium}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.large}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.small}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.medium}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.large}`}>
        ?
      </div>
      <div unselectable="on" className={`${styles.floater} ${styles.large}`}>
        ?
      </div>
    </div>
  );
}
