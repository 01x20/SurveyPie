import { useAtom } from 'jotai';

import answersState from '../stores/answers/atom';
import useStep from './useStep';

function useCurrentAnswer() {
  const step = useStep();
  const [answers, setAnswers] = useAtom(answersState);

  const answer = answers[step];
  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
  };

  return [answer, setAnswer];
}

export default useCurrentAnswer;
