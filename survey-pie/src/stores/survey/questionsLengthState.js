import { atom } from 'jotai';

import surveyState from './surveyState';

const questionsLengthState = atom((get) => {
  const questions = get(surveyState);

  return questions.length;
});

export default questionsLengthState;
