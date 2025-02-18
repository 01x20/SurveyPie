import { useAtom } from 'jotai';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const [surveyData] = useAtom(surveyState);
  const question = surveyData?.questions || [];

  return question[step];
}

export default useCurrentQuestion;
