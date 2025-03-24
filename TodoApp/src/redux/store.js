import {legacy_createStore as createStore } from "redux"
import { todoReducer } from "./reducer/todoreducer"
export let store=createStore(todoReducer)