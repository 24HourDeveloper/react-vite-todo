import { Flex } from '@chakra-ui/react'
import Todo from './Todo';

type Todos = {
  todos: {
    id: string;
    item: string;
    isComplete: boolean;
  }[]
}

export default function TodoList({ todos }: Todos) {
  return (
    <Flex gap="2" flexDirection="column">
      {
        todos.length > 0 ? todos.map(item => (
          <Todo item={item} key={item.id}/>
        )) : null
      }
    </Flex>
  )
}