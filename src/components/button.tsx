type IButtonProps = {
  type: string;
  children?: any;
};

const Button = (props: IButtonProps) => {
  return (
    <>
      {props.type === 'primary' ? (
        <div className="flex h-16 w-full cursor-pointer items-center justify-center rounded-3xl bg-[#A38AEE] font-['AppleSDGothicNeo'] text-lg text-white duration-300 ease-in-out hover:bg-[#8f79d4]">
          {props.children}
        </div>
      ) : (
        <div className="flex h-16 w-full cursor-pointer items-center justify-center rounded-3xl border-2 border-[#A38AEE] bg-transparent font-['AppleSDGothicNeo'] text-lg text-[#4B4362] duration-300 ease-in-out hover:bg-violet-50">
          {props.children}
        </div>
      )}
    </>
  );
};

export { Button };
