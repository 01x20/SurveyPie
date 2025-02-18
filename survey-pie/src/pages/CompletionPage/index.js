import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import congrats from '../../assets/congrats.png';
import reload from '../../assets/reload.png';
import Button from '../../components/Button';
import useSurveyId from '../../hooks/useSurveyId';

function CompletionPage() {
  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    <>
      <CompletionPageWrapper>
        <img src={congrats} alt="" width="209" height="204" />
        <MidText>설문이 완료되었습니다.</MidText>
        <ReloadButton
          type="TERTIARY"
          onClick={() => {
            navigate(`/survey/${surveyId}/0`);
          }}
        >
          <img src={reload} alt="" width="24" height="24" />
          새로운 응답 제출하기
        </ReloadButton>
      </CompletionPageWrapper>
    </>
  );
}

/* 
  새로운 응답 제출하기 할 때 surveyId 값이 없어서 이걸 해결하는 방법
  1. store에 저장하기
  2. path로 받아오기 (이 방법 사용)
*/

const CompletionPageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const MidText = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin: 16px 0 56px;
`;

const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export default CompletionPage;
