import Layout from '@/Components/layout/Layout';
import React from 'react';
import styled from 'styled-components';

const data = [
  { id: 1, title: "Develop A Unique iOS Application Of Your Vision ", description: 'C-J Tech has made its mark as the best iPhone application development company to cater incredible iOS application development services.. .', image: " ./images/about_1.png", main: " 13 Years Of Essential Trust ", para: "  Technology established in 2014 with its software development talent to make a mark in the domain of IT services. We took initiative in 2018 and started offering web development services. Over the years, we have developed numerous websites, web applications, mobile applications along with digital marketing services for small and large businesses across industries and sectors.  " }

];

const datanew = [
  { id: 1, title: " 13 Years Of Essential Trust ", description: ' New Idea For Success To Help Your Business. .', image: " ./images/Fetures.png", main: "New Idea For Success To Help Your Business ", para: " The iPhone has gained a huge limelight since its rumors & official launch for redefining the complete mobile technology. Weapplinse has made its mark as the best iPhone application development company to cater incredible iOS application development services. The feature-rich iPhone apps can make this smart piece more extraordinary in performance and usage. With our enviable experience in custom iPhone apps development services, we are ready to accept any feasible challenge to prove our development skills. We firmly get involved within your (client) iPhone app development project right from the initial phase till we come out of fully featured app development meeting exactly to your specifications.Our iPhone app developers and program managers are highly proficient to get mixed with the client ideas to shape it into the live applications, which result in to the sheer success.It’s not just about knowledge required f  " }

];

const datanew1 = [
  { id: 1, title: " Year 2024", titlemain: "New Team ",main2:"Year 2014", main: "One company Team", description: ' New Team Rented a new office and hired 100 people who have different talents, education qualifications, and backgrounds. .', image: " ./images/Fetures.png", main1: "New Idea For Success To Help Your BusinessPandemic And WFHRemote working made our team stronger and more productive. We have successfully completed all our projects that were undertaken before the pandemic ", para: " Year 2024  " },
]


const Wrap = styled.div` display: flex; flex-direction:row;  align-items:center;  justify-content:center;  

`;
const Wrap1 = styled.div` display:flex; flex-direction:row;  align-items:center;  justify-content:center;  

`;
const Wrap3 = styled.div` display:flex; flex-direction:row;  align-items:center;  justify-content:center;  
& .mainwrapimage1{display: flex; align-items: center; justify-content: center;flex-direction: column;}
& .bluemainwrapimage1{font-size: 0.875rem;color: #1589F1; font-weight: 700; letter-spacing: 1px; margin-bottom: 10px;}
& .bluemainwrapimage2{ font-size: 1.875rem;color:black; font-weight: 700; letter-spacing: 1px; margin-bottom: 1px;}

`;

const Wrap2 = styled.div`display:flex; flex-direction:row;  align-items:center;  justify-content:center; column-gap:40px; 
& .mainwrapimage1{display:flex;flex-direction:column;align-items:center;}
`;

const AndroidSection = styled.div`flex: 1;padding:10px;  display: flex; flex-direction:column; row-gap:10px; align-items:center; justify-content:center; width:100%;padding-right:20px;margin-right:20px;
  & .wire{  background-color:#F8F8F8;  position: relative; display:block; font-weight: 600; padding: 10px 5px;border-radius: 4px; color: #294762; font-size: 18px;}
 & .wrapbox{display:flex; flex-direction:column; row-gap:100px; align-items:center; justify-content:center;
& .wrapmainright{display:flex;}
& .wrapmain14{font-size:19px;}
}
 & .wrapmainwire{border:2px solid #E4E4E4;display:flex; flex-direction:column; row-gap:30px; padding:75px;}
 & .white{color:white;font-size:24px;}
 & .wrapbackbox{ display: flex;flex-direction: column;row-gap: 54px;background-color: #0168CA;padding: 30px;align-items: center;justify-content: center;font-weight: 700;}
 & .mainwrapdetail{  
  & .wrapmain112{color: #6C8BA7;
    display: flex;
    justify-content:left; padding-top:50px;}
  & .wrapmain1{font-size:22px;}
 & .wrapmain13{ font-size:15px; padding:20px 0px 0px;  margin-top: 0;margin-bottom: 1rem; color: #6C8BA7;}}
 & .wrapmainright{color:#294762;font-weight:500;
& .mainwrap1{display:flex; flex-direction:column;row-gap:15px;}
& .mainwrap2{display:flex; flex-direction:column;row-gap:15px;}
& .wrapmain14{ font-weight: 600; font-size: 22px;}

}
`;


const Main = styled.div`
& .wrapimage { background-image: url('/images/aboutt.jpg'); width: 100%;display: flex;left: 20px; background-size: cover;min-height: 550px;    color: #fff;font-size: 60px;padding-top: 10px;left:0px;}
& .wrapimage{ display:flex;   padding-left: 40px;align-items: center;}

`

const OtherSection = styled.div` 
 flex: 1;  width:100%; margin-top:40px; padding-left:50px;margin-bottom:20px;
& .wrapmain1{font-size:24px;font-weight: 700; color:#294762;}
& .wrapmain12{font-size:24px;font-weight:600; color:#294762}
& .wrapmain11{color:#6C8BA7;padding:20px;}
& .wrapmain13{color:#6C8BA7;display:flex;justify-content:right;}
& .mainwrapdetailnew{ padding:20px 0px;display:flex;  
& .wrapmain14{font-size:24px;}
}
& .mainwrapdetailnew1{padding:20px;
 
& .wrapmain14{font-size:24px}
}
& .mainwrapboth{display:flex;padding:20px; flex-direction:row; column-gap:20px;  display: grid;grid-template-columns: repeat(4, 1fr);}
`;

const WrapMain = styled.div`
& .mainwrapnew{display:flex; display: grid;grid-template-columns: repeat(2, 1fr);
& .mainwrap{    display: flex;flex-direction: column;align-items: center;justify-content: center;text-align: center; border: 1px solid #CAE5FF;}
}
`


const company = () => {
  return (
    <Layout>
      <Main>
        <div className='wrapimage'>About Us</div>
      </Main>

      <Wrap>

        <OtherSection>
          <div className='mainwrapimage'>

            <div className='mainwrapleftright'>
              <div className='wrapmainleft'>

                <div className='mainwrapdetail'>
                  {data.map((item) => (
                    <div key={item.id}>

                      <img className='wrapimagework' src={item.image} alt={item.title} style={{ width: "", height: '' }} />

                    </div>
                  ))}
                </div>

                <div className='mainwrapdetail'>

                </div>
              </div>
            </div>
            <WrapMain>

            </WrapMain>
          </div>
        </OtherSection>
        <AndroidSection>
          <div className='wrapbox'>
            <div className='mainwrapdeta'>
              {data.map((item) => (
                <div key={item.id}>

                  <div className='wrapmain14'>{item.main}</div>
                  <div className='wrapmain13'>{item.para}</div>
                  {/* <div className='wrapmain13'>{item.main1}</div> */}
                </div>
              ))}
            </div>
            <div className='wrapmainright'>

              <div className='mainwrap1'>
                <div>Flexible work timing and Environment.</div>
                <div>Skilled Developers Team..</div>
                <div>No salary cut on half leave.</div>
                <div>Career Growth Opportunity.</div>

              </div>
              <div className='mainwrap2'>
                <div>Leave encashment..</div>
                <div>Events, Birthday and Festival Celebration.</div>
                <div>Supported Seniors.</div>
                <div>5days working.</div>

              </div>
            </div>



          </div>
        </AndroidSection>
      </Wrap>

      <Wrap3>
        <div className='mainwrapimage1'>
          <div className='bluemainwrapimage1'>Our Story</div>
          <div className='bluemainwrapimage2'>Years of Journey</div>
        </div>
      </Wrap3>



      <Wrap2>
        <OtherSection>


          <div className='mainwrapimage'>
            <div className='mainwrapleftright'>
              <div className='wrapmainleft'>

                <div className='mainwrapdetailnew'>
                  {datanew1.map((item) => (
                    <div key={item.id}>

                      <div className='wrapmain13'>{item.title}</div>

                     
                        <div className='wrapmain14'>{item.titlemain}</div>

                        <div className='wrapmain15'>{item.description}</div>
                   
                      <div className='wrapmain'>{item.main1}</div>
                    </div>
                  ))}
                </div>

              
              </div>
            </div>
            <WrapMain>
            </WrapMain>
          </div>
        </OtherSection>


        <AndroidSection>
          <div className='wrapbox'>
            <div className='mainwrapdetail'>
              {datanew1.map((item) => (
                <div key={item.id}>
                  {/* <div className='wrapmain12'>{item.title}</div> */}
                  <div className='wrapmain1'>{item.main}</div>
                  <div className='wrapmain11'>{item.description}</div>
                  <div className='wrapmain112'>{item.main2}</div>
                </div>
              ))}
            </div>
          </div>
        </AndroidSection>

      </Wrap2>
      <Wrap1>
        <OtherSection>

          <div className='mainwrapimage'>

            <div className='mainwrapleftright'>
              <div className='wrapmainleft'>

                <div className='mainwrapdetail'>
                  {datanew.map((item) => (
                    <div key={item.id}>

                      <div className='wrapmain12'>{item.title}</div>
                      <div className='wrapmain11'>{item.main}</div>
                      <div className='wrapmain11'>{item.description}</div>
                    </div>
                  ))}
                </div>

                <div className='mainwrapdetail'>

                </div>
              </div>
            </div>
            <WrapMain>
            </WrapMain>
          </div>
        </OtherSection>
        <AndroidSection>
          <div className='wrapbox'>
            <div className='mainwrapdetail'>
              {datanew.map((item) => (
                <div key={item.id}>

                  <img className='wrapimagework' src={item.image} alt={item.title} style={{ width: "", height: '' }} />

                </div>
              ))}
            </div>
          </div>
        </AndroidSection>

      </Wrap1>

    </Layout>
  );
};

export default company;