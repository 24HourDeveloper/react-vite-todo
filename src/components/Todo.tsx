import { Card, Text, CardBody, Flex, Button, Checkbox } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import useStore from '../store'

type Item = {
  item: {
    id: string;
    item: string;
    isComplete: boolean;
  }
}

export default function TodoItem({ item }: Item) {
  const { deleteTodo, completeTodo } = useStore(state => state)
  return (
    <Card key={item.id} size="sm" align="flex-start" data-testid="todo-item">
      <CardBody w="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex gap="2">
            <Checkbox colorScheme='teal' onChange={() => completeTodo(item.id)}/>
            <Text decoration={`${item.isComplete ? "line-through" : ""}`}>
              {item.item}
            </Text>
          </Flex>
          <Button
            size='sm'
            variant='ghost'
            colorScheme='red'
            data-testid="todo-delete-btn"
            onClick={() => deleteTodo(item.id)}
          >
            <DeleteIcon />
          </Button>
        </Flex>
      </CardBody>
    </Card>
  )
}