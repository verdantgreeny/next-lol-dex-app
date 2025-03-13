export type Item = {
  id: string;
  name: string;
  plaintext: string;
  image: {
    full: string;
  };
  gold: {
    total: number;
  };
};
