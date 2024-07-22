import './index.css'

const GameDoneCard = props => {
  const {score, onRestart} = props
  const restart = () => {
    onRestart()
  }

  return (
    <div className="wincardcont">
      <img
        className="trophy-icon"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="scorevalue">{score}</p>
      <button type="button" className="btnsubmit" onClick={restart}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default GameDoneCard
