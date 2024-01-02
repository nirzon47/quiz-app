import { useState } from 'react'

const Quiz = ({ quiz }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0)

	return (
		<div className='grid place-content-center h-screen'>
			<div className='w-96 flex flex-col gap-2 h-64'>
				<h3 className='text-2xl font-bold'>
					Question {currentQuestion + 1}
				</h3>
				<h4 className='font-medium mb-2'>
					{quiz[currentQuestion].question.replace(/&quot;/g, '"')}
				</h4>
				{quiz[currentQuestion].incorrect_answers.map((answer, index) => (
					<button className='btn-sm btn btn-accent'>{answer}</button>
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
