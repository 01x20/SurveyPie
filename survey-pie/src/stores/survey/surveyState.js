import axios from 'axios';
import { atom } from 'jotai';

const surveyState = atom(async (get) => {
  const res = await axios.get(
    `http://localhost:3001/surveys/${window.location.pathname.split('/')[2]}`,
  );

  console.log(res.data);

  return res.data;
});

export default surveyState;
