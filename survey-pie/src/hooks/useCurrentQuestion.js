import axios from 'axios';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';
import useSurveyId from './useSurveyId';

function useCurrentQuestion() {
  const step = useStep();
  const surveyId = useSurveyId();
  const [surveyData, setSurvey] = useAtom(surveyState);
  const question = surveyData?.questions || [];

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
  //     console.log(res);
  //     setSurvey(res.data);
  //   });
  // }, [surveyId, setSurvey]);

  return question[step];
}

export default useCurrentQuestion;
