import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

function deleteSurvey(surveyId) {
  return axios
    .delete(`/surveys/${surveyId}`)
    .then(() => alert('삭제되었습니다'));
}

export default deleteSurvey;
