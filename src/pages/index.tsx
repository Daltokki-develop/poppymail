import { Button } from '@/components/button';
import { Basic } from '@/layouts/Basic';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Poppymail"
          description="๐ฌ mail platform where letters arrive on random dates 'Poppymail'"
        />
      }
    >
      <Basic title={'ํํผ๋ฉ์ผ'}>
        <div className="mb-8 flex w-full flex-col items-center justify-center">
          <img
            className="mb-6 w-64"
            src="/assets/images/index/main.svg"
            alt="poppy&felix"
          />
          <div className="text-center font-['Cafe24SsurroundAir'] text-xl">
            ์ค ์๋!
            <br />
            ๋ฐ๊ฐ์
          </div>
        </div>
        <div className="mx-8">
          <div className="mb-2">
            <Button type="primary">ํํผ์ ์ด์ผ๊ธฐ ๋ฃ๊ธฐ</Button>
          </div>
          <Button type="secondary">๋ก๊ทธ์ธ / ํ์๊ฐ์ํ๊ธฐ</Button>
        </div>
      </Basic>
    </Main>
  );
};

export default Index;
