import "./App.css";
import { Stack } from "@mui/material";
import { DragDropContext } from "@hello-pangea/dnd";
import { CardListComponent } from "./component/CardList";
import { useState } from "react";

const initialCards = [
  {
    id: "0",
    title: "Task 1",
  },
  {
    id: "1",
    title: "Task 2",
  },
  {
    id: "2",
    title: "Task 3",
  },
];

const initialBoard = [["0", "1", "2"], [], [], []];

function App() {
  const [board, setBoard] = useState(initialBoard);

  const handleOnDragEnd = (result) => {
    if (result.destination === null) return;
    const { source, destination, draggableId } = result;

    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[+source.droppableId].splice(source.index, 1);

      newBoard[+destination.droppableId] = [
        ...prev[+destination.droppableId].slice(0, destination.index),
        draggableId,
        ...prev[+destination.droppableId].slice(destination.index),
      ];

      return [...newBoard];
    });
  };

  return (
    <div className="App">
      <Stack spacing={2} mt={2} direction="row" justifyContent="center"></Stack>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Stack spacing={2} mt={4} direction="row" justifyContent="center">
          {Array.from({ length: 4 }, (_, i) => {
            const cards = board[i].reduce((cur, cardId) => {
              console.log(initialCards, cardId);
              const card = initialCards.find((el) => el.id === cardId);
              if (card) cur.push(card);
              return cur;
            }, []);
            return <CardListComponent key={i} cards={cards} droppableId={i} />;
          })}
        </Stack>
      </DragDropContext>
    </div>
  );
}

export default App;
