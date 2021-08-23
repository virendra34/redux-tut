import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signin } from './actions';
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello</h1>
      <button type="button" onClick={() => dispatch(increment(5))}><b>+</b></button>&nbsp;
      <button type="button" onClick={() => dispatch(decrement(5))}><b>-</b></button>
      <br /><br />
      counter: {counter}
      <br /><br />
      <button type="button" onClick={() => { dispatch(signin()) }}>{isLogged ? 'Logout' : 'Login'}</button>
      {isLogged && (<h1>Logged in</h1>)}
    </div>
  );
}

export default App;
