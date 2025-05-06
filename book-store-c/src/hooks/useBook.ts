import {useEffect, useState} from "react";
import {BookDetail, BookReviewItem, BookReviewItemWrite} from "../models/book.model";
import {fetchBook, likeBook, unlikeBook} from "../api/books.api";
import {useAuthStore} from "../store/authStore";
import {useAlert} from "./useAlert";
import {addCart} from "../api/carts.api";
import {addBookReview, fetchBookReview} from "@/api/review.api";
import {useToast} from "@/hooks/useToasts";

export const useBook = (book_id: string | undefined) => {
	const [book, setBook] = useState<BookDetail | null>(null);
	const [cartAdded, setCartAdded] = useState(false);
	const [reviews, setReviews] = useState<BookReviewItem[]>([]);

	const {showAlert} = useAlert();
	const {isLoggedIn} = useAuthStore();
	const {showToast} = useToast();

	const likeToggle = () => {
		//권한 확인
		if (!isLoggedIn) {
			showAlert("로그인이 필요합니다.");
			return;
		}
		if (!book) return;
		if (book.liked) {
			unlikeBook(book.id).then(() => {
				setBook({
					...book,
					liked: false,
					likes: book.likes - 1,
				});
				showToast("좋아요가 취소되었습니다.");
			});
		} else {
			likeBook(book.id).then(() => {
				setBook({
					...book,
					liked: true,
					likes: book.likes + 1,
				});
				showToast("좋아요가 성공했습니다.");
			});
		}
	};
	const addToCart = (quantity: number) => {
		if (!book) return;
		addCart({
			book_id: book.id,
			quantity: quantity,
		}).then(() => {
			setCartAdded(true);
			setTimeout(() => {
				setCartAdded(false);
			}, 3000);
		});
	};
	useEffect(() => {
		if (!book_id) return;
		fetchBook(book_id).then((book) => {
			setBook(book);
		});
		fetchBookReview(book_id).then((reviews) => {
			setReviews(reviews);
		});
	}, [book_id]);

	const addReview = (data: BookReviewItemWrite) => {
		if (!book) return;
		addBookReview(book.id.toString(), data).then((res) => {
			// fetchBookReview(book.id.toString()).then((reviews) => {
			// 	setReviews(reviews);
			// });
			showAlert(res.message);
		});
	};
	return {book, likeToggle, addToCart, cartAdded, reviews, addReview};
};