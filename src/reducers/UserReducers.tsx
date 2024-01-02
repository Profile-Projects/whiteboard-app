
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    sid: string
}

const initialState: UserState = {
    sid: "US00001"
};


export const userSlice = createSlice({
    name: "user",
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        
    }
});

export default userSlice.reducer;