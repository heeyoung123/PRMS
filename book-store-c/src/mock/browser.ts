import {setupWorker} from "msw/browser";
import {addReview, reviewForMain, reviewsById} from "@/mock/review";
import {bestBooks} from "@/mock/books";

const handlers = [reviewsById, addReview, reviewForMain, bestBooks];

export const worker = setupWorker(...handlers);