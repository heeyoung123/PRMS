import {styled} from "styled-components";
import {formatNumber} from "../../utils/format";

interface Props {
	total_quantity: number;
	total_price: number;
}

const CartSummary = ({total_quantity, total_price}: Props) => {
	return (
		<CartSummaryStyled>
			<h1>주문 요약</h1>
			<dl>
				<dt>총 수량</dt>
				<dd>{total_quantity} 권</dd>
			</dl>
			<dl>
				<dt>총 금액</dt>
				<dd>{formatNumber(total_price)} 원</dd>
			</dl>
		</CartSummaryStyled>);
};
const CartSummaryStyled = styled.div`
    border: 1px solid ${({theme}) => theme.color.border};
    border-radius: ${({theme}) => theme.borderRadius.default};
    padding: 12px;
    width: 240px;

    h1 {
        font-size: 1.5rem;
        margin-bottom: 12px;
        color: ${({theme}) => theme.color.text};
    }

    dl {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    dd {
        font-weight: 700;
    }
`;

export default CartSummary;