import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'

function Navbar() {
  return (
    <Box p={5}  fontSize={20} backgroundColor={'pink.300'} >
      <Flex gap={'2rem'} justifyContent={'center'}>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/mytodo">MyTodo</NavLink>

      </Flex>
    </Box>
  )
}

export default Navbar
