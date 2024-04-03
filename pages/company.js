import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div` 
    & .banner{
        background:url(/images/aboutt.jpg);width:100%;min-height: 600px;display: flex;align-items: center;position: relative;background-size: cover;background-position: center center
    }
    & .about-section{
        max-width:1280px;margin:0 auto;padding:50px 20px;
        & .about-wrap{
            display:flex;align-items:center;padding:0 0 50px;
            & .img-wrap{
                flex: 0 0 auto;width: 50%;
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
            & .content-wrap{
                flex: 0 0 auto;width: 50%;
                & .heading{font-size: 38px;line-height: 46px;margin-bottom:8px;}
                & .text{text-align: justify;margin-top: 0;margin-bottom:16px;color: #6C8BA7;line-height: 25px;}
                & .info-wrap{
                    display:flex;
                    & ul{
                        padding-left: 17px;
                        & li{padding: 8px 5px 8px 1px;color: #294762;font-weight: 500;}
                    }
                }
            }
        }
        & .history-wrap{
            & .head-section{
                margin-bottom: 80px;text-align:center;
                & .title{
                    position: relative;z-index: 1;
                    & .sub-title{font-size:14px;color: #1589F1;font-weight: 700;letter-spacing: 1px;margin-bottom: 10px;}
                    & .main-title{font-size:36px;font-weight: 600;margin: 0px;}
                    & .watermark-title{top: -69px;display: block;font-size:200px;color: #f8f8f8;font-weight: 700;position: absolute;left: 0;width: 100%;height: auto;line-height: 1;z-index: -1;}
                }
            }
            & .struggle-wrap{
                flex: 0 0 auto;width: 83.33333333%;margin:0 auto;
                & .timeline-wrap{
                    padding: 0 65px;position: relative;
                    & ul{
                        padding:0;margin:0;
                    }
                    & .timeline-list{
                        &:before{position: absolute;content: "";left: 50%;transform: translateX(-50%);top: 0;background: #1589F1;width: 1px;height: 100%;}
                        & .time-item{
                            padding-bottom: 50px;overflow: hidden;
                            & .year{
                                width: 50%;
                            }
                            &:nth-child(odd) .year{float: left;text-align: right;padding-right: 43px;}
                            &:nth-child(2n) .year{float:right;text-align:left;padding-left: 43px;}
                            & .dot{
                                position: absolute;left: 50%;margin-left: -7.5px;
                                &:after{content: "";background: linear-gradient(38.23deg, #10ADF0 17.61%, #1686F1 82.65%);border: 2px solid #fff;top: 0px;left: -3px;height:16px;width:16px;box-shadow: 0 0px 20px rgb(22 138 241 / 57%);border-radius: 100%;position:absolute;}
                                &:before{border-radius: 100%;content: "";position: absolute;top: 0;left: 0;height: 100%;width: 100%;}
                            }
                            & .info{
                                width: 50%;
                                & .title{font-size: 22px;font-weight: 600;color: #294762;line-height: 1.2;margin:0 0 5px;}
                                & p{color: #6C8BA7;line-height:26px;}
                            }
                            &:nth-child(odd) .info{float:right;text-align:left;padding-left: 43px;}
                            &:last-child{padding-bottom:0px;}
                        }
                    }
                }
            }
        }
        & .vision-wrap{
            display:flex;align-items:center;padding:50px 0 0;
            & .img-wrap{
                flex: 0 0 auto;width: 50%;
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
            & .content-wrap{
                flex: 0 0 auto;width: 50%;
                & .head-wrap{
                    margin-bottom: 24px;
                    & .sub-title{padding: 10px 30px;display: inline-block;border-radius: 10px;font-size: 18px;font-weight: 600;color: #1589F1;margin:0 0 15px;line-height: 1.2;background-color: #EBF5FF;}
                    & .about-title{
                        font-size: 35px;font-weight: 300;color: #294762;line-height: 1.2;margin:0 0 0.5rem;
                        & .about-text{font-weight: 700;}
                    }
                }
                & .accordion-wrap{
                    max-width: 475px;
                    & .card{
                        border: none;border-radius: 0;margin-bottom: 20px;background: transparent;position: relative;display: flex;flex-direction: column;min-width: 0;word-wrap: break-word;
                        .card-header {
                            padding: 0;border: none;display: flex;border-radius: 0;font-size: 20px;background: transparent;
                            &.collapsed{
                                text-decoration: none;color: #294762;font-weight: 600;
                                & .toggle-btn {
                                    transform: rotate(0deg);height: 18px;width: 18px;flex: none;margin-top: 2px;transition: 0.5s;margin-right: 15px;position: relative;
                                    &:before,
                                    &:after {content: '';position: absolute;width: 2px;height: 100%;background: #1589f1;transition: 0.5s;left: 50%;top: 50%;transform: translate(-50%, -50%);}
                                    &:before {transform: translate(-50%, -50%) rotate(90deg);}
                                    &:after {transform: translate(-50%, -50%);}
                                }
                                & .open {
                                    transform: rotate(0deg);height: 18px;width: 18px;flex: none;margin-top: 2px;transition: 0.5s;margin-right: 15px;position: relative;
                                    &:before,
                                    &:after {content: '';position: absolute;width: 2px;height: 100%;background: #1589f1;transition: 0.5s;left: 50%;top: 50%;transform: translate(-50%, -50%);}
                                    &:before {transform: translate(-50%, -50%) rotate(90deg);}
                                    &:after {transform: translate(-50%, -50%) rotate(90deg);}
                                }
                            }
                        }
                        & .collapse:not(.show) {
                            display: none;
                        }
                        & .card-body{
                            padding: 10px 0 0 30px;
                            & p{margin: 0;text-align: justify;font-size: 16px;color: #6C8BA7;line-height:26px;}
                            & ul{
                                margin:0;padding:0;
                                & li{color: #6C8BA7;list-style: circle;margin-left: 25px;font-size: 16px;line-height:26px;}
                            }
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 1199px){
        & .banner{min-height: 470px;}
    }
    @media(max-width:991px){
        & .banner{min-height: 350px;}
        & .about-section{
            & .about-wrap{
                flex-direction: column;max-width:900px;
                & .img-wrap{
                    padding-bottom: 30px;text-align: center;width:100%;
                }
                & .content-wrap{
                    width:100%;max-width:800px;
                    & .heading{margin-bottom:0px;}
                    & .text{text-align: justify;margin-top: 0;margin-bottom:16px;color: #6C8BA7;line-height: 25px;}
                    & .info-wrap{
                        justify-content:space-between;
                        & ul{margin:0;}
                    }
                }
            }
            & .history-wrap{
                & .head-section{
                    margin-bottom:50px;
                    & .title{
                        & .watermark-title{font-size:150px;transform: translateZ(0px) translateY(34.99742px) !important;}
                    }
                }
                & .struggle-wrap{
                    flex: 0 0 auto;width: 83.33333333%;margin:0 auto;
                    & .timeline-wrap{
                        padding: 0px;padding-right: 10px;padding-left:30px;
                        & ul{padding:0;margin:0;}
                        & .timeline-list{
                            &:nth-child(odd) .year{padding-right:0px;}
                            &:before{left:2%;}
                            & .time-item{
                                padding-bottom: 50px;overflow: hidden;
                                & .year{width: 100%;margin:0 0 3px;}
                                &:nth-child(odd) .year{text-align:left;}
                                &:nth-child(2n) .year{float:right;text-align:left;padding-left:0px;}
                                & .dot{
                                    left:0;
                                    &:after{top:2px;left:10px;}
                                }
                                & .info{
                                    width:100%;
                                    & p{margin:0;}
                                }
                                &:nth-child(odd) .info{float:right;text-align:left;padding-left:0px;}
                            }
                        }
                    }
                }
            }
            & .vision-wrap{
                flex-direction:column;
                & .img-wrap{flex: 0 0 auto;width:100%;max-width:900px;text-align:center;}
                & .content-wrap{
                    flex: 0 0 auto;width:100%;max-width:900px;
                }
            }
        }
    }
    @media(max-width:767px){
        & .history-wrap{
            & .head-section{
                margin-bottom:50px;
                & .title{
                    & .watermark-title{display:none !important;}
                }
            }
        }
    }
    @media(max-width:575px){
        & .about-section{
            & .about-wrap{
                & .content-wrap{
                    & .heading{font-size: 25px;font-weight: 600;line-height: 46px;}
                    & .info-wrap{flex-direction: column;}
                }
            }
            & .history-wrap{
                & .head-section{margin-bottom:30px;}
                & .struggle-wrap{
                    width:100%;
                    & .timeline-wrap{
                        padding: 0px;padding-right: 10px;padding-left:30px;
                        & .timeline-list{
                            &:nth-child(odd) .year{padding-right:0px;}
                            &:before{left:2%;}
                            & .time-item{
                                padding-bottom: 30px;
                                & .dot{
                                    left:-4px;
                                    &:after{top:2px;left:10px;}
                                }
                                & .info{
                                    width:100%;
                                    & .title{font-size: 20px;}
                                    & p{margin:0;}
                                }
                            }
                        }
                    }
                }
            }
            & .vision-wrap{
                & .content-wrap{
                    & .head-wrap{
                        & .sub-title{padding: 10px 15px;margin: 0 0 10px;}
                        & .about-title{font-size: 26px;}
                    }
                }
            }
        }
    }
`;

const company = () => {
    const timelineData = [
        { id: 1, year:"Year 2014", title:"Two People Company",desc:"Young and enterprising professionals who have been part of the mobile application started the company in a room with no more than a couple of projects."},
        { id: 2, year:"Year 2016", title:"New Team",desc:"Rented a new office and hired 10 people who have different talents, education qualifications, and backgrounds."},
        { id: 3, year:"Year 2018", title:"Exploring New Horizons",desc:"Year by year the company was showing signs of being a superstar in the Mobile App Industry. Weapplinse Technology was gaining the full trust of the clients. Company started work on many new projects, technologies which helped them to explore new horizons"},
        { id: 4, year:"Year 2020", title:"Pandemic And WFH",desc:"Remote working made our team stronger and more productive. We have successfully completed all our projects that were undertaken before the pandemic."},
        { id: 5, year:"Year 2022", title:"Celebrated 8th Anniversary with New Office and New Milestones",desc:"We celebrated our 8th anniversary of successfully completing 1000+ Web, IOT, software, and mobile app projects."},
    ]

    const breadcrumbs = [
        { name: "About Us", path: "about-us"},
    ];
    const [openAccordion, setOpenAccordion] = useState(null);
    const toggleAccordion = (e,accordionId) => {
        e.preventDefault();
        setOpenAccordion(openAccordion === accordionId ? null : accordionId);
    };

    return (
        <Layout>
            <Wrap>
                <div className="banner">
                    <Breadcrumb breadcrumbs={breadcrumbs}/>
                </div>
                <div className="about-section">
                    <div className='about-wrap'>
                        <div className="img-wrap">
                            <img src="./images/about_1.png" alt="about-image" />
                        </div>
                        <div className="content-wrap">
                            <div className="heading">13 Years Of Essential Trust </div>
                            <p className="text">
                                Technology established in 2014 with its software development talent to make a mark in the domain of IT services. We took initiative in 2018 and started offering web development services. 
                                Over the years, we have developed numerous websites, web applications, mobile applications along with digital marketing services 
                                for small and large businesses across industries and sectors.
                            </p>
                            <div className="info-wrap">
                                <ul>
                                    <li>Flexible work timing and Environment.</li>
                                    <li>Skilled Developers Team..</li>
                                    <li>No salary cut on half leave.</li>
                                    <li>Career Growth Opportunity.</li>
                                </ul>
                                <ul>
                                    <li>Leave encashment..</li>
                                    <li>Events, Birthday and Festival Celebration.</li>
                                    <li>Supported Seniors.</li>
                                    <li>5days working.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="history-wrap">
                        <div className="head-section">
                            <div className="title">
                                <h3 className="sub-title">OUR STORY</h3>
                                <h4 className="main-title"><em>Years of Journey</em></h4>
                                <span className="watermark-title" data-scrollax="properties: { translateY: '-250px' }" style={{ transform: 'translateZ(0px) translateY(9.99742px)' }}>HISTORY</span>
                            </div>
                        </div>
                        <div className="struggle-wrap">
                            <div className="timeline-wrap">
                                <ul className='timeline-list'>
                                    {timelineData.map((time) => (
                                        <li key={time.id} className='time-item'>
                                            <div className="year">{time.year}</div>
                                            <div className="dot"></div>
                                            <div className="info">
                                                <div className="title">{time.title}</div>
                                                <p>{time.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="vision-wrap">
                        <div className="content-wrap">
                            <div className="head-wrap">
                                <h6 className="sub-title">Our Foundational Concepts</h6>
                                <h2 className="about-title">New Idea For <span className="about-text">Success</span> To Help Your Business</h2>
                            </div>
                            <div className="accordion-wrap" id="accordion-wrap">
                                <div className="card">
                                    <a className={`card-header ${openAccordion === 'heading1' ? '' : 'collapsed'}`} id="heading1" href="#" data-toggle="collapse" data-target="#collapse1" aria-expanded={openAccordion === 'heading1' ? 'true' : 'false'} aria-controls="collapse1" onClick={(e) => toggleAccordion(e, 'heading1')}>
                                        <span className={`${openAccordion === 'heading1' ? 'open' : 'toggle-btn'}`}></span> 
                                        Vision
                                    </a>
                                    <div id="collapse1" className={`collapse ${openAccordion === 'heading1' ? 'show' : ''}`} data-parent="#accordion-wrap">
                                        <div className="card-body">
                                            <p>
                                                To become a globally respected organization by providing best-of-breed digital business solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <a className={`card-header ${openAccordion === 'heading2' ? '' : 'collapsed'}`} id="heading2" href="#" data-toggle="collapse" data-target="#collapse2" aria-expanded={openAccordion === 'heading2' ? 'true' : 'false'} aria-controls="collapse2" onClick={(e) => toggleAccordion(e, 'heading2')}>
                                        <span className={`${openAccordion === 'heading2' ? 'open' : 'toggle-btn'}`}></span> 
                                        Mission
                                    </a>
                                    <div id="collapse2" className={`collapse ${openAccordion === 'heading2' ? 'show' : ''}`} data-parent="#accordion-wrap">
                                        <div className="card-body">
                                            <p style={{paddingBottom:"15px"}}>
                                                Believe in fairness, honesty and humbleness towards our customers, employees and society.
                                            </p>
                                            <p>
                                                Develop easy to use but advanced software solutions by using most innovative technologies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <a className={`card-header ${openAccordion === 'heading3' ? '' : 'collapsed'}`} id="heading3" href="#" data-toggle="collapse" data-target="#collapse3" aria-expanded={openAccordion === 'heading3' ? 'true' : 'false'} aria-controls="collapse3" onClick={(e) => toggleAccordion(e, 'heading3')}>
                                        <span className={`${openAccordion === 'heading3' ? 'open' : 'toggle-btn '}`}></span> 
                                        Core Values
                                    </a>
                                    <div id="collapse3" className={`collapse ${openAccordion === 'heading3' ? 'show' : ''}`} data-parent="#accordion-wrap">
                                        <div className="card-body">
                                            <ul>
                                                <li>Respect</li>
                                                <li>Quality</li>
                                                <li>Belief</li>
                                                <li>Satisfaction</li>
                                                <li>Relationship</li>
                                                <li>Reliability</li>
                                                <li>Service</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="img-wrap">
                            <img src="./images/Fetures.png" alt="about-image" />
                        </div>
                    </div>
                </div>
            </Wrap>
        </Layout>
    );
};

export default company;