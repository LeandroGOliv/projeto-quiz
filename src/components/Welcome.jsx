import styles from "./Welcome.module.css";
import quiz from "../img/quiz.svg";

function Welcome() {
  return (
    <div className={styles.welcome}>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={quiz} alt="Image quiz" />
    </div>
  );
}

export default Welcome;
