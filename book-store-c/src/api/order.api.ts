import {httpClient, requestHandler} from "./http";
import {Order, OrderDetailItem, OrderSheet} from "../models/order.model";


export const fetchOrders = async () => {
	return await requestHandler("get", "/orders");
};
export const fetchOrder = async (orderId: number) => {
	return await requestHandler("get", `/orders/${orderId}`);
};

export const orderCart = async (orderData: OrderSheet) => {
	return await requestHandler<OrderSheet>("post", "/orders", orderData);
};