import React from "react";
import useElementRender from "../hooks/useElementRender";
import CircleCanvas from "./Circle";

const Element = ({ elementSid }) => {
    const props = useElementRender({ element_sid: elementSid });
    return (
        <CircleCanvas
            {...props}
        />
    );
}

export default Element;