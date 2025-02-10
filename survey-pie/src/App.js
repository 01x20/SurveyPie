import { Route, Routes } from 'react-router-dom';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/survey/:surveyId" element={<SurveyPage />}>
          <Route path=":step" element={<SurveyPage />} />
        </Route>
        <Route path="/done" element={<CompletionPage />} />
      </Routes>
    </div>
  );
}

/*
 "/survey" 추가로 필요한 것 : 설문ID

 http://localhost:3000/survey?id=abc123
 http://localhost:3000/survey/abc123

 */

export default App;
