import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";
import { useEffect, useState, KeyboardEvent } from "react";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArrey] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
        className=
          {cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)} /*событие наведения мыши на объект */
          onMouseLeave={() => changeDisplay(rating)} /*событие ухода мыши с объекта - рейтинг должен вернуться к тому который был */
          onClick={() => onClick(i + 1)} /* а если мы кликнули, то рейтинг передается*/
          >

          <StarIcon
            tabIndex={isEditable ? 0 : -1} /* событие перехода через Tab*/
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            } /* событие фиксирования рейтинга через пробел*/
          />
        </span>
      );
    });
    setRatingArrey(updateArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      /*если объект не редактируемый, то просто возврат  */
      return;
    }
    constructRating(i); /* только отразить рейтинг*/
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      /*если объект не редактируемый или нету сет рейтинга, то просто возврат - ничего не делать!*/
      return;
    }
    setRating(i); /* установить новый рейтинг*/
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
