import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Button, Flex, Heading } from '@chakra-ui/react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import useStore from './store'
import './App.css'

function App() {
  const todos = useStore(state => state.todos)
  return (
    <>
      <Flex as="header" justifyContent="space-between" bg="teal.800" w="100%" px="4" mb="4" py="2">
        <Heading color="white">Todo</Heading>
        <SignedOut>
          <SignInButton>
            <Button colorScheme="teal">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Flex>
      <SignedIn>
        <Flex flexDirection="column" justifyContent="center" mt="4" alignItems="center">
          <TodoInput />
          <TodoList todos={todos}/>
        </Flex>
      </SignedIn>
    </>
  )
}

export default App
