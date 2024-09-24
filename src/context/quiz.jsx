import { createContext, useReducer } from "react";
import questions from "../data/questions";

// para não colocar a logica mais pesada nos componentes e ficar muito código ali podemos usar context, onde a gente destina um arquivo ou mais pra tabalhar com a lógica e a partir de algumas ações que a gente tem nesse context a gente vai alterando o estado da aplicacao

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  // estado padrõa quando a pessoa acessa o site
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
};

const quizReducer = (state, action) => {
  console.log(state, action);

  /* A função useReducer é uma hook do React que permite gerenciar o estado em componentes de forma semelhante ao useState, mas com mais controle, especialmente para estados complexos.
O primeiro argumento da função useReducer é o reducer (neste caso, quizReducer), que é responsável por manipular o estado com base em diferentes ações.
O segundo argumento é o estado inicial (initialState), que será o valor inicial do estado para o reducer. */
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state, // permite que você "espalhe" (ou copie) todas as propriedades de um objeto ou array em um novo objeto ou array.
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;
      if (!questions[nextQuestion]) {
        endGame = true;
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage, // se endGame é true entao chegou no fim e muda de estado, se não chegou no fim, mantem o estado
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

// aqui temos que decidir em quais componentes vamos usar esse context ou colocar na aplicacao toda (como acontece nesse caso)
// como vamos utilizar o context na aplicacao toda temos que usar o children para os componentes dentro de outro componente tambem serem renderizados
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
