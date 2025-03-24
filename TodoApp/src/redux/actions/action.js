export let ADD_TODO="ADD_TODO"
export let add_todo=(newtask)=>({
    // console.log("task 1  is", newtask )
    // return {
        type:ADD_TODO,
        payload:newtask
    })
// }

export const DELETE_TODO = "DELETE_TODO";

export const delete_todo = (index) => ({
    type: DELETE_TODO,
    payload: index
});
export const EDIT_TODO = "EDIT_TODO";

export const edit_todo = (index, newTask) => ({
    type: EDIT_TODO,
    payload: { index, newTask }
});