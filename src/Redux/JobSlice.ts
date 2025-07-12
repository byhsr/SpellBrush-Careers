import { createSlice } from "@reduxjs/toolkit";

type jobState = {
    clicked : boolean
}


const initialState : jobState = {
    clicked : false
}

const jobSlice = createSlice({
    name : 'jobList',
    initialState,
    reducers:{
        checkedJobList:(state)=>{
            state.clicked = !state.clicked
        }
    }
})


export const {checkedJobList} = jobSlice.actions

export default jobSlice.reducer