import {appContainer, board, buttons} from "./App.css.ts";
import BoardList from "./components/BoardList/BoardList.tsx";
import {useState} from "react";
import ListsContainer from "./components/ListContainer/ListsContainer.tsx";
import {useTypedSelector} from "./hooks/redux.ts";

function App() {
const [activeBoardId, setActiveBoardId] = useState('board-0');
const boards=useTypedSelector(state=>state.boards.boardArray);
  const getActiveBoard = boards.find(board => board.boardId === activeBoardId);
  const lists = getActiveBoard?.lists ?? [];


  return (
    <>
      <div className={appContainer}>
        <BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId} />
        <div className={board}>
          <ListsContainer lists={lists} boardId={getActiveBoard?.boardId ?? ''} />
        </div>
        <div className={buttons}></div>
      </div>

    </>
  )
}

export default App
