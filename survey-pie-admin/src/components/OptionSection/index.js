import { Button, Form, Input, InputNumber, Switch } from 'antd';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setQuestion } from '../../stores/survey/surveySlice';

const groups = [
  {
    title: '공통 옵션',
    fields: [
      {
        label: '질문',
        name: 'title',
        rules: [{ required: true }],
        type: 'text',
      },
      {
        label: '설명',
        name: 'desc',
        rules: [{ required: true }],
        type: 'text',
      },
      {
        label: '필수여부',
        name: 'required',
        rules: [],
        type: 'switch',
        valuePropName: 'checked',
      },
    ],
  },
];

const detailFieldsMap = {
  text: [
    {
      label: 'Placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
      type: 'text',
    },
    {
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
  textarea: [
    {
      label: 'Placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
      type: 'text',
    },
    {
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
  select: [
    {
      label: '답변',
      name: 'items',
      rules: [{ required: true }],
      type: 'text',
    },
    {
      label: '최대 선택 가능 개수',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
};

const getFieldInput = (type) => {
  if (type === 'text') return <Input />;
  else if (type === 'switch') return <Switch />;
  else if (type === 'number') return <InputNumber />;

  return null;
};

function OptionSection() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const question = useSelector((state) =>
    state.selectedQuestionId.data === null
      ? null
      : state.survey.data.questions[state.selectedQuestionId.data],
  );

  const selectedQuestionId = useSelector(
    (state) => state.selectedQuestionId.data,
  );

  useEffect(() => {
    if (!question) return;

    const type = question.type;
    let detailFieldsValue = {};

    if (type === 'text' || type === 'textarea') {
      detailFieldsValue.max = question.options.max;
      detailFieldsValue.placeholder = question.options.placeholder;
    } else if (type === 'select') {
      detailFieldsValue.max = question.options.max;
      detailFieldsValue.items = question.options.items;
    }

    form.setFieldsValue({
      title: question.title,
      desc: question.desc,
      required: question.required,
      ...detailFieldsValue,
    });
  }, [form, question]);

  const mergedGroups = question
    ? [
        ...groups,
        {
          title: '세부 옵션',
          fields: detailFieldsMap[question.type] || [],
        },
      ]
    : [];
  return (
    <OptionSectionWrapper>
      <Title>문항 옵션</Title>
      <FormWrapper>
        {question ? (
          <Form
            form={form}
            layout="vertical"
            name="option-form"
            onFinish={(values) => {
              const { title, desc, required, ...options } = values;

              let itemArr = options.items;
              if (question.type === 'select') {
                itemArr = options.items.split(',').map((item) => item.trim());
                options.items = itemArr;
              }

              const newValues = {
                title,
                desc,
                required,
                options,
                type: question.type,
              };

              dispatch(
                setQuestion({ index: selectedQuestionId, ...newValues }),
              );
            }}
          >
            {mergedGroups.map((group, index) => (
              <Fragment key={index}>
                <SubTitle>{group.title}</SubTitle>
                {group.fields.map((fields, index) => (
                  <Form.Item key={index} {...fields}>
                    {getFieldInput(fields.type)}
                  </Form.Item>
                ))}
              </Fragment>
            ))}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                적용
              </Button>
            </Form.Item>
          </Form>
        ) : (
          '질문을 선택해 주세요'
        )}
      </FormWrapper>
    </OptionSectionWrapper>
  );
}

const OptionSectionWrapper = styled.div`
  height: 100%;
  background: #fff;
  border-left: 1px solid #ddd;
`;

const Title = styled.div`
  font-weight: 500;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  text-align: center;
`;

const FormWrapper = styled.div`
  padding: 20px;
`;

const SubTitle = styled.div`
  font-size: 1.03rem;
  font-weight: 600;
  margin: 10px 0;
`;
export default OptionSection;
