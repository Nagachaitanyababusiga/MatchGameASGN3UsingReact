import './index.css'
// tabId: 'FRUIT', displayText: 'Fruits'}...]

const TabItem = props => {
  const {Details, isActive, changeTab} = props
  const {tabId, displayText} = Details
  const classvalue = isActive ? 'activeClass' : 'normalClass'
  const changetabstatus = () => {
    changeTab(tabId)
  }

  return (
    <li className="tabcont">
      <button type="button" onClick={changetabstatus} className={classvalue}>
        {displayText}
      </button>
      {isActive && <hr className="underline" />}
    </li>
  )
}

export default TabItem
