"use server";
import axios from "axios";

const URL = process.env.API_BASE_URL;

export const GetHomeData = async () => {
  try {
    const response = await axios.get(`${URL}/api/v2/hianime/home`);

    const data = response.data;

    return data.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
