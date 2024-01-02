const Landing = ({ setReady, loading }) => {
	return (
		<div className='grid place-content-center h-screen gap-6'>
			<h1 className='text-4xl font-bold'>Ready for Quiz?</h1>
			<button
				className='btn btn-primary flex items-center gap-4'
				onClick={() => setReady(true)}
				disabled={loading}
			>
				START
				<span
					className={`loading loading-dots loading-sm ${
						!loading && 'hidden'
					}`}
				></span>
			</button>
		</div>
	)
}
export default Landing
