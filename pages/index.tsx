import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { Button, Htag, P, Tag, Rating, Input, Textarea } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";



 function Home({ menu }: HomeProps ): JSX.Element {

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
    <>
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
      <Input placeholder='Имя' />
      <Textarea placeholder='Текст отзыва' />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}



