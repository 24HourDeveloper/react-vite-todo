import { useState } from 'react'
import { Input, Flex, Button } from '@chakra-ui/react'
import useStore from '../store'

export default function TodoInput() {
  const [todo, setTodo] = useState("")
  const {addTodo, todos } = useStore(state => state)

  const _addTodo = () => {
    addTodo([...todos, { id: `${Math.random()}`, item: todo, isComplete: false }])
    setTodo("")
  }

  return (
    <Flex gap="2" mb="4">
      <Input placeholder='Enter todo' onChange={(e) => setTodo(e.target.value)} value={todo}/>
      <Button size="md" onClick={_addTodo} colorScheme='teal'>Submit</Button>
    </Flex>
  )
}