import { useState } from 'react'

const Quiz = ({ quiz, setScore, setFinished }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0)

	const handleAnswer = (answer, correctAnswer) => {
		console.log(answer, correctAnswer)
		if (answer === correctAnswer) {
			setScore((prev) => prev + 1)
		}

		if (currentQuestion + 1 === quiz.length) {
			setFinished(true)
			return
		}

		setCurrentQuestion(currentQuestion + 1)
	}

	const getAnswers = () => {
		const randomIndex = Math.floor(Math.random() * 4)
		const answers = [...quiz[currentQuestion].incorrect_answers]
		answers.splice(randomIndex, 0, quiz[currentQuestion].correct_answer)

		return answers
	}

	return (
		<div className='grid place-content-center h-screen'>
			<div className='w-96 flex flex-col gap-2'>
				<h3 className='text-2xl font-bold'>
					Question {currentQuestion + 1}
				</h3>
				<h4 className='font-medium mb-2 h-24'>
					{quiz[currentQuestion].question.replace(/&quot;/g, '"')}
				</h4>
				{getAnswers().map((answer) => (
					<button
						className='btn-sm btn btn-accent'
						onClick={() => {
							handleAnswer(answer, quiz[currentQuestion].correct_answer)
						}}
					>
						{answer}
					</button>
				))}
				<button
					className='btn btn-secondary btn-sm mt-2'
					onClick={() => setCurrentQuestion(currentQuestion + 1)}
				>
					Skip
				</button>
			</div>
		</div>
	)
}

export default Quiz
