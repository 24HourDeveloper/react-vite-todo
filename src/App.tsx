import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import useStore from './store'
import './App.css'

function App() {
  const todos = useStore(state => state.todos)
  return (
    <>
      <TodoInput />
      <TodoList todos={todos}/>
    </>
  )
}

export default App
