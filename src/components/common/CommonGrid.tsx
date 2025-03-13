import { ReactNode } from "react";

const CommonGrid = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
    {children}
  </div>
);

export default CommonGrid;
