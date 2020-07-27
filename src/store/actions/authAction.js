import { LOGIN_SUCCESS, LOGIN_FAILD } from '../types'
import { message } from 'antd'


const AuthAction = (username, password) => (dispatch) => {
    if (username === 'admin' && password === 'admin') {
        var randomToken = require('random-token');
        var token = randomToken(16)
        localStorage.setItem('session', JSON.stringify(token))
        window.location.reload()
    }
    else {
        dispatch({ type: LOGIN_FAILD })
        message.error('enter Valid UserName Or PassWord')
    }
    var loginSucces = localStorage.getItem('session');
    loginSucces = JSON.parse(loginSucces);
    if (loginSucces !== null) {
        dispatch({ type: LOGIN_SUCCESS })
    }

}

export default AuthAction