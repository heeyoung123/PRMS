import {create} from "zustand";

export type ToastType = "info" | "error";

export interface ToastItem {
	id: number;
	type: ToastType;
	message: string;
}

interface ToastStoreState {
	toasts: ToastItem[];
	addToast: (message: string, type?: ToastType) => void;
	removeToast: (id: number) => void;
}

const useToastStore = create<ToastStoreState>((set) => ({
	toasts: [],
	addToast: (message: string, type: ToastType = "info") => {
		set((state: ToastStoreState) => ({
			toasts: [...state.toasts, {message, type, id: Date.now()}],
		}));
	},
	removeToast: (id: number) => {
		set((state: ToastStoreState) => ({
			toasts: state.toasts.filter((toast) => toast.id !== id),
		}));
	},
}));
export default useToastStore;