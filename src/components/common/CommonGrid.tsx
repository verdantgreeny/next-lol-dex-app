import { ReactNode } from "react";

const CommonGrid = ({ children }: { children: ReactNode }) => (
  <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
    {children}
  </div>
);

export default CommonGrid;
