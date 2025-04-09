import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type Todo ={
	id: number;
	text:string;
	isChecked:boolean;
}
type TodoModalProps ={
	show: boolean
	todo: Todo | null;
	handleClose: () => void;
}
const TodoModal : React.FC<TodoModalProps> =({show,todo,handleClose})=>{
	return (
		<div>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Todo 상세 정보</Modal.Title>
				</Modal.Header>
				<Modal.Body>{todo?.text}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={()=>{}}>
						Close
					</Button>
					<Button variant="primary" onClick={()=>{}}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
export default TodoModal;


