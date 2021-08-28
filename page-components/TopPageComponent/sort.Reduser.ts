import { SortEnum } from "../../components/Sort/Sort.props";

//Actions:
export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating };

//State. который будет изменяться редьюсером
export interface SortReuserState {
  sort: SortEnum;
  products: ProductModel[];
}

//Reducer
export const sortReduser = (state: SortReuserState, action: SortActions): SortReuserState => {
  switch(action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
      };
//сортировка => сравниваем два соседних элемента а и b и соответсвенно меняем индексы, смещая элемент вверх или вниз
      case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
      };
      default:
        throw new Error('Не верный тип сортировки');
  }
};
