import axios, { AxiosResponse } from "axios";
import { BASE_BOARD_ELEMENT_URL } from "./url"

const elementUrl = `${BASE_BOARD_ELEMENT_URL}/elements`;

export const getAllElements = async ({ board_sid }: {board_sid: string}): Promise<AxiosResponse<any>> => await axios.get(`${elementUrl}/${board_sid}`);