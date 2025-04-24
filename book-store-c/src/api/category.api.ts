import {Category} from "../models/category.model";
import {httpClient} from "./http";

// export const fetchCategory = async () => {
// 	const response = await httpClient.get<Category[]>("/category");
// 	return response.data;
// };
export const fetchCategory = async () => {
	console.log("카테고리 호출!");
	const res = await httpClient.get("/category");
	console.log(res);
	return res.data;
};