import { Button, Htag, P, Tag } from "../components";

export default function Home(): JSX.Element {

  return (
    <div>
      <Htag tag="h1">Tercn</Htag>
      <Button appearance='primary' arrow='right' >Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size="s">Маленький 14px</P>
      <P>Средний 16px</P>
      <P size="l">Большой 18px</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color='red'>Rad</Tag>
      <Tag size="s" color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>

    </div>
  );
}



