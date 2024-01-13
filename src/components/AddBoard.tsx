import React, { FC } from "react";
import useCreateBoard from "../hooks/useCreateBoard";
import { useForm } from "react-hook-form";
import useAddElement from "../hooks/useAddElement";

interface AddBoard {

}

interface AddBoardFormInput {
    name: string;
    description: string;
};

const AddBoard: FC<AddBoard> = ({}) => {

    const { addBoard } = useCreateBoard({ user_sid: "US000001"});
    const {
        register,
        handleSubmit,
        watch,
        formState: {isValid}
    } = useForm<AddBoardFormInput>();
    const { addNewElement } = useAddElement({ board_sid: "BD000001", "user_sid": "US000001"})

    return (
        <div>
            <form onSubmit={handleSubmit(addBoard)}>
                <input {...register("name")} />
                <input {...register("description")} />
            <button type="submit">Add Board</button>
            </form>
            <button onClick={() => addNewElement({
                position: {
                    x: 200,
                    y: 100
                }
            })}>Add Element</button>
        </div>
        
    );
}

export default AddBoard;