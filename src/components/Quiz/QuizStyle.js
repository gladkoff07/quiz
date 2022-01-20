import styled from 'styled-components'

const QuizWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  min-height: 234px;
  padding: 30px 20px;
  background-color: #252d4a;
  border: 1px solid #3d95be;
  border-radius: 15px;
  box-shadow: 10px 10px 40px 0 rgba(0, 0, 0, 0.5);
`
const QuizQuestion = styled.div`
  width: 50%;
`
const QuizCount = styled.div`
  font-size: 30px;
`
const QuizcountInner = styled.span`
  font-size: 22px;
`

const QuizQuestionText = styled.div`
  margin-top: 20px;
`

const QuizAnswer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Button = styled.button`
  margin: ${props => (props.margin === 'top' ? '20px 0 0' : '5px 0')};
  padding: ${props => (props.paddind === 'top' ? '7px 0' : '10px 20px')};
  background-color: #252d4a;
  border: 2px solid #234666;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #234666;
    border: 2px solid #252d4a;
  }
`
const QuizResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const QuizResultInfo = styled.div`
  font-size: 20px;

  span {
    font-size: 28px;
    color: #0eacf7;
  }
`

export {
  QuizWrap,
  QuizQuestion,
  QuizCount,
  QuizcountInner,
  QuizQuestionText,
  QuizAnswer,
  Button,
  QuizResult,
  QuizResultInfo,
}
