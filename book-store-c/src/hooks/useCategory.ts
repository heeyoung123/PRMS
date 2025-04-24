import {useEffect, useState} from "react";
import {Category} from "../models/category.model";
import {fetchCategory} from "../api/category.api";
import {useLocation} from "react-router-dom";

export const useCategory = () => {
	const location = useLocation();
	const [category, setCategory] = useState<Category[]>([]);

	const setActive = () => {
		const params = new URLSearchParams(location.search);
		if (params.get("category_id")) {
			setCategory((prev) => {
				return prev.map((item) => {
					return {
						...item, isActive: item.category_id === Number(params.get("category_id")),
					};
				});
			});
		} else {
			setCategory((prev) => {
				return prev.map((item) => {
					return {
						...item, isActive: false,
					};
				});
			});
		}
	};
	useEffect(() => {
		fetchCategory().then((category) => {
			if (!category) return;
			const categoryWithAll = [
				{
					category_id: null,
					category_name: "전체",
				},
				...category,
			];
			setCategory(categoryWithAll);
			setActive();
		});
	}, []);

	useEffect(() => {
		setActive();
	}, [location.search]);
	return {category};
};
// import {useEffect, useState} from "react";
// import {Category} from "../models/category.model";
// import {fetchCategory} from "../api/category.api";
// import {useLocation} from "react-router-dom";
//
// export const useCategory = () => {
// 	const location = useLocation();
// 	const [category, setCategory] = useState<Category[]>([]);
//
// 	const setActive = () => {
// 		const params = new URLSearchParams(location.search);
// 		const paramId = params.get("category_id");
//
// 		console.log("🔍 현재 URL에서 category_id:", paramId);
//
// 		setCategory((prev) => {
// 			return prev.map((item) => {
// 				const isActive = paramId !== null && String(item.category_id) === paramId;
// 				if (isActive) {
// 					console.log("✅ 활성화된 카테고리:", item.category_name);
// 				}
// 				return {
// 					...item,
// 					isActive,
// 				};
// 			});
// 		});
// 	};
//
// 	// 최초 로딩 시 카테고리 + 활성화 상태 처리
// 	useEffect(() => {
// 		fetchCategory().then((category) => {
// 			if (!category) return;
//
// 			const categoryWithAll = [
// 				{
// 					category_id: null,
// 					category_name: "전체",
// 				},
// 				...category,
// 			];
// 			setCategory(categoryWithAll);
// 		});
// 	}, []);
//
// 	// category or location.search가 바뀔 때 setActive 실행
// 	useEffect(() => {
// 		// URL 변경 감지 시 카테고리 활성화 상태 업데이트
// 		if (category.length === 0) return; // 카테고리가 세팅되지 않았으면 실행 X
// 		setActive();
// 	}, [location.search]); // ✅ category는 제외!
//
// 	return {category};
// };