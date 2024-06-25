import React, { useState } from 'react';
import { Container, Accordion, Card, Button } from 'react-bootstrap';

const FaqComponent = () => {
  const faqs = [
    { question: 'What is SplashLearn?', answer: 'SplashLearn is a fun educational platform for kids.' },
    { question: 'What ages is SplashLearn for?', answer: 'SplashLearn is designed for kids aged 3 to 10 years.' },
    { question: 'What grades are covered by SplashLearn?', answer: 'SplashLearn covers grades from Pre-K to 5th grade.' },
    // Add more FAQs as needed
  ];

  const [activeKey, setActiveKey] = useState(null);

  const toggleAnswer = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion activeKey={activeKey}>
        {faqs.map((faq, index) => (
          <Card key={index} className="mb-2">
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={index.toString()}
                onClick={() => toggleAnswer(index.toString())}
                className="faq-question"
              >
                <span className="faq-icon">{activeKey === index.toString() ? '-' : '+'}</span>
                {faq.question}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>{faq.answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
};

export default FaqComponent;
