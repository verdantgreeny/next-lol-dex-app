export type Item = {
  id: string;
  name: string;
  plaintext: string;
  description: string;
  colloq: string;
  image: {
    full: string;
    sprite: string;
    group: string;
  };
  gold: {
    base: number;
    total: number;
    sell: number;
    purchasable: boolean;
  };
  tags: string[];
};
