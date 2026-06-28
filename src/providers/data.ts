import simpleRestDataProvider from "@refinedev/simple-rest";
import { API_URL } from "./constants";

export const dataProvider = simpleRestDataProvider(API_URL);
