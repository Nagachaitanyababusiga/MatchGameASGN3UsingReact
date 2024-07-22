import './index.css'

/* category: 'FRUIT'
id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186'
imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png'
thumbnailUrl: 
*/

const Thumbnail = props => {
  const {Details, checkIfmatched} = props
  const {id, thumbnailUrl} = Details
  const changematch = () => {
    checkIfmatched(id)
  }
  return (
    <li className="lstitemcont">
      <button type="button" onClick={changematch} className="thumbnailbtn">
        <img className="thumbnailicon" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
