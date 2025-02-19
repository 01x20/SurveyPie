import styled from 'styled-components';

function Item({ children, checked, onChange }) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

function SelectInput({ answer = [], setAnswer, options }) {
  const handleChange = (isChecked, index) => {
    if (isChecked) {
      const max = options?.max ?? 1;

      if (answer.length >= max) {
        return;
      }

      //setAnswer(index 추가)
      setAnswer([...answer, index]);
    } else {
      //setAnswer(index 빼기)
      setAnswer(answer.filter((item) => item !== index));
    }
  };

  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => {
        return (
          <Item
            key={index}
            checked={answer.includes(index)}
            onChange={(e) => {
              handleChange(e.target.checked, index);
            }}
          >
            {item}
          </Item>
        );
      })}
    </SelectInputWrapper>
  );
}

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemWrapper = styled.div`
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] ~ span {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    border-radius: 100%;
    box-sizing: border-box;
    vertical-align: middle;
    margin-right: 10px;
  }

  input[type='checkbox']:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type='checkbox'] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }

  input[type='checkbox']:checked ~ div {
    font-weight: bold;
  }
`;

export default SelectInput;
