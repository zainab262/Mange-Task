import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { Box,Text ,Button,Flex} from '@chakra-ui/react'




function Mytodo() {
    let todo=useSelector((state)=>state.todo)
    console.log(todo)

  return (
    <Box p={'30px'}>
        {todo.length === 0 ? (
          <Text fontSize={30} textAlign={'center'}>No item is there in todo</Text>
        ) : (
          <ul>
            {todo.map((ele, index) => (
              <li key={index}>
                <Flex justifyContent={'center'} p={'10px'} fontSize={'20px'}  >
                {ele}
               </Flex>
              </li> 
            ))}
          </ul>
        )}
      </Box>
  )
}

export default Mytodo

