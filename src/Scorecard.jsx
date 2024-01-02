const Scorecard = ({ score }) => {
	return (
		<div className='grid place-content-center h-screen gap-8'>
			<h1 className='text-2xl font-medium text-center'>Quiz Ended</h1>
			<h2 className='flex items-center justify-center gap-4 text-3xl font-bold'>
				Your Score: <span className='text-primary inline'>{score}</span>
			</h2>
		</div>
	)
}

export default Scorecard
