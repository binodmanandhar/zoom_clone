import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div>Navbar</div>
      {children}
      <div>Footer</div>
    </main>
  );
};

export default RootLayout;
