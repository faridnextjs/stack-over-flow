interface Tags {
  id: string;
  name: string;
}

interface Author {
  id: number;
  name: string;
  image?: string;
}

interface Question {
  id: string;
  title: string;
  description: string;
  tags: Tags[];
  author: Author[];
  upvotes: number;
  answers: number;
  views: number;
  createdAt: Date;
}
