import { atom } from 'jotai';

import getSurvey from '../../services/getSurvey';

const questionLengthState = atom(async (get) => {
  const res = await getSurvey(window.location.pathname.split('/')[2]);

  return res.data?.questions?.length ?? 0;
});

export default questionLengthState;
