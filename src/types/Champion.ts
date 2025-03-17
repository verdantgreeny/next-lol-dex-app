export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
};

export type ChampionDetail = {
  id: string;
  name: string;
  title: string;
  image: ImageType;
  lore: string;
  tags: string[];
  spells: SpellType[];
  passive: PassiveType;
};

type ImageType = {
  full: string;
};

type SpellType = {
  id: string;
  name: string;
  description: string;
  image: ImageType;
};

type PassiveType = {
  name: string;
  description: string;
  image: ImageType;
};
