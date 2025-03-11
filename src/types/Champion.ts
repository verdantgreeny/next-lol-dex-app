export type Champion = {
  id: string;
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
  image: {
    full: string;
  };
  lore: string;
  partype: string;
  tags: string[];
  stats: {
    hp: number;
    hpperlevel: number;
    armor: number;
    attackdamage: number;
    movespeed: number;
  };
  spells: {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    image: {
      full: string;
    };
  }[];
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
  allytips: string[];
  enemytips: string[];
  skins: {
    id: string;
    name: string;
    num: number;
  }[];
};
