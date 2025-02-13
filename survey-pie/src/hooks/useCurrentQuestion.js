import { useAtomValue } from 'jotai';

import questionsState from '../stores/questions/atom';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const questions = useAtomValue(questionsState);

  return questions[step];
}

export default useCurrentQuestion;
