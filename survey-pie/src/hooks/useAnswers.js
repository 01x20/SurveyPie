import { useAtom } from 'jotai';

import answersState from '../stores/answers/atom';

function useAnswers() {
  return useAtom(answersState);
}

export default useAnswers;
