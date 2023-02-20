import { FC } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

export type DraggableProps = {
  children: JSX.Element;
  draggableId: string;
};

export const Draggable: FC<DraggableProps> = ({ children, draggableId }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: draggableId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </li>
  );
};
