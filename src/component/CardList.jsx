import { Droppable } from "@hello-pangea/dnd";
import { CardComponent } from "./Card";
import { Stack } from "@mui/material";

export const CardListComponent = (props) => {
  const { cards, droppableId } = props;

  return (
    <Droppable droppableId={String(droppableId)}>
      {(provided) => (
        <Stack
          ref={provided.innerRef}
          {...provided.droppableProps}
          direction="column"
          spacing={2}
          p={2}
          borderRadius={8}
          style={{
            width: 200,
            height: 630,
            backgroundColor: "black",
          }}
        >
          {cards.map((card, index) => (
            <CardComponent
              cardTitle={card.title}
              cardId={card.id}
              index={index}
              key={card.title}
            />
          ))}
        </Stack>
      )}
    </Droppable>
  );
};
