import { useAtomValue } from 'jotai';
import styled from 'styled-components';

import testAtom from '../../stores/test/atom';

function CompletionPage() {
  const test = useAtomValue(testAtom);
  console.log(test);
  return (
    <>
      <CompletionPageWrapper>{test.key}</CompletionPageWrapper>
    </>
  );
}

const CompletionPageWrapper = styled.div`
  padding: 4em;
`;

export default CompletionPage;
