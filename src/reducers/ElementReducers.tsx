import { createSlice } from "@reduxjs/toolkit";

export interface ElementPosition {
    x: number;
    y: number
}

export interface ElementAttributes {
    position: ElementPosition
}

export type ElementValues = {
    [key: string]: ElementAttributes
}
export interface ElementState {
    values: ElementValues,
    elements: string[]
}

const elementMap: ElementValues = {};
const initialState: ElementState = {
    values: elementMap,
    elements: []
};

const reducers = {
    updatePositionReducer(state: ElementState, action: any) {
        const { values } = action?.payload;
        console.log(`redi to update values ${JSON.stringify(values)}`)
        state.values = values;
    },
    addElementReducer(state: ElementState, action: any) {
        const { values, sid } = action?.payload;
        console.log(`adding new element to global state ${sid}`);
        state.values = values;
    }
};

export const elementSlice = createSlice({
    name: "element",
    reducers,
    initialState,
    extraReducers: (builder) => {}
});

export const {
    updatePositionReducer,
    addElementReducer
} = elementSlice.actions;

export default elementSlice.reducer;