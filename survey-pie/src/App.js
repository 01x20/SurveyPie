import './index.css';

import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path="/done/:surveyId" element={<CompletionPage />} />
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #f5f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  background-color: #fff;
  width: 700px;
  min-height: 500px;
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

/*
 "/survey" 추가로 필요한 것 : 설문ID

 http://localhost:3000/survey?id=abc123
 http://localhost:3000/survey/abc123

 */

export default App;
