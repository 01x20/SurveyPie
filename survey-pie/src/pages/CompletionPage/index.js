import axios from 'axios';
import styled from 'styled-components';

function CompletionPage() {
  axios.get('http://localhost:3001/surveys').then((res) => {
    console.log(res.data);
  });

  return (
    <>
      <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>
    </>
  );
}

const CompletionPageWrapper = styled.div`
  padding: 4em;
`;

export default CompletionPage;
