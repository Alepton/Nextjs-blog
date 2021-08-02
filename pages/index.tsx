import { useEffect, useState } from "react";
import { Button, Htag, P, Tag, Rating } from "../components";

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Counter' + counter);
    return function cleanup() {
      console.log('Unmount');
    };
  });

  useEffect(() => {
    console.log('Unmounted');
  }, []);

  /* временный стэйт*/

  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag="h1">{counter}</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)} >Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size="s">Маленький 14px</P>
      <P>Средний 16px</P>
      <P size="l">Большой 18px</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color='red'>Rad</Tag>
      <Tag size="s" color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>

    </div>
  );
}



