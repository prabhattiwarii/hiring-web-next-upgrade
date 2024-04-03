import React from 'react';
import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import styled from 'styled-components';

const Wrap = styled.div`
    & .banner{
        background: url('/images/amsbg.jpg');width:100%;min-height: 600px;display: flex;align-items: center;position: relative;background-size: cover;background-position: center center
    } 
    & .section-app-dev{
        padding:60px 0 0;
        & .container{
            max-width:1280px;width:100%;margin:0 auto;box-sizing:border-box;display:flex;padding:0 20px;
            & .content-wrap{
                flex:1;padding:0 10px 0 0;
                & .head-sction{
                    margin-bottom: 1.5rem !important;
                    & h6{background-color: #EBF5FF;padding: 10px 30px;display: inline-block;border-radius: 10px;font-size: 18px;font-weight: 600;color: #1589F1;margin:0 0 15px;}
                    & h2{
                        font-size: 30px;color: #294762;font-weight: 300;margin:0 0 15px;
                        & span{font-weight:700;}
                    }
                }
                & p{margin-top: 0;margin-bottom: 1rem;text-align: justify;color: #6C8BA7;line-height:26px;}
            }
            & .image-wrap{
                flex:1;padding:0 0 0 10px;margin:auto;
                & img{border-style: none;height: auto;max-width: 100%;vertical-align: middle;animation: move3 3s infinite;}
                @-webkit-keyframes move3 {
                    0% {transform: translate(0, 0);}
                    20% {transform: translate(5px, 0);}
                    40% {transform: translate(5px, 5px);}
                    65% {transform: translate(0, 5px);}
                    65% {transform: translate(5px, 0);}
                    100% {transform: translate(0, 0);}
                } 
            }
        }
    }
    & .support-section{
        padding:60px 20px;max-width:1280px;margin:0 auto;text-align: center;
        & .title{position: relative;color: #1589F1;display: inline-block;margin-bottom: 30px;background-color: #EBF5FF;padding: 10px 30px;border-radius: 10px;font-style: normal;font-weight: 500;font-size: 25px;line-height: 38px;}
        & .support-wrap{
            display:flex;flex-wrap:wrap;gap:20px;
            & .tech{
                width:calc(25% - 15px);
                & .inner{
                    padding: 50px 10px 43px;transition: all linear 0.3s;height: 255px;
                    &:hover{box-shadow: 0px 0px 20px #DDE7FC;}
                    & .icon{    
                        display: inline-block;border-radius: 50%;height: 90px;width: 90px;position: relative;
                        & img{height:50px;margin-top: 19px;vertical-align: middle;}
                    }
                    & .name{font-weight: 600;font-size: 20px;line-height: 33px;color: #294762;padding-top: 30px;margin:0 0 5px;}
                    &.firstbg{background: linear-gradient(180deg, #FFFFFF 50%, #FFFFFF 50%, #DDFFF7 100%);}
                    &.secndbg{background: linear-gradient(180deg, #FFFFFF 50%, #FFFFFF 50%, #E0F1FF 100%);}
                    &.thirdbg{background: linear-gradient(180deg, #FFFFFF 50%, #FFFFFF 50%, #FFDBE3 100%);}
                    &.fourthbg{background: linear-gradient(180deg, #FFFFFF 50%, #FFFFFF 50%, #E7E1FF 100%);}
                    &.fifthbg{background: linear-gradient(180deg, #FFFFFF 50%, #FFFFFF 50%, #DDFFF7 100%);}
                    &.sixbg{background: linear-gradient(180deg, #FFFFFF 50%, #FFFFFF 50%, #FFEFE4 100%);}
                    &.sevenbg{background: linear-gradient(180deg, #FFFFFF 50%, #FFFFFF 50%, #D2E0FC 100%);}
                }
            }
        }
    }
    @media(max-width: 1199px){
        & .banner{min-height: 470px;}
    }
    @media(max-width:991px){
        & .banner{min-height: 350px;}
        & .support-section{
            & .support-wrap{
                & .tech{
                    width:calc(33.33% - 15px);
                }
            }
        }
    }
    @media(max-width:767px){
        & .section-app-dev{
            padding:40px 0 0;
            & .container{
                flex-direction:column;
                & .content-wrap{padding:0;}
                & .img-wrap{padding:0;}
            }
        }
        & .support-section{
            padding:40px 20px;
            & .title{font-size: 22px;line-height: 28px;}
            & .support-wrap{
                & .tech{
                    width:calc(50% - 15px);
                }
            }
        }
    }
    @media(max-width:576px){
        & .section-app-dev{
            & .container{
                & .content-wrap{
                    & .head-sction{
                        & h2{
                            font-size:22px;
                        }
                    }
                }
            }
        }
        & .support-section{
            & .support-wrap{
                & .tech{
                    width:100%;
                }
            }
        }
    }
`;

const applicationdev = () => {
    const breadcrumbs = [
        { name: "Application Maintenance & Support", path: "/services/application-dev"},
    ];
    const data = [
        { id: 1, title: "Customization", image: "/images/s_icon1.png", bg:"linear-gradient(317.07deg, #FF5F4A 8.89%, #FF9E91 89.86%)",shadow:"0px 0px 20px rgba(255, 104, 84, 0.2",cls:"firstbg"},
        { id: 2, title: "Dedicated Developers", image: "/images/s_icon2.png",bg:"linear-gradient(317.07deg, #2799F6 8.89%, #76C1FF 89.86%)",shadow:"0px 0px 20px rgba(118, 193, 255, 0.2)",cls:"secndbg"},
        { id: 3, title: "Unlimited Bug Fixing", image: "/images/s_icon3.png",bg:"linear-gradient(317.07deg, #F2335B 8.89%, #FF718F 89.86%)",shadow:"0px 0px 20px rgba(255, 113, 143, 0.2",cls:"thirdbg"},
        { id: 4, title: "Resolving Issues on Demand", image: "/images/s_icon4.png",bg:"linear-gradient(317.07deg, #7759ED 8.89%, #AC97FF 89.86%)",shadow:"0px 0px 20px rgba(172, 151, 255, 0.2)",cls:"fourthbg"},
        { id: 5, title: "Remote Control & Support", image: "/images/s_icon5.png",bg:"linear-gradient(317.07deg, #1CD7AB 8.89%, #67D6BC 89.86%)",shadow:"0px 0px 20px rgba(103, 214, 188, 0.2)",cls:"fifthbg"},
        { id: 6, title: "Time / Volume of Support", image: "/images/s_icon6.png",bg:"linear-gradient(317.07deg, #F3721E 8.89%, #FFA56A 89.86%)",shadow:"0px 0px 20px rgba(255, 161, 100, 0.2)",cls:"sixbg"},
        { id: 7, title: "Theme Customization", image: "/images/s_icon7.png",bg:"linear-gradient(317.07deg, #528BFC 8.89%, #92B7FF 89.86%)",shadow:"0px 0px 20px rgba(128, 171, 255, 0.2)",cls:"sevenbg"}
    ];
    return (
        <Layout>
            <Wrap>
                <div className="banner">
                    <Breadcrumb breadcrumbs={breadcrumbs}/>
                </div>
                <div className="section-app-dev">
                    <div className="container">
                        <div className="content-wrap">
                            <div className="head-sction">
                                <h6>Support & Maintenance</h6>
                                <h2>Always beside you as a helping hand to <span>handle all the hazy situations</span></h2>
                            </div>
                            <p className='text'>We know, Customer retention is not something that often occurs purely by accident. Sometimes due to community modules or small bugs in Developing , end user gets trapped. In that kind of hazy situation, where an end user tries to find a supporting hand, which helps them to resist and come out of that. Our technical support staff can solve their problem on the spot and try to give them impetus.</p>
                            <p className='text'>After deployment of any Mobile Application and websites , the cycle doesn't end. Sometimes the end-user seeks frequent improvements in application to get more effective results from it, than before. We provide after sale services at a very affordable rate.</p>
                        </div>
                        <div className="image-wrap">
                            <img src="/images/ams_img1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="section-app-dev" style={{paddingTop:"0"}}>
                    <div className="container">
                        <div className="image-wrap" style={{padding:"0 10px 0 0"}}>
                            <img src="/images/ams_img2.png" alt="" />
                        </div>
                        <div className="content-wrap" style={{padding:"0 0 0 10px"}}>
                            <p className='text'>Finding developers may not be difficult, however, vetting them or having the assurance of product delivery is quite a challenge. But not anymore, at cj-tech, we have a dedicated Developers model of outsourcing.</p>
                            <p className='text'>cj-tech developers work dedicatedly with clients, report on their reporting tools and work as a part of the client’s team to attain success. All happens under reliability and trust that is ensured always by cj-tech under proper agreements and working procedure.Here you can hire an already formed team of expert developers who will harmonize with your team or existing process and work dedicatedly.</p>
                            <p className='text'>When you choose us, you get trust of a brand, Surat's top Dedicated Development team, 13+ years of experience. Here, cj-tech keeps the process as simple as possible and does not bog you down with any long term agreement. We house professionally trained developers that are proficient and experienced in providing end-to-end mobile and web solutions for startups as well as large-scale enterprises worldwide.</p>
                        </div>
                    </div>
                </div>
                <div className="support-section">
                    <div className="title">Our Support Methodology</div>
                    <div className="support-wrap">
                        {data.map((item) => (
                            <div className="tech" key={item.id}>
                                <div className={`inner ${item.cls}`}>
                                    <div className="icon" style={{background:item.bg,boxShadow:item.shadow}}>
                                        <img src={item.image} alt=""/>
                                    </div>
                                    <h4 className="name">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrap>
        </Layout>
    );
};

export default applicationdev;