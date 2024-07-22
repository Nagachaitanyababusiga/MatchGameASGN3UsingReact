import {Component} from 'react'
import {tabsList, imagesList} from '../../Dependencies'
import './index.css'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import Thumbnail from '../Thumbnail'
import GameDoneCard from '../GameDoneCard'

/*
tabsList=[{tabId: 'FRUIT', displayText: 'Fruits'}...]

imagesList=[{
  category: 'FRUIT'
  id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186'
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png'
  thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png'
}...]
*/

class HomeScreen extends Component {
  state = {
    imgLst: imagesList,
    ActiveTab: 'FRUIT',
    matchId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    time: 60,
    score: 0,
    isGameDone: false,
  }

  componentDidMount() {
    this.startcounter()
  }

  startcounter = () => {
    this.counterId = setInterval(this.changetime, 1000)
  }

  changetime = () => {
    this.setState(
      prevState => ({time: prevState.time - 1}),
      () => {
        const {time} = this.state
        if (time === 0) this.displayWinOrLooseCard()
      },
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.counterId)
  }

  clearId = () => {
    clearInterval(this.counterId)
  }

  changeTab = id => {
    this.setState({ActiveTab: id})
  }

  checkIfmatched = id => {
    const {matchId, imgLst, score} = this.state
    const randomnum = Math.floor(Math.random() * imgLst.length)
    if (matchId === id)
      this.setState({
        score: score + 1,
        matchId: imgLst[randomnum].id,
      })
    else this.displayWinOrLooseCard()
  }

  displayWinOrLooseCard = () => {
    this.clearId()
    this.setState({isGameDone: true})
  }

  onRestart = () => {
    this.setState(
      {
        imgLst: imagesList,
        ActiveTab: 'FRUIT',
        matchId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
        time: 60,
        score: 0,
        isGameDone: false,
      },
      () => {
        this.startcounter()
      },
    )
  }

  render() {
    const {ActiveTab, time, score, matchId, imgLst, isGameDone} = this.state
    const ModifiedImagesList = imgLst.filter(x => x.category === ActiveTab)
    const matchimgUrl = imgLst.filter(x => x.id === matchId)[0].imageUrl
    return (
      <div>
        <NavBar time={time} score={score} />
        <div className="midcont">
          {isGameDone ? (
            <GameDoneCard score={score} onRestart={this.onRestart} />
          ) : (
            <div className="midcont-2">
              <img src={matchimgUrl} alt="match" className="match" />
              <ul className="TabEleCont">
                {tabsList.map(x => (
                  <TabItem
                    Details={x}
                    key={x.tabId}
                    changeTab={this.changeTab}
                    isActive={x.tabId === ActiveTab}
                  />
                ))}
              </ul>
              <ul className="thumbnaillist">
                {ModifiedImagesList.map(x => (
                  <Thumbnail
                    key={x.id}
                    checkIfmatched={this.checkIfmatched}
                    Details={x}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default HomeScreen
