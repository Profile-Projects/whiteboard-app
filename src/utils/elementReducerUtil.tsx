import { ElementAttributes, ElementValues } from "../reducers/ElementReducers";

export const addElementToValues = ({ values, element, sid }: { values: ElementValues, element: ElementAttributes, sid: string}) => {
    const updated_value = {...values};
    updated_value[sid] = element;
    return updated_value;
};