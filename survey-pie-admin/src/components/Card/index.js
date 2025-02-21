import { DeleteOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

function Card({
  title,
  desc,
  children,
  onUpButtonClick,
  onDownButtonClick,
  onDeleteButtonClick,
}) {
  return (
    <CardWrapper>
      <Head>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <Body>{children}</Body>
      <ButtonGroupWrapper>
        <ButtonGroup>
          <Button onClick={onUpButtonClick} type="text" icon={<UpOutlined />} />
          <Button
            onClick={onDeleteButtonClick}
            type="text"
            icon={<DeleteOutlined />}
          />
          <Button
            onClick={onDownButtonClick}
            type="text"
            icon={<DownOutlined />}
          />
        </ButtonGroup>
      </ButtonGroupWrapper>
    </CardWrapper>
  );
}

const ButtonGroupWrapper = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  display: none;
`;
const ButtonGroup = styled.div`
  background: #fff;
  margin-left: 10px;
  border: 1px solid #dddd;
  border-radius: 5px;
`;

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  width: 400px;
  margin: 30px auto;
  background: #fff;
  position: relative;

  &:hover ${ButtonGroupWrapper} {
    display: block;
  }
`;

const Head = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 15px;
`;
const Title = styled.div`
  font-weight: 600;
`;
const Desc = styled.div`
  color: #666;
  margin-left: 5px;
`;
const Body = styled.div`
  padding: 15px;
`;
export default Card;
