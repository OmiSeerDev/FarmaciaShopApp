export type Cart = {
  _id: string;
  user: string;
  createdAt: Date;
  total: number;
  products: string[];
  saleMade: boolean;
};
