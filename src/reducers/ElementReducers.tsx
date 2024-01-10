import { createSlice } from "@reduxjs/toolkit";

export interface ElementPosition {
    x: number;
    y: number
}

export interface ElementAttributes {
    position: ElementPosition
}

type ElementValues = {
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
        const { element_sid, position } = action?.payload;
        const element = state.values[element_sid];

        if (element && element.position) {
            const { position: old, ...remaining } = element;
            state.values[element_sid] = {...remaining, position};
        }
    }
};

export const elementSlice = createSlice({
    name: "element",
    reducers,
    initialState,
    extraReducers: (builder) => {}
});

export const {
    updatePositionReducer
} = elementSlice.actions;

export default elementSlice.reducer;