import {requestHandler} from "./http";
import {BookReviewItem, BookReviewItemWrite} from "@/models/book.model";

export const fetchBookReview = async (book_id: string) => {
	return await requestHandler<BookReviewItem[]>("get", `/reviews/${book_id}`);
};

interface AddBookReviewResponse {
	message: string;
}

export const addBookReview = async (book_id: string, data: BookReviewItemWrite) => {
	return await requestHandler<AddBookReviewResponse>("post", `/reviews/${book_id}`);
};

export const fetchReviewAll = async () => {
	return await requestHandler<BookReviewItem[]>("get", "/reviews");
};