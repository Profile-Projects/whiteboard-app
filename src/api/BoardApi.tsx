import axios, { AxiosResponse } from "axios";
import { BASE_BOARD_SERVICE_URL } from "./url";
import { AddBoardRequest } from "./request/AddBoardRequest";
import { Board } from "./response/Board";

const boardUrl = `${BASE_BOARD_SERVICE_URL}/board`;

export const addBoardApi = async (board: AddBoardRequest): Promise<AxiosResponse<Board>> => axios.post(`${boardUrl}`, {...board})