import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

function postSurvey(survey) {
  return axios
    .post(`/surveys`, { ...survey, createdAt: new Date().getTime() })
    .then((res) => {
      alert('저장되었습니다.');

      return res.data;
    });
}

export default postSurvey;
