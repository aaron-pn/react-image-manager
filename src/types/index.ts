export type Images = {
  id: string;
  author: string;
  download_url: string;
  height: string;
  url: string;
  width: string;
};

export interface SavedImage {
  id: string;
  title: string;
  image: string;
}

export interface ChildrenProp {
  children: JSX.Element;
}
