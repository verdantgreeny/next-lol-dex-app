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
  image: {
    full: string;
  };
  lore: string;
  partype: string;
  tags: string[];
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
};
