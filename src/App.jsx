import { useEffect, useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Quiz from './Quiz'
import Landing from './Landing'

const App = () => {
	const [quiz, setQuiz] = useState([])
	const [ready, setReady] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getQuiz = async () => {
			try {
				const response = await fetch(
					'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple'
				)
				const data = await response.json()
				setQuiz(data.results)
				setLoading(false)
			} catch (error) {
				console.error(error)
			}
		}

		getQuiz()
	}, [])

	return (
		<TransitionGroup>
			<CSSTransition
				key={ready}
				timeout={300}
				classNames={
					'animate-jump-in animate-once animate-duration-300 animate-delay-0 animate-ease-in-out'
				}
			>
				{ready ? (
					<Quiz quiz={quiz} />
				) : (
					<Landing setReady={setReady} loading={loading} />
				)}
			</CSSTransition>
		</TransitionGroup>
	)
}

export default App
