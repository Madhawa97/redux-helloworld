import React from 'react'
import { useSelector, /*<-- getting the states*/ useDispatch } from 'react-redux'
import { decrement, increment } from './postSlice'

export function Posts() {
  const posts = useSelector((state) => state.post.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{posts.map(e=> <p>{e.title}</p>
          )}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}