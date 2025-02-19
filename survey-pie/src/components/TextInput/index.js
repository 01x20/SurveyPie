import styled from 'styled-components';

function TextInput({ answer = '', setAnswer, options }) {
  return (
    <Input
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={options.placeholder}
      {...(options?.max && { maxLength: options?.max })}
      //{...(options?.max ? { maxLength: options?.max } : null)} 아예 넘겨주지 않음
      //maxLength={options?.max} undefined로 떨어짐
    />
  );
}

const Input = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
`;

export default TextInput;
