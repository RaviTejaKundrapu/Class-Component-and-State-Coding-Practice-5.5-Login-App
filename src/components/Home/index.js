import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {text: 'Please Login', isLoggedIn: true}

  Handler = () => {
    this.setState(prevState => ({
      text: prevState.text === 'Please Login' ? 'Welcome User' : 'Please Login',
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {text, isLoggedIn} = this.state

    return (
      <div className="app-container">
        <div className="bg-container">
          {isLoggedIn ? (
            <div>
              <Message text={text} />
              <Login onClick={this.Handler} />
            </div>
          ) : (
            <div>
              <Message text={text} />
              <Logout onClick={this.Handler} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
