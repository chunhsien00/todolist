import React, { useRef, useEffect, useState } from 'react'
import Todolist from './components/todolist'

function App() {
  const [todo, setTodo] = useState([])


  const ref = useRef("")
  const rcount = useRef(0)



  useEffect(() => {
    rcount.current = rcount.current + 1
  })

  const handleclick = () => {

    setTodo(prevTodo => [...prevTodo, {a: ref.current.value, b: rcount.current}])
    // setNum(prevNum => [...prevNum,rcount.current])

    console.log(ref.current.value)
    console.log(rcount.current)

  }

  console.log(todo)

  const deleteItem = (id) => {
    console.log(id)
    const newtodo = todo.filter(x => x.b!==id)

    setTodo(newtodo)


  }


  return (
    <div >
      <input ref={ref} type="text"></input>
      <button onClick={handleclick} >clickme</button>

      <div>render:{rcount.current} times</div>
      <div>current add: {ref.current.value}</div>

      <Todolist todo1={todo} cancel={deleteItem}/>

      {/* {todo.map(x=> <div>{x}</div> )} */}

    </div>
  );
}

export default App;
