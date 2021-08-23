import {useSelector, useDispatch} from 'react-redux';
import {login} from '../actions';

function Login() {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.isLogged);
    return (
        <div>
            <button type="button" onClick={() => dispatch(login())}>{isLogged ? 'Logout' : 'Login'}</button>
            {isLogged && (<h3>Logged in</h3>)}
        </div>
    )
}

export default Login
