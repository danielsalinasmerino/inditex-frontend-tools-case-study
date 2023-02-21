import {
  CollisionDetection,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  getFirstCollision,
  pointerWithin,
  rectIntersection,
  useSensor,
  useSensors,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Grid } from "../../../models/grids";
import { Products } from "../../../models/products";
import { getItemsFromRows } from "../../../utils/grids";
import { Row } from "../../../models/rows";
import { RowElement } from "../../molecules/RowElement";
import { generateUniqueIdentifier } from "../../../utils/uuids";
import { Button } from "../../atoms/Button";
import { traductions } from "../../../i18n/traductions";

import "./GridElement.css";

export type GridProps = {
  grid: Grid;
  products: Products;
  onGridChange: Dispatch<SetStateAction<Grid | undefined>>;
};

export const GridElement: FC<GridProps> = ({
  grid,
  products,
  onGridChange,
}) => {
  const [items, setItems] = useState<{
    [key: UniqueIdentifier]: UniqueIdentifier[];
  }>(() => getItemsFromRows(grid.rows));
  const [clonedItems, setClonedItems] = useState<{
    [key: UniqueIdentifier]: UniqueIdentifier[];
  } | null>(null);
  const [containers, setContainers] = useState(
    Object.keys(items) as UniqueIdentifier[]
  );
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const lastOverId = useRef<UniqueIdentifier | null>(null);
  const recentlyMovedToNewContainer = useRef(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const collisionDetectionStrategy: CollisionDetection = useCallback(
    (args) => {
      if (activeId && activeId in items) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter(
            (container) => container.id in items
          ),
        });
      }

      const pointerIntersections = pointerWithin(args);
      const intersections =
        pointerIntersections.length > 0
          ? pointerIntersections
          : rectIntersection(args);
      let overId = getFirstCollision(intersections, "id");

      if (overId != null) {
        if (overId in items) {
          const containerItems = items[overId];

          if (containerItems.length > 0) {
            overId = closestCenter({
              ...args,
              droppableContainers: args.droppableContainers.filter(
                (container) =>
                  container.id !== overId &&
                  containerItems.includes(container.id as string)
              ),
            })[0]?.id;
          }
        }

        lastOverId.current = overId;

        return [{ id: overId }];
      }

      if (recentlyMovedToNewContainer.current) {
        lastOverId.current = activeId;
      }

      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeId, items]
  );

  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key: string) =>
      items[key].includes(id as string)
    );
  };

  function handleDragOver({ active, over }: DragOverEvent) {
    const overId = over?.id;

    if (overId == null || active.id in items) {
      return;
    }

    if (!overId) return;

    const overContainer = findContainer(overId);
    const activeContainer = findContainer(active.id);

    if (!overContainer || !activeContainer) {
      return;
    }

    if (activeContainer !== overContainer) {
      setItems((items) => {
        const activeItems = items[activeContainer];
        const overItems = items[overContainer];
        const overIndex = overItems.indexOf(overId);
        const activeIndex = activeItems.indexOf(active.id);

        let newIndex: number;

        if (overId in items) {
          newIndex = overItems.length + 1;
        } else {
          const isBelowOverItem =
            over &&
            active.rect.current.translated &&
            active.rect.current.translated.top >
              over.rect.top + over.rect.height;

          const modifier = isBelowOverItem ? 1 : 0;

          newIndex =
            overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
        }

        recentlyMovedToNewContainer.current = true;

        return {
          ...items,
          [activeContainer]: items[activeContainer].filter(
            (item) => item !== active.id
          ),
          [overContainer]: [
            ...items[overContainer].slice(0, newIndex),
            items[activeContainer][activeIndex],
            ...items[overContainer].slice(
              newIndex,
              items[overContainer].length
            ),
          ],
        };
      });
    }
  }

  function handleDragCancel() {
    if (clonedItems) {
      setItems(clonedItems);
    }

    setActiveId(null);
    setClonedItems(null);
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    if (active.id in items && over?.id) {
      setContainers((containers) => {
        const activeIndex = containers.indexOf(active.id);
        const overIndex = containers.indexOf(over.id);

        return arrayMove(containers, activeIndex, overIndex);
      });
    }

    const activeContainer = findContainer(active.id);

    if (!activeContainer) {
      setActiveId(null);
      return;
    }

    const overId = over?.id;

    if (overId == null) {
      setActiveId(null);
      return;
    }

    const overContainer = findContainer(overId);

    if (overContainer) {
      if (items[overContainer].length >= 4) {
        return handleDragCancel();
      }

      const activeIndex = items[activeContainer].indexOf(active.id);

      const overIndex = items[overContainer].indexOf(overId);

      if (activeIndex !== overIndex) {
        setItems((items) => ({
          ...items,
          [overContainer]: arrayMove(
            items[overContainer],
            activeIndex,
            overIndex
          ),
        }));
      }
    }

    setActiveId(null);
  }

  function handleAddRow() {
    const newContainerId = generateUniqueIdentifier();

    setItems({
      ...items,
      [newContainerId]: [],
    });
    setContainers((containers) => [...containers, newContainerId]);
  }

  function handleRemoveRow(containerId: UniqueIdentifier) {
    setContainers((containers) =>
      containers.filter((id) => id !== containerId)
    );

    const newItems = Object.entries(items)
      .filter(([key]) => key !== containerId)
      .reduce((acc, [key, value]) => {
        return { ...acc, [key]: value };
      }, {});

    setItems(newItems);
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
    setClonedItems(items);
  }

  const handleTemplateChange = (containerId: string, templateId: string) => {
    const rows = grid.rows.map((row) => {
      if (row.id === containerId) row.templateId = templateId;
      return row;
    });
    onGridChange({ ...grid, rows });
  };

  useEffect(() => {
    onGridChange({
      id: grid.id,
      rows: containers.map((containerId) => ({
        id: containerId.toString(),
        productIds: items[containerId] as string[],
        templateId:
          grid.rows.find((row) => row.id === containerId)?.templateId || "",
      })),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, containers]);

  return (
    <div className="grid">
      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetectionStrategy}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragCancel={handleDragCancel}
      >
        <SortableContext
          items={containers}
          strategy={verticalListSortingStrategy}
          id={grid.id}
        >
          <ul className="gridList">
            {containers.map((containerId) => (
              <RowElement
                itemsIds={items[containerId]}
                key={containerId}
                onRemoveRow={handleRemoveRow}
                onTemplateChange={handleTemplateChange}
                row={
                  grid.rows.find((row) => row.id === containerId) ||
                  ({
                    id: containerId,
                    productIds: items[containerId],
                    templateId: "",
                  } as Row)
                }
                products={products.filter((product) =>
                  items[containerId].includes(product.id)
                )}
              />
            ))}
          </ul>

          <Button onClick={handleAddRow} label={traductions.add_products_row} />
        </SortableContext>
      </DndContext>
    </div>
  );
};
