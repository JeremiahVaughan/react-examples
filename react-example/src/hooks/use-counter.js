import {useEffect, useState} from "react";

export function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log(count)
  }, [count])

  return {
    count,
    increment
  }
}
