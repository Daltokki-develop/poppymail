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
          description="📬 mail platform where letters arrive on random dates 'Poppymail'"
        />
      }
    >
      <Basic title={'파피메일'}>
        <div className="flex h-[27rem] w-full flex-col items-center justify-center">
          <img
            className="mb-6 w-64"
            src="/assets/images/index/main.svg"
            alt="poppy&felix"
          />
          <div className="text-center font-['Cafe24SsurroundAir'] text-xl">
            오 안녕!
            <br />
            반가워
          </div>
        </div>
        <div className="mx-8">
          <div className="mb-2">
            <Button type="primary">파피의 이야기 듣기</Button>
          </div>
          <Button type="secondary">로그인 / 회원가입하기</Button>
        </div>
      </Basic>
    </Main>
  );
};

export default Index;
