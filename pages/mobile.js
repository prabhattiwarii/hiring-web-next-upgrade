import Layout from '@/Components/layout/Layout';
import React from 'react';
import styled from 'styled-components';

const data = [
  { id: 1, title: "Develop A Unique iOS Application Of Your Vision ", description: 'C-J Tech has made its mark as the best iPhone application development company to cater incredible iOS application development services.. .', image: " ./images/ios.jpg", main: " Empowering Your Business With iOS App Development At C-J Tech Technology  ", para: " The iPhone has gained a huge limelight since its rumors & official launch for redefining the complete mobile technology. Cj has made its mark as the best iPhone application development company to cater incredible iOS application development services. The feature-rich iPhone apps can make this smart piece more extraordinary in performance and usage. With our enviable experience in custom iPhone apps development services, we are ready to accept any feasible challenge to prove our development skills. We firmly get involved within your (client) iPhone app development project right from the initial phase till we come out of fully featured app development meeting exactly to your specifications.Our iPhone app developers and program managers are highly proficient to get mixed with the client ideas to shape it into the live applications, which result in to the sheer success.It’s not just about knowledge required for successful iPhone application development services, but our technical team evaluates each prospect of apps from market and business vision.Every day we promise ourselves to put a super-bright service satisfaction smile on our clients. Hey! Why don’t you give us a knock today?  " }
];

const datanew = [
  { id: 1, title: "Custom iOS App Development", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", },
  { id: 2, title: "iOS App Upgrade", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", },
  { id: 3, title: "iOS App Testing/Portability", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", },
  { id: 4, title: "Irresistible Features", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", }
];


const maindata = [
  {
    id: 1,
    title: "Photoshop",
    main:
      <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
        <g>
          <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
          <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
          <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
          <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="100" height="98.4252" />
          </clipPath>
        </defs>
      </svg>
  },

  {
    id: 2, title: " Illustrator", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
      <g>
        <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
        <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
        <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
        <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="100" height="98.4252" />
        </clipPath>
      </defs>
    </svg>
  },
  {
    id: 3, title: " Figma", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
      <g>
        <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
        <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
        <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
        <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="100" height="98.4252" />
        </clipPath>
      </defs>
    </svg>
  },
  {
    id: 4, title: " XD", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
      <g>
        <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
        <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
        <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
        <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="100" height="98.4252" />
        </clipPath>
      </defs>
    </svg>
  },
  {
    id: 2, title: " Illustrator", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
      <g>
        <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
        <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
        <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
        <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="100" height="98.4252" />
        </clipPath>
      </defs>
    </svg>
  },
  {
    id: 3, title: " Figma", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
      <g>
        <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
        <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
        <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
        <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="100" height="98.4252" />
        </clipPath>
      </defs>
    </svg>
  },
  {
    id: 4, title: " XD", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
      <g>
        <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
        <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
        <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
        <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="100" height="98.4252" />
        </clipPath>
      </defs>
    </svg>
  }
];

const Wrap = styled.div` display: flex; flex-direction:row;  align-items:center;  justify-content:center;  

`;

const AndroidSection = styled.div`flex: 1;padding:10px;  display: flex; flex-direction:column; row-gap:10px; align-items:center; justify-content:center; width:100%;padding-right:20px;margin-right:20px;
  & .wire{  background-color:#F8F8F8;  position: relative; display:block; font-weight: 600; padding: 10px 5px;border-radius: 4px; color: #294762; font-size: 18px;}
 & .wrapbox{display:flex; flex-direction:column; row-gap:100px; align-items:center; justify-content:center;}
 & .wrapmainwire{border:2px solid #E4E4E4;display:flex; flex-direction:column; row-gap:30px; padding:75px;}
 & .white{color:white;font-size:24px;}
 & .wrapbackbox{ display: flex;flex-direction: column;row-gap: 54px;background-color: #0168CA;padding: 100px;align-items: center;justify-content: center;font-weight: 700;}
`;


const Main = styled.div`
& .wrapimage { background-image: url('/images/iosbg.jpg'); width: 100%;display: flex;left: 20px; background-size: cover;min-height: 550px;    color: #fff;font-size: 60px;padding-top: 10px;left:0px;}
& .wrapimage{ display:flex;   padding-left: 40px;align-items: center;}

`

const OtherSection = styled.div`
 flex: 1;  width:100%; margin-top:40px; padding-left:50px;margin-bottom:20px;
& .wrapmain1{font-size:24px;font-weight: 700; color:#294762;}
& .wrapmain12{padding:20px; font-size:24px;font-weight:600; color:#294762}
& .wrapmain11{color:#6C8BA7;padding:20px;}
& .wrapmain13{color:#6C8BA7}
& .mainwrapdetail{padding:20px 0px;
& .wrapmain{    display: flex;flex-direction: column;align-items: center; justify-content: center;}
}
& .mainwrapboth{display:flex;padding:20px; flex-direction:row; column-gap:20px;  display: grid;grid-template-columns: repeat(4, 1fr);}
`;

const WrapMain = styled.div`
& .mainwrapnew{display:flex; display: grid;grid-template-columns: repeat(2, 1fr);
& .mainwrap{    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #CAE5FF;}
}
`


const mobile = () => {
  return (
    <Layout>
      <Main>
        <div className='wrapimage'>IOS Development</div>
      </Main>

      <Wrap>

        <OtherSection>

          <div className='mainwrapimage'>

            <div className='mainwrapleftright'>
              <div className='wrapmainleft'>

                <div className='mainwrapdetail'>
                  {data.map((item) => (
                    <div key={item.id}>
                      <div className='wrapmain'>
                      <div className='wrapmain1'>{item.title}</div>
                      <div className='wrapmain11'>{item.description}</div>
                      </div>
                      <img className='wrapimagework' src={item.image} alt={item.title}  />

                      <div className='wrapmain12'>{item.main}</div>
                      <div className='wrapmain13'>{item.para}</div>
                    </div>
                  ))}
                </div>

                <div className='mainwrapdetail'>
                  <div className='wrapmain12'>We Hold Expertise in the Following Platforms</div>
                  <div className='mainwrapboth'>
                    {maindata.map((item) => (
                      <div className='mainwrap' key={item.id}>
                        <div className='wrapmain11'>{item.main}</div>
                        <div className='wrapmain1'>{item.title}</div>

                      </div>

                    ))}
                  </div>
                </div>
              </div>
            </div>



            <WrapMain>

              <div className='mainwrapnew'>
                
                {datanew.map((item) => (
                  <div className='mainwrap' key={item.id}>
                    <div className='wrapmain1'>{item.title}</div>
                    <div className='wrapmain11'>{item.main}</div>
               

                  </div>

                ))}
              </div>
            </WrapMain>
          </div>


        </OtherSection>

  <AndroidSection>

    <div className='wrapbox'>

            <div className='wrapmainwire'>
              <div className='wire'>Wireframe & Prototype</div>
              <div className='wire'>Mobile & Web App Design</div>
              <div className='wire'>Graphics Design</div>
            </div>

            <div className='wrapbackbox'>
              <div className='white'>Have Any Project</div>
              <div className='white'>or Work together</div>
              <div className='white'>Lets Discuss <br/> Support@cjtech.in</div>
            </div>

          </div>
        </AndroidSection>

      </Wrap>

    </Layout>
  );
};

export default mobile;