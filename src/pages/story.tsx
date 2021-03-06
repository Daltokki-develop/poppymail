import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/components/button';
import { Basic } from '@/layouts/Basic';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Story = () => {
  return (
    <Main
      meta={
        <Meta
          title="Poppymail"
          description="๐ฌ mail platform where letters arrive on random dates 'Poppymail'"
        />
      }
    >
      <Basic back menu title={'ํํผ์ ์ด์ผ๊ธฐ'}>
        <div className="h-[32rem] w-full">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="h-full w-full"
          >
            <SwiperSlide className="w-full">
              <img
                className="h-full w-full object-cover"
                src="/assets/images/story/1.svg"
                alt="story1"
              />
              <div className="absolute top-[200px] left-[100px] font-['Cafe24SsurroundAir'] text-xl">
                โ๋ง๋์ ๋ฐ๊ฐ์,
                <br />
                ๋๋ ํํผ๋ผ๊ณ ํด.โ
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="/assets/images/story/2.svg"
                alt="story2"
              />
              <div className="absolute top-[10px] left-[50px] font-['Cafe24SsurroundAir'] text-xl">
                โ์์ฆ ์ง๊ตฌ์ธ๋ค์ ํ๋ณต ์ง์๊ฐ <br />
                ๋๋ฌด ๋ฎ์ ๊ฒ ๊ฐ์.
                <br />
                ๊ทธ๋์ ๋ด๊ฐ ๋ญ๊ฐ๋ฅผ ํ๋ ๋ฐ๋ชํ์ด!โ
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="/assets/images/story/3.svg"
                alt="story3"
              />
              <div className="absolute top-[280px] left-[50px] w-80 font-['Cafe24SsurroundAir'] text-xl">
                โ๋ฐ๋ก ํ์ ๋ฉ์ผ ๋จธ์ ์ด์ผ. <br />
                ๋๋ฅผ ์ฌ๋ํ๋ ์น๊ตฌ๋ค์ด ํธ์ง๋ฅผ ๋ฃ์ด์ฃผ๋ฉด, ๋ฏธ๋์ ๋ค๊ฒ ์ ๋ฌ๋๋จ๋ค.
                <br />
                <br />
                ์ ๋ง ์ฌ๋์ค๋ฌ์ด ๊ธฐ๊ณ์ง? ๊ด์ฐฎ๋ค๋ฉด ํ๋ฒ ์จ๋ณด์ง ์์๋?โ
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="/assets/images/story/4.svg"
                alt="story4"
              />
              <div className="absolute top-[340px] left-[50px] font-['Cafe24SsurroundAir'] text-xl">
                โ์ด ๋งํฌ๋ฅผ ์น๊ตฌ๋ค์๊ฒ ์ ๋ฌํ๋ฉด,
                <br />
                ์น๊ตฌ๋ค์ด ๋ค๊ฒ ํธ์ง๋ฅผ ์ธ ์ ์์ด!โ
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="/assets/images/story/5.svg"
                alt="story5"
              />
              <div className="absolute top-[00px] left-[50px] font-['Cafe24SsurroundAir'] text-xl">
                โ์ฌ์ค ์ด ๊ธฐ๊ณ์ ๊ฐ์ฅ ์ค๋ ๋ ์ ์
                <br />
                ์ธ์  ๋์ฐฉํ ์ง ๋ชจ๋ฅธ๋ค๋๊ฑฐ์ง! <br />
                ์๊ณ ์๋ค๊ฐ ๊ฐ์๊ธฐ ๋ฐ์๋ณด๋ ํธ์ง๊ฐ <br />
                ์ผ๋ง๋ ํ์ด ๋๋์ง!โ
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="/assets/images/story/6.svg"
                alt="story6"
              />
              <div className="absolute top-[10px] left-[30px] font-['Cafe24SsurroundAir'] text-xl">
                โํ์๋จธ์ ์ธ๋ฐ ๋๋ค์ด๋ผ๋ ์ค๋ฅ ์๋๋๊ณ ?
                <br />
                ์ํํ...
                <br />
                ๊ทธ๋๋ ๊ฑฑ์ ๋ง!
                <br />
                ๋ฆ์ด๋ ํ ๋ฌ ์์๋ ๊ฐ ํ๋๊น!โ
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mx-8">
          <Button type="primary">์ฐ์ฒดํต ๋งํฌ ๋ง๋ค๊ธฐ</Button>
        </div>
      </Basic>
    </Main>
  );
};

export default Story;
