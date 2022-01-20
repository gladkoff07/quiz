import { Quiz } from '../Quiz/Quiz'
import { WrappApp } from './AppStyle'

function App() {
  const data = [
    {
      question: 'Столица США?',
      answers: [
        { id: 1, answerValue: 'Бостон', answerCorrect: false },
        { id: 2, answerValue: 'Вашингтон', answerCorrect: true },
        { id: 3, answerValue: 'Лос-Анджелес', answerCorrect: false },
        { id: 4, answerValue: 'Нью-Йорк', answerCorrect: false },
      ],
    },
    {
      question: 'Столица Англии?',
      answers: [
        { id: 1, answerValue: 'Лондон', answerCorrect: true },
        { id: 2, answerValue: 'Манчестер', answerCorrect: false },
        { id: 3, answerValue: 'Оксфорд', answerCorrect: false },
        { id: 4, answerValue: 'Ливерпуль', answerCorrect: false },
      ],
    },
    {
      question: 'Столица Италии?',
      answers: [
        { id: 1, answerValue: 'Милан', answerCorrect: false },
        { id: 2, answerValue: 'Венеция', answerCorrect: false },
        { id: 3, answerValue: 'Рим', answerCorrect: true },
        { id: 4, answerValue: 'Палермо', answerCorrect: false },
      ],
    },
    {
      question: 'Столица Германии?',
      answers: [
        { id: 1, answerValue: 'Кельн', answerCorrect: false },
        { id: 2, answerValue: 'Гамбург', answerCorrect: false },
        { id: 3, answerValue: 'Штутгарт', answerCorrect: false },
        { id: 4, answerValue: 'Берлин', answerCorrect: true },
      ],
    },
  ]

  return (
    <WrappApp>
      <Quiz questions={data} />
    </WrappApp>
  )
}

export default App
