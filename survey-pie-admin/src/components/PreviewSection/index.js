import Card from '../Card';

function PreviewSection({ questions }) {
  return (
    <>
      {questions.map((questions, index) => (
        <Card key={index} title={questions.title} desc={questions.desc}>
          body
        </Card>
      ))}
    </>
  );
}

export default PreviewSection;
