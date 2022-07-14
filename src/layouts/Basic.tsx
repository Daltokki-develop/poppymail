type IBasicProps = {
  title: string;
  back?: boolean;
  menu?: boolean;
  children?: any;
};

const Basic = (props: IBasicProps) => {
  // const router = useRouter();

  return (
    <>
      {!props.back && (
        <div className="mx-4 flex h-28 items-center justify-center font-['AppleSDGothicNeo']">
          <div>{props.title}</div>
        </div>
      )}
      {props.back && (
        <div className="mx-4 flex h-28 items-center justify-between font-['AppleSDGothicNeo']">
          <div className="flex w-16 items-center justify-center">
            <img className="w-14" src="/assets/images/back.svg" alt="back" />
          </div>
          <div>{props.title}</div>
          <div className="flex w-16 items-center justify-center">
            {props.menu && (
              <img className="w-6" src="/assets/images/menu.svg" alt="menu" />
            )}
          </div>
        </div>
      )}

      <div>{props.children}</div>
      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} Poppymail. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by{' '}
        <a href="https://rare-haumea-181.notion.site/Side-project-540b977e82c943c2bae3cb07918e6a47">
          Daltokki
        </a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </>
  );
};

export { Basic };
