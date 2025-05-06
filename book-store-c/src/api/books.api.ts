import {httpClient} from "./http";
import {Book, BookDetail} from "../models/book.model";
import {Pagination} from "../models/pagination.model";

interface FetchBooksParams {
	category_id?: number;
	news?: boolean;
	currentPage?: number;
	limit?: number;
}

export interface FetchBooksResponse {
	books: Book[];
	pagination: Pagination;
}


//params를 사용하면 쿼리스트링으로 사용 가능
export const fetchBooks = async (
	params: FetchBooksParams,
): Promise<FetchBooksResponse> => {
	try {
		const response = await httpClient.get<FetchBooksResponse>("/books", {
			params: params,
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
export const fetchBook = async (book_id: string) => {
	const response = await httpClient.get<BookDetail>(`/books/${book_id}`);
	return response.data;
};
export const likeBook = async (book_id: number) => {
	const response = await httpClient.post(`/likes/${book_id}`);
	return response.data;
};
export const unlikeBook = async (book_id: number) => {
	const response = await httpClient.delete(`/likes/${book_id}`);
	return response.data;
};

export const fetchBestBooks = async () => {
	const response = await httpClient.get<Book[]>("/books/best");
	return response.data;
};