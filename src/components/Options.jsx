import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import styles from "./Options.module.css";

function Options({ option, selectOption, answer }) {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`${styles.options} ${
        quizState.answerSelected && option === answer ? styles.correct : ""
      } 
    {${quizState.answerSelected && option === answer ? styles.wrong : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
}

export default Options;
