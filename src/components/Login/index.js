import './index.css'

const Login = props => {
  const {onClick} = props
  return (
    <button className="styled_btn" type="button" onClick={onClick}>
      Login
    </button>
  )
}

export default Login
