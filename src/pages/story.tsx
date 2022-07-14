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
          description="📬 mail platform where letters arrive on random dates 'Poppymail'"
        />
      }
    >
      <Basic back menu title={'파피의 이야기'}>
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
                “만나서 반가워,
                <br />
                나는 파피라고해.”
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="/assets/images/story/2.svg"
                alt="story2"
              />
              <div className="absolute top-[10px] left-[50px] font-['Cafe24SsurroundAir'] text-xl">
                “요즘 지구인들의 행복 지수가 <br />
                너무 낮은 것 같아.
                <br />
                그래서 내가 뭔가를 하나 발명했어!”
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="/assets/images/story/3.svg"
                alt="story3"
              />
              <div className="absolute top-[280px] left-[50px] w-80 font-['Cafe24SsurroundAir'] text-xl">
                “바로 타임 메일 머신이야. <br />
                너를 사랑하는 친구들이 편지를 넣어주면, 미래의 네게 전달된단다.
                <br />
                <br />
                정말 사랑스러운 기계지? 괜찮다면 한번 써보지 않을래?”
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="/assets/images/story/4.svg"
                alt="story4"
              />
              <div className="absolute top-[340px] left-[50px] font-['Cafe24SsurroundAir'] text-xl">
                “이 링크를 친구들에게 전달하면,
                <br />
                친구들이 네게 편지를 쓸 수 있어!”
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="/assets/images/story/5.svg"
                alt="story5"
              />
              <div className="absolute top-[00px] left-[50px] font-['Cafe24SsurroundAir'] text-xl">
                “사실 이 기계의 가장 설레는 점은
                <br />
                언제 도착할지 모른다는거지! <br />
                잊고있다가 갑자기 받아보는 편지가 <br />
                얼마나 힘이 되는지!”
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="/assets/images/story/6.svg"
                alt="story6"
              />
              <div className="absolute top-[10px] left-[30px] font-['Cafe24SsurroundAir'] text-xl">
                “타임머신인데 랜덤이라니 오류 아니냐고?
                <br />
                아하하...
                <br />
                그래도 걱정마!
                <br />
                늦어도 한 달 안에는 갈 테니까!”
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mx-8">
          <Button type="primary">우체통 링크 만들기</Button>
        </div>
      </Basic>
    </Main>
  );
};

export default Story;
