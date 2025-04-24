import {httpClient} from "./http";
import {Book} from "../models/book.model";
import {Pagination} from "../models/pagination.model";

interface FetchBooksParams {
	category_id?: number;
	news?: boolean;
	currentPage?: number;
	limit?: number;
}

interface FetchBooksResponse {
	books: Book[];
	pagination: Pagination;
}


//params를 사용하면 쿼리스트링으로 사용 가능
export const fetchBooks = async (
	params: FetchBooksParams,
): Promise<FetchBooksResponse> => {
	try {
		const response = await httpClient.get<FetchBooksResponse>("/books", {
			params,
		});
		return response.data;
	} catch (error) {
		return {
			books: [],
			pagination: {
				totalCount: 0,
				currentPage: 1,
			},
		};
	}
};