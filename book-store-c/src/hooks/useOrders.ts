import {useEffect, useState} from "react";
import {OrderListItem} from "../models/order.model";
import {fetchOrder, fetchOrders} from "../api/order.api";


export const useOrders = () => {
	const [orders, setOrders] = useState<OrderListItem[]>([]);
	const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
	useEffect(() => {
		fetchOrders().then(orders => {
			setOrders(orders);
		});
	}, []);
	const selectedOrderItem = (orderId: number) => {
		//요청 방어
		//만약 1번 자세히 보기를 클릭하고 2번 자세히 보기를 클릭하고 다시 1번 자세히 보기를 클릭했을 때
		//재패치할 필요 없도록
		if (orders.filter((item) => item.id === orderId)[0].detail) {
			setSelectedItemId(orderId);
			return;
		}
		fetchOrder(orderId).then((orderDetail) => {
			setSelectedItemId(orderId);
			setOrders(
				orders.map((item) => {
					if (item.id === orderId) {
						return {
							...item,
							detail: orderDetail,
						};
					}
					return item;
				}));
		});
	};
	return {orders, selectedItemId, selectedOrderItem};
};