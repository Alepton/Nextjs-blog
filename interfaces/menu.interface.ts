
export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  isOpend?: boolean;
  pages: Page[];
}

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory
}
