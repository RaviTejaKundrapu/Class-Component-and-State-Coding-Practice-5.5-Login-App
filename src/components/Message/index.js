// Write your code here
import './index.css'

const Message = props => {
  const {text} = props
  return <h1 className="msg_heading">{text}</h1>
}

export default Message
