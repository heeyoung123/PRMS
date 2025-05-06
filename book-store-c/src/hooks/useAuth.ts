import {useAuthStore} from "@/store/authStore";
import {LoginProps} from "@/pages/Login";
import {login, resetPassword, resetRequest, signup} from "@/api/auth.api";
import {useAlert} from "@/hooks/useAlert";
import {useNavigate} from "react-router-dom";
import {SignupProps} from "@/pages/Signup";
import {useState} from "react";

export const useAuth = () => {
	const {showAlert} = useAlert();
	const nav = useNavigate();
	const {storeLogin, storeLogout, isLoggedIn} = useAuthStore();
	const [resetRequested, setResetRequested] = useState(false);

	const userLogin = (data: LoginProps) => {
		login(data).then((res) => {
			storeLogin(res.token);
			showAlert("로그인 성공했습니다.");
			nav("/");
		}, (error) => {
			showAlert("로그인에 실패했습니다.");
		});
	};

	const userSignup = (data: SignupProps) => {
		signup(data).then((res) => {
			showAlert("회원가입이 완료되었습니다.");
			nav("/login");
		});
	};

	const userResetPassword = (data: SignupProps) => {
		resetPassword(data).then(() => {
			showAlert("비밀번호가 초기화되었습니다.");
			nav("/login");
		});
	};

	const userResetRequest = (data: SignupProps) => {
		resetRequest(data).then(() => {
			setResetRequested(true);
		});
	};
	return {userLogin, userSignup, userResetPassword, userResetRequest, resetRequested};
};