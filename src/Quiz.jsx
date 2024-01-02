import { useEffect, useState } from 'react'

const Quiz = ({ quiz, setScore, setFinished }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [timer, setTimer] = useState(5)
	const [answers, setAnswers] = useState([])

	const handleAnswer = (answer, correctAnswer) => {
		console.log(answer, correctAnswer)
		if (answer === correctAnswer && timer > 0) {
			setScore((prev) => prev + 1)
		}

		if (currentQuestion + 1 === quiz.length) {
			setFinished(true)
			return
		}

		setCurrentQuestion(currentQuestion + 1)
		setTimer(5)
	}

	const handleSkip = () => {
		if (currentQuestion + 1 === quiz.length) {
			setFinished(true)
			return
		}

		setCurrentQuestion(currentQuestion + 1)
		setTimer(5)
	}

	useEffect(() => {
		const countdown = setInterval(() => {
			setTimer((prev) => prev - 1)
		}, 1000)

		if (timer === 0) {
			clearInterval(countdown)
		}

		return () => {
			clearInterval(countdown)
		}
	}, [currentQuestion, timer])

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * 4)
		const newAnswers = [...quiz[currentQuestion].incorrect_answers]
		newAnswers.splice(randomIndex, 0, quiz[currentQuestion].correct_answer)
		setAnswers(newAnswers)
	}, [currentQuestion, quiz])

	return (
		<div className='grid place-content-center h-screen'>
			<div className='w-96 flex flex-col gap-2'>
				<div className='flex justify-between'>
					<h3 className='text-2xl font-bold'>
						Question {currentQuestion + 1}
					</h3>
					<span className='text-primary text-2xl font-semibold '>
						Timer: {timer}
					</span>
				</div>
				<h4
					className='font-medium mb-2 h-24'
					dangerouslySetInnerHTML={{
						__html: quiz[currentQuestion].question,
					}}
				></h4>
				{answers.map((answer) => (
					<button
						className='btn-sm btn btn-accent'
						onClick={() => {
							handleAnswer(answer, quiz[currentQuestion].correct_answer)
						}}
						disabled={timer === 0}
					>
						{answer}
					</button>
				))}
				<button
					className='btn btn-secondary btn-sm mt-2'
					onClick={handleSkip}
				>
					Skip
				</button>
			</div>
		</div>
	)
}

export default Quiz
