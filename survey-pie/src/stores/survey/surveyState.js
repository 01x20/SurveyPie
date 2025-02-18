import { atom } from 'jotai';

import getSurvey from '../../services/getSurvey';

const surveyState = atom(async (get) => {
  const res = await getSurvey(window.location.pathname.split('/')[2]);

  return res.data;
});

export default surveyState;
