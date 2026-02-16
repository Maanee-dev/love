
export interface Reason {
  id: string;
  title: string;
  description: string;
  image: string;
  handwrittenNote?: string;
}

export interface LoveNote {
  note: string;
  category: string;
}
