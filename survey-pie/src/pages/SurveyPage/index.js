import React from 'react';
import styled from 'styled-components';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  return (
    <suspense fallback={<div>loading...</div>}>
      <SurveyPageWrapper>
        <ProgressIndicator />
        <QuestionBox />
      </SurveyPageWrapper>
    </suspense>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
