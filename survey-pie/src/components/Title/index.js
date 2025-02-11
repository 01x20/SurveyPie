import styled from 'styled-components';

function Title({ children }) {
  return (
    <TitleWrapper>
      <span>Q.</span>
      {children}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.h1`
  color: #121111;
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  margin: 0;

  span {
    margin-right: 12px;
  }
`;

export default Title;
