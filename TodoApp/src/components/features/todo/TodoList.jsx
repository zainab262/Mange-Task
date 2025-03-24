import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { todoReducer } from '@/redux/reducer/todoreducer'
import { Box,Text ,Button,Flex} from '@chakra-ui/react'
import { delete_todo, edit_todo  } from '../../../redux/actions/action'
import { useState } from 'react'


export default function TodoList() {
  let dispatch=useDispatch()
  // const [task, setTask] = useState("");
  // const [editIndex, setEditIndex] = useState(null);
  // const [editText, setEditText] = useState("");
  
  let todo=useSelector((state)=>state.todo)
  console.log(todo)
  const handleDelete = (index) => {
    dispatch(delete_todo(index));
}
// ;const handleEdit = (index, currentText) => {
//   setEditIndex(index);
//   setEditText(currentText);
// };

// const saveEdit = () => {
//   dispatch(edit_todo(editIndex, editText));
//   setEditIndex(null);
//   setEditText("");
// };

  
  return (
    <Box p={'30px'}>
    {todo.length === 0 ? (
      <Text fontSize={30} textAlign={'center'}>No item is there in todo</Text>
    ) : (
      <ul>
        {todo.map((ele, index) => (
          <li key={index}>
            <Flex justifyContent={'space-between'} p={'10px'} fontSize={'20px'}>
            {ele}
            <Flex gap={5}>

            {/* <Button bg={"lightpink"} color={'black'} onClick={() => handleEdit(index, ele)} >Edit </Button>                       */}
           <Button bg={"lightpink"} onClick={() => handleDelete(index)}>🗑️</Button>
           </Flex>

           </Flex>
          </li> 
        ))}
      </ul>
    )}
  </Box>
  )

}
