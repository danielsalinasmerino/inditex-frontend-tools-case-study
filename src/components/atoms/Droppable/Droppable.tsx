import { FC } from "react";
import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
  children: JSX.Element;
  droppableId: string;
};

export const Droppable: FC<DroppableProps> = ({ children, droppableId }) => {
  const { setNodeRef } = useDroppable({
    id: droppableId,
  });

  return <div ref={setNodeRef}>{children}</div>;
};
