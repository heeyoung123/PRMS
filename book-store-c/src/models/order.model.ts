export interface Order {
	id: number;
	createdAt: string;
	address: string;
	receiver: string;
	contact: string;
	book_title: string;
	total_quantity: number;
	total_price: number;
}

export interface OrderSheet {
	items: number[];
	delivery: Delivery;
	firstBookTitle: string;
	total_quantity: number;
	total_price: number;
}

export interface Delivery {
	address: string;
	receiver: string;
	contact: string;
}

export interface OrderDetailItem {
	author: string;
	book_id: number;
	price: number;
	quantity: number;
	title: string;
}

export interface OrderListItem extends Order {
	detail?: OrderDetailItem[];
}