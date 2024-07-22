import './index.css'

const NavBar = props => {
  const {time, score} = props
  return (
    <ul className="nav-cont">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="websitelogo"
        />
      </li>
      <li className="score-time-cont">
        <p>
          Score: <span className="goldcolor">{score}</span>
        </p>
        <div className="timer-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timericon"
          />
          <p className="goldcolor">{time} sec</p>
        </div>
      </li>
    </ul>
  )
}

export default NavBar
