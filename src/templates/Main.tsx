import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="relative mx-auto flex h-screen w-full justify-center overflow-hidden bg-white text-[#4B4362] antialiased md:bg-slate-100">
    {props.meta}
    <div className="sticky top-0 max-h-screen w-full max-w-[28rem] overflow-y-auto bg-white shadow-none lg:shadow-lg">
      {props.children}
    </div>
  </div>
);

export { Main };
