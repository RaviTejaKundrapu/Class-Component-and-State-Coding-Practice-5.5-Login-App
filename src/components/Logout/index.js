import './index.css'

const Logout = props => {
  const {onClick} = props
  return (
    <button className="styled_btn" type="button" onClick={onClick}>
      Logout
    </button>
  )
}

export default Logout
