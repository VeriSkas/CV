import { useState, DragEvent } from 'react';

export const useDrag = (): {
  drag: boolean;
  dragStartHandler: (event: DragEvent<HTMLDivElement>) => void
  dragLeaveHandler: (event: DragEvent<HTMLDivElement>) => void
  dropHandler: (event: DragEvent<Element>) => void
} => {
  const [drag, setDrag] = useState<boolean>(false);

  const dragStartHandler = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setDrag(false);
  };

  const dropHandler = (event: DragEvent<Element>): void => {
    event.preventDefault();
    setDrag(false);
  };

  return { drag, dragStartHandler, dropHandler, dragLeaveHandler }
};
