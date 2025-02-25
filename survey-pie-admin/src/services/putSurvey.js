import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

function putSurvey(survey) {
  axios
    .put(`/surveys/${survey.id}`, survey)
    .then(() => alert('저장되었습니다.'));
}

export default putSurvey;
