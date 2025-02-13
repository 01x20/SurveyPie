import { atom } from 'jotai';

import questionsState from './atom';

const questionsLengthState = atom((get) => {
  const questions = get(questionsState);

  return questions.length;
});

export default questionsLengthState;
