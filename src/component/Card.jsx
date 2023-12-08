import { Draggable } from "@hello-pangea/dnd";

export const CardComponent = (props) => {
  const { cardId, cardTitle, index } = props;

  return (
    <Draggable draggableId={cardId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            draggable
            className="App-link"
            style={{
              width: 200,
              height: 200,
              backgroundColor: "white",
              borderRadius: 16,
            }}
          >
            {cardTitle}
          </div>
        </div>
      )}
    </Draggable>
  );
};
