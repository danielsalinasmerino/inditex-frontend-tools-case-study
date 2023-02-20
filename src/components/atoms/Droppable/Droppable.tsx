import { FC } from "react";
import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
  children: JSX.Element;
  droppableId: string;
};

export const Droppable: FC<DroppableProps> = ({ children, droppableId }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: droppableId,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
