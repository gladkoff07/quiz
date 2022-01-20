import { useState } from 'react'

import {
  QuizWrap,
  QuizAnswer,
  QuizQuestion,
  QuizCount,
  QuizQuestionText,
  Button,
  QuizcountInner,
  QuizResult,
  QuizResultInfo,
} from './QuizStyle'

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnsver = answer => {
    let nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }

    if (answer) {
      setScore(prevScore => prevScore + 1)
    }
  }

  const resultRefresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <QuizWrap>
      {showScore ? (
        <QuizResult>
          <QuizResultInfo>
            Правильных вопросов <span>{score}</span> из {questions.length}
          </QuizResultInfo>
          <Button margin='top' onClick={resultRefresh}>
            Попробовать еще раз!
          </Button>
        </QuizResult>
      ) : (
        <>
          <QuizQuestion>
            <QuizCount>
              <QuizcountInner>Вопрос {currentQuestion + 1} / </QuizcountInner>
              {questions.length}
            </QuizCount>
            <QuizQuestionText>
              {questions[currentQuestion].question}
            </QuizQuestionText>
          </QuizQuestion>
          <QuizAnswer>
            {questions[currentQuestion].answers.map(item => (
              <Button
                paddind='top'
                onClick={() => handleAnsver(item.answerCorrect)}
                key={item.id}
              >
                {item.answerValue}
              </Button>
            ))}
          </QuizAnswer>
        </>
      )}
    </QuizWrap>
  )
}

export { Quiz }
