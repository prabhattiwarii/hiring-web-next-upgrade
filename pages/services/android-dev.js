import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import React from 'react'
import styled from 'styled-components';
import andimg from "../../public/images/and_img.jpg"

const Wrap = styled.div`
    & .banner{
        background: url('/images/iosbg.jpg');width:100%;min-height: 600px;display: flex;align-items: center;position: relative;background-size: cover;background-position: center center
    } 
    & .dev-section{
        max-width:1280px;margin:0 auto;padding:50px 20px;text-align:center;
        & .section-wrapper{
            display:flex;
            & .left-section{
                flex:0 0 66.66%;
                & .service-detail{
                    & .inner-box{
                        text-align:left;
                        & h4{color: #294762;font-weight: 600;margin:0 0 20px;font-size:25px;}
                        & p{margin-top: 0;margin-bottom: 1rem;color: #6C8BA7;line-height:25px;}
                    }
                }
            }
            & .right-section{
                flex:0 0 33.33%;
            }
        }
    }

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
const androiddev = () => {
    const data = [
        { id: 1, title: "Develop A Unique iOS Application Of Your Vision ", description: 'C-J Tech has made its mark as the best iPhone application development company to cater incredible iOS application development services.. .', image: " ./images/and_img.jpg", main: " Empowering Your Business With iOS App Development At C-J Tech Technology  ", para: " The iPhone has gained a huge limelight since its rumors & official launch for redefining the complete mobile technology. Weapplinse has made its mark as the best iPhone application development company to cater incredible iOS application development services. The feature-rich iPhone apps can make this smart piece more extraordinary in performance and usage. With our enviable experience in custom iPhone apps development services, we are ready to accept any feasible challenge to prove our development skills. We firmly get involved within your (client) iPhone app development project right from the initial phase till we come out of fully featured app development meeting exactly to your specifications.Our iPhone app developers and program managers are highly proficient to get mixed with the client ideas to shape it into the live applications, which result in to the sheer success.It’s not just about knowledge required for successful iPhone application development services, but our technical team evaluates each prospect of apps from market and business vision.Every day we promise ourselves to put a super-bright service satisfaction smile on our clients. Hey! Why don’t you give us a knock today?  " }
    ];
    const datanew = [
        { id: 1, title: "Custom iOS App Development", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", },
        { id: 2, title: "iOS App Upgrade", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", },
        { id: 3, title: "iOS App Testing/Portability", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", },
        { id: 4, title: "Irresistible Features", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", }
    ];
      
    const breadcrumbs = [
        { name: "Android Development", path: "/services/android-dev"},
    ];
    return (
        <Layout>
          <Wrap>
            <div className="banner">
                <Breadcrumb breadcrumbs={breadcrumbs}/>
            </div>
              <div className='dev-section'>
                <div className="section-wrapper">
                    <div className='left-section'>
                    <div className="service-detail">
                        <div className="inner-box">
                            <h4>Unlock Your Business Potential With Highly - Customizable Android App Development Service Equipped With Innovative Approaches &amp; Solutions</h4>
                            <p>
                                Weapplinse is popular mobile app development company from India specializes in building professional grade Android applications for its global clients while covering all the segment of Android-based development to offer one-stop shop solutions.
                            </p>
                            <div className="img-wrap">
                            <img class="wrapimagework" src=" ./images/and_img.jpg" alt="Develop A Unique iOS Application Of Your Vision "/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="right-section"></div>
                </div>
              </div>
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
          </Wrap>
        </Layout>
      );
}

export default androiddev