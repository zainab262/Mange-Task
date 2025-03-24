import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { add_todo } from '../../../redux/actions/action'
import { HStack ,Box,Input,Button} from '@chakra-ui/react'

export default function TodoForm() {
  let[input,setInput]=useState("")
  let dispatch=useDispatch()
  let handleAdd=()=>{
    dispatch(add_todo(input))
    setInput("")
  }
  return (
    <Box>
      <HStack padding={'20px'}>
        <Input type='text' 
        placeholder='Enter todo here'
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
        ></Input>
        {/* <Button onClick={()=>dispatch(add_todo(input))}>Add</Button> */}
        <Button onClick={handleAdd}>Add</Button>
      </HStack>  
    </Box>
  )
}
