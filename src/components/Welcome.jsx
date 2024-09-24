import styles from "./Welcome.module.css";
import quiz from "../img/quiz.svg";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

function Welcome() {
  const [quizState, dispatch] = useContext(QuizContext); // quiz state pego os valores dispatch altero os valores

  return (
    <div className={styles.welcome}>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={quiz} alt="Image quiz" />
    </div>
  );
}

export default Welcome;
