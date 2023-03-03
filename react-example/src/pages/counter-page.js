import Button from "../components/button/button";
import {useReducer} from "react";

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      };
    default:
      throw new Error('unexpected action types: ' + action.type);
  }
}

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  })

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    })
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    })
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return <div>
    <h1>Count is {state.count}</h1>
    <Button onClick={increment}>Increment</Button>
    <Button onClick={decrement}>Decrement</Button>
    <form onSubmit={handleSubmit}>
      <label>Add a lot!</label>
      <input
        value={state.valueToAdd || ""}
        onChange={handleChange}
        type="number"/>
      <Button>Add it</Button>
    </form>
  </div>
}

export default CounterPage;
