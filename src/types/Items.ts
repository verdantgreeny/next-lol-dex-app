export type Item = ItemBase & {
  image: ImageType;
  gold: GoldType;
};

type ImageType = {
  full: string;
  sprite: string;
  group: string;
};

type GoldType = {
  base: number;
  total: number;
  sell: number;
  purchasable: boolean;
};

type ItemBase = {
  id: string;
  name: string;
  plaintext: string;
  description: string;
  colloq: string;
  tags: string[];
};
