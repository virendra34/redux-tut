import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from '../actions';

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);
    return (
        <div>
            <button type='button' onClick={() => dispatch(increment())}>+</button>&nbsp;
            <button type='button' onClick={() => dispatch(decrement())}>-</button>
            <br /><br />
            Count: {count}
        </div>
    )
}

export default Counter
