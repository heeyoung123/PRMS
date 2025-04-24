import {create} from "zustand";

interface StoreState {
	isLoggedIn: boolean;
	storeLogin: (token: string) => void;
	storeLogout: () => void;
}

export const getToken = () => {
	const token = localStorage.getItem("token");
	return token;
};
//토큰 저장
const setToken = (token: string) => {
	localStorage.setItem("token", token);
};

export const removeToken = () => {
	localStorage.removeItem("token");
};
export const useAuthStore = create<StoreState>((set) => ({
	isLoggedIn: !!getToken(),
	storeLogin: (token: string) => {
		set({isLoggedIn: true});
		setToken(token);
	},
	storeLogout: () => {
		set({isLoggedIn: false});
		removeToken();
	},
}));