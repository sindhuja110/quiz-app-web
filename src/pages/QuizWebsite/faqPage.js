import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

const questions = [
  {
    id: 0,
    title: 'What can you do with our quiz app?',
    answer:
      'Our quiz app allows kids to take interactive quizzes on various subjects such as vision, sounds, and math. They can improve their knowledge and have fun while learning.',
  },
  {
    id: 1,
    title: 'How often can you take mock tests in our app?',
    answer:
      'Mock tests are available daily in our app, allowing kids to practice and test their knowledge regularly.',
  },
  {
    id: 2,
    title: 'What subjects are covered in our quiz app?',
    answer:
      'Our quiz app covers subjects like vision (colors, shapes), sounds (animal sounds, musical instruments), and math (basic arithmetic, patterns).',
  },
  {
    id: 3,
    title: 'How do you earn coins in our app?',
    answer:
      'Kids earn coins by performing well in tests. Higher scores and faster completion times can earn more coins. Coins are also rewarded for participating in main tests.',
  },
  {
    id: 4,
    title: 'What is the purpose of the main test in our app?',
    answer:
      'The main test in our app is a more challenging assessment that allows kids to showcase their knowledge and compete for higher coin rewards and leaderboard positions.',
  },
  {
    id: 5,
    title: 'How does the leaderboard work in our app?',
    answer:
      'The leaderboard ranks users based on the total number of coins they have earned. It displays usernames or initials along with their position, motivating kids to earn more coins and improve their ranking.',
  },
  {
    id: 6,
    title: 'What age group is our quiz app designed for?',
    answer:
      'Our quiz app is designed for kids in elementary and middle school age groups, typically ranging from 6 to 12 years old.',
  },
  {
    id: 7,
    title: 'How do you access the FAQ section in our app?',
    answer:
      'The FAQ section can be accessed from the main menu of the app. It provides answers to common questions about using the app, earning coins, and understanding the leaderboard.',
  },
  {
    id: 8,
    title: 'What feedback options are available in our app?',
    answer:
      'Our app includes feedback options where users can provide suggestions or report issues. This helps us improve the app based on user input.',
  },
  {
    id: 9,
    title: 'How do you navigate between different sections in our app?',
    answer:
      'Navigation between sections in our app is intuitive. Users can use a menu or tabs to switch between mock tests, main tests, leaderboard, user account details, and the FAQ section.',
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState(Array(questions.length).fill(false));

  const toggleFaq = (index) => {
    setIsOpen((prevOpen) =>
      prevOpen.map((isOpenState, i) => (i === index ? !isOpenState : isOpenState))
    );
  };

  return (
    <div>
      <Container className=" mb-4 mt-4">
        <Row>
          <Col xs={12} md={12} className="mt-5">
            <h1
              className="d-flex justify-content-center align-items-center"
              style={{
                fontSize: '45px',
                color: '#6B78B7',
                letterSpacing: '1px',
                fontWeight: 'bold',
              }}
            >
              FAQ
            </h1>
          </Col>
        </Row>
        <div className="mb-5">
          {questions.map((question, index) => (
            <div
              key={question.id}
              style={{ marginBottom: '10px', border: '1px solid #425486' }}
            >
              <div
                className="d-flex align-items-center"
                style={{
                  padding: '10px',
                  fontSize: '20px',
                  color: '#6B78B7',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                }}
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen[index]}
              >
                <span className={`faq-question ${isOpen[index] ? 'open' : ''}`}>
                  {question.title}
                </span>
                {isOpen[index] ? <FaMinus /> : <FaPlus />}
              </div>
              {isOpen[index] && (
                <div
                  style={{
                    padding: '10px',
                    fontSize: '16px',
                    color: '#000',
                    letterSpacing: '1px',
                  }}
                >
                  <p>{question.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faq;
