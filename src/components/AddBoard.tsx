import React, { FC } from "react";
import useCreateBoard from "../hooks/useCreateBoard";
import { useForm } from "react-hook-form";

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

    return (
        <div>
            <form onSubmit={handleSubmit(addBoard)}>
                <input {...register("name")} />
                <input {...register("description")} />
            <button type="submit">Add Board</button>
            </form>
        </div>
        
    );
}

export default AddBoard;