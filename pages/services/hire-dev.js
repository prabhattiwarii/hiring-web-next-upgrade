import React, { useState } from 'react';
import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import styled from 'styled-components';
import { awsIcon, cobjective, figmaIcon, firebaseIcon, flutterIcon, htmlIcon, illustratorIcon, invisionStudioIcon, javaIcon, kotlinIcon, lavrvelIcon, mongoIcon, mysqlIcon, nodeIcon, phoneIcon, photoshopIcon, postsqlIcon, reactIcon, sketchIcon, swiftIcon, xdIcon, zeplinIcon } from '@/Helpers/icon';

const Wrap = styled.div`
    & .banner{
        background: url('/images/hddbg.jpg');width:100%;min-height: 600px;display: flex;align-items: center;position: relative;background-size: cover;background-position: center center
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
                & .sub-head{font-weight: 500;font-size: 17px;line-height: 26px;margin:0 0 5px;color: #294762;}
                & p{margin-top: 0;margin-bottom: 1rem;text-align: justify;color: #6C8BA7;line-height:26px;}
                & .conversioninquire{
                    align-items: center;color: #1589f1;column-gap: 10px;display: flex;flex-direction: row;font-size: 18px;font-weight: 600;cursor: pointer;
                    & span{align-items: center;background-color: #6495ed;border-radius: 50%;color: #fff;cursor: pointer;display: flex;font-size: 30px;height: 50px;justify-content: center;width: 50px;}
                }
            }
            & .image-wrap{
                flex:1;padding:0 0 0 10px;margin:auto;
                & img{border-style: none;height: auto;max-width: 100%;vertical-align: middle;}
            }
            & .image-wrap-1{
                flex:1;padding:0 0 0 10px;margin:auto;
                & .img-1{position: relative;display: block;margin-right: 100px;}
                & .img-2{position: relative;margin-top: -94px;z-index: 2;text-align: right;padding-left: 100px;}
                & img{border-style: none;height: auto;max-width: 100%;vertical-align: middle;}
            }
        }
    }
    & .why-choose-wrap{
        background: #F8FBFF;padding:60px 0;
        & .container{
            max-width:1280px;width:100%;margin:0 auto;box-sizing:border-box;padding:0 20px;
            & .head-sction{
                margin-bottom:50px;text-align:center;
                & h6{background-color: #EBF5FF;padding: 10px 30px;display: inline-block;border-radius: 10px;font-size: 18px;font-weight: 600;color: #1589F1;margin:0 0 15px;}
                & h2{
                    font-size: 30px;color: #294762;font-weight: 300;margin:0 0 15px;
                    & span{font-weight:700;}
                }
            }
            & .info-wrap{
                display:flex;flex-wrap:wrap;justify-content:center;gap:40px 20px;
                & .info{
                    width:calc(33.33% - 14px);
                    & .inner{
                        display:flex;gap:10px;align-items:center;background-color: #fff;padding: 20px;border-radius: 5px;box-shadow: 0px 12px 42px rgb(20 140 240 / 0%), 11px 6px 25px rgb(18 162 241 / 15%);border-top: 5px solid #148ef0;transition: all 0.3s ease-out 0s;min-height: 105px;
                        & .icon{
                            flex: 0 0 60px;
                            & img{transition: all 1s ease;border-style: none;height: auto;max-width: 100%;vertical-align: middle;}
                        }
                        & .text{font-weight: 500;font-size: 15px;line-height: 22px;text-align: left;color: #6C8BA7;align-self: center}
                        &:hover{
                            & .icon{
                                & img{transform: rotateY(360deg);}
                            }
                        }
                    }
                }
            }
        }
    }
    & .process-wrap{
        padding:60px 0;
        & .container{
            max-width:1280px;width:100%;margin:0 auto;box-sizing:border-box;padding:0 20px;
            & .head-sction{
                text-align:center;
                & h2{
                    font-size: 30px;color: #294762;font-weight: 300;margin:0 0 20px;
                    & span{font-weight:700;}
                }
            }
            & .info-wrap{
                display:flex;flex-wrap:wrap;justify-content:center;gap:20px;
                & .info{
                    width:calc(20% - 16px);
                    & .inner{
                        display:flex;flex-direction:column;align-items:center;background-color: #f4f8fc;padding: 20px;min-height: 105px;
                        & .icon{
                            width: 100px;height: 100px;position: relative;transition: .5s;border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;margin-left: auto;margin-right: auto;margin-bottom: 25px;
                            justify-content: center;align-items: center;display:flex;
                            & img{transition: all 1s ease;border-style: none;height: auto;max-width: 100%;vertical-align: middle;}
                            &.ig1{background: #60C9FE;}
                            &.ig2{background: #969AFF;}
                            &.ig3{background: #FF8296;}
                            &.ig4{background: #FFA164;}
                            &.ig5{background: #67D6BC;}
                        }
                        & .text{font-weight: 600;font-size: 16px;line-height: 22px;color: #294762;margin-bottom: 0.5rem;}
                        &:hover{
                            background-color: #fff;box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.1), 0 30px 60px -30px rgba(107, 124, 147, 0.15);
                            & .icon{border-radius: 50%;}
                        }
                    }
                }
            }
        }
    }
    & .dev-wrap{
        padding:60px 0;
        & .container{
            max-width:1280px;width:100%;margin:0 auto;box-sizing:border-box;padding:0 20px;
            & .head-sction{
                text-align:center;padding:0 0 30px;
                & h6{background-color: #EBF5FF;padding: 10px 30px;display: inline-block;border-radius: 10px;font-size: 18px;font-weight: 600;color: #1589F1;margin:0 0 15px;}
            }
            & .info-wrap{
                display:flex;flex-wrap:wrap;justify-content:center;gap:20px;
                & .info{
                    width:calc(25% - 15px);text-align: center;padding: 30px 10px;box-shadow: 0 10px 30px rgb(0 0 0 / 7%);margin-bottom: 30px;border: 1px solid transparent;transition: .5s;display: flex;align-items: center;flex-direction: column;
                    & .inner{
                        & .icon{
                            width: 91px;height: 91px;background: #F0F8FF;border-radius: 50%;display: flex;justify-content: center;align-items: center;margin:0 auto 15px;
                            & img{border-style: none;height: auto;max-width: 100%;vertical-align: middle;}
                        }
                        & .title{margin-bottom: 10px;font-size: 16px;font-weight: 600;color: #294762;}
                        & .text{font-size: 15px;color: #6C8BA7;line-height:26px;min-height: 150px;}
                        & .btn{background-image: linear-gradient(to right, #00549F, #0a87f7, #04befe, #3f86ed);box-shadow: 0 4px 15px 0 rgb(21 143 241 / 36%);cursor:pointer;border:none;width: 165px;
                            height: 45px;font-size: 16px;font-weight: 600;color: #fff;text-align: center;background-size: 300% 100%;border-radius: 10px;}
                    }
                }
            }
        }
    }
    & .tech-wrap{
        padding:60px 0;
        & .container{
            max-width:1280px;width:100%;margin:0 auto;box-sizing:border-box;padding:0 20px;
            & .head-sction{
                text-align:center;padding:0 0 30px;
                & h6{background-color: #EBF5FF;padding: 10px 30px;display: inline-block;border-radius: 10px;font-size: 18px;font-weight: 600;color: #1589F1;margin:0 0 15px;}
            }
            & .swap-section{
                display: flex;align-items: center;justify-content: center;margin:0 0 50px;flex-wrap: wrap;row-gap:10px;
                & .btn{
                    position: relative;border: none;text-decoration: none;border-radius: 0px !important;padding: 10px 0px;margin: 0 20px !important;outline: 0;line-height: normal;background: transparent;font-weight: 400;font-size: 20px;
                    color: #6C8BA7; cursor: pointer;
                    &:after{content: "";position: absolute;top: 40px;left: 0;height: 2px;width: 0;background: #294762;transition: width 0.5s ease-in-out;}
                    &.active{
                        color: #294762;border-color: #dee2e6 #dee2e6 #fff;
                        &:after{width: 100%;}
                    }
                    &:hover{
                        &:after{width: 100%;}
                    }
                }
            }
            & .support-wrap{
                display:flex;flex-wrap:wrap;row-gap:20px;column-gap:30px;justify-content: center;
                & .box{
                    text-align: -webkit-center;transition:.3s all;
                    &:hover{transform: translateY(-8px);}
                    & .icon{
                        width: 100px;height: 100px;margin: 0 0 15px;background: #F5F5F5;border-radius: 5px;display: flex;align-items: center;justify-content: center;
                    }
                    & .title{margin-bottom: 1rem;color: #6C8BA7;}
                }
            }
        }
    }
    @media(max-width: 1199px){
        & .banner{min-height: 470px;}
    }
    @media(max-width:991px){
        & .banner{min-height: 350px;}
        & .why-choose-wrap{
            & .container{
                & .info-wrap{
                    & .info{width:calc(50% - 10px);}
                }
            }
        }
        & .process-wrap{
            & .container{
                & .info-wrap{
                    & .info{width:calc(33.33% - 14px);}
                }
            }
        }
        & .dev-wrap{
            & .container{
                & .info-wrap{
                    & .info{width:calc(33.33% - 14px);}
                }
            }
        }
        & .tech-wrap{
            padding:40px 0;
            & .container{
                & .swap-section{
                    & .btn{
                        font-size:15px;
                        &:after{top:30px;}
                    }
                }
            }
        }
    }
    @media(max-width:767px){
        & .section-app-dev{
            padding:40px 0 0;
            & .container{
                flex-direction:column;
                & .content-wrap{
                    padding:0 !important;
                    & .conversioninquire{
                        & span{font-size:24px;height:40px;width:40px;}
                    }
                }
                & .image-wrap{padding:0;}
                & .image-wrap-1{padding:0;margin-bottom: 30px;}
            }
        }
        & .process-wrap{
            padding:40px 0;
            & .container{
                & .info-wrap{
                    & .info{width:calc(50% - 10px);}
                }
            }
        }
        & .dev-wrap{
            padding:40px 0;
            & .container{
                & .info-wrap{
                    & .info{width:calc(50% - 10px);}
                }
            }
        }
        & .tech-wrap{
            padding:40px 0;
            & .container{
                & .swap-section{
                    margin:0 0 30px;
                    & .btn{
                        font-size:15px;
                        &:after{top:30px;}
                    }
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
                & .img-wrap-1{
                    & .img-2{
                        & img{width: 220px}
                    }
                }
            }
        }
        & .why-choose-wrap{
            & .container{
                & .head-sction{
                    margin:0 0 30px;
                    & h2{font-size:22px;}
                }
                & .info-wrap{
                    gap:20px;
                    & .info{width:100%;}
                }
            }
        }
        & .process-wrap{
            & .container{
                & .head-sction{
                    margin:0 0 30px;
                    & h2{font-size:22px;}
                }
                & .info-wrap{
                    gap:20px;
                    & .info{width:100%;}
                }
            }
        }
        & .dev-wrap{
            & .container{
                & .head-sction{
                    margin:0;
                    & h2{font-size:22px;}
                }
                & .info-wrap{
                    gap:20px;
                    & .info{width:100%;}
                }
            }
        }
        
    }
`;

const hiredev = () => {
    const [showList, setShowList] = useState("mobile-technology");
    const breadcrumbs = [
        { name: "Hire Dedicated Developers", path: "/services/hire-dev"},
    ];
    const data = [
        {id:1,about:"Expert and skilled developer team for your project.",img:"/images/1.png"},
        {id:2,about:"A fully transparent development cycle.",img:"/images/img__2.png"},
        {id:3,about:"Using diverse communication channels for friendly client interaction..",img:"/images/homeimg_6.png"},
        {id:4,about:"Focus on Quality Driven Processes.",img:"/images/img__4.png"},
        {id:5,about:"On Time Project Competition.",img:"/images/img__5.png"}
    ]
    const processData = [
        {id:1,about:"Post Your Inquiry",img:"/images/process_1.png",cls:"ig1"},
        {id:2,about:"Share Required Skills",img:"/images/process_2.png",cls:"ig2"},
        {id:3,about:"Interview",img:"/images/process_3.png",cls:"ig3"},
        {id:4,about:"Engagement Terms",img:"/images/process_4.png",cls:"ig4"},
        {id:5,about:"Get Started",img:"/images/process_5.png",cls:"ig5"}
    ]
    const dev = [
        { id: 1, title: "Hire iOS App Developers", image: "/images/1.png", description: "Hire our iOS app developers to build high-performing iOS apps for your business." },
        { id: 2, title: "Hire Android App Developers", image: "/images/1.png", description: "Take a business to a new level by choosing Top Android App Development Company Designed and powered by Best app Developers." },
        { id: 3, title: "Hire React Native App Developers", image: "/images/job2.jpg", description: "Hire React Native developers at an economical price from our large pool of skilled professionals that leverage the ideal roadmap to business application success." },
        { id: 4, title: "Hire Swift App Developers", image: "/images/1.png", description: 'Need a better option for developing iOS apps? Connect with our Swift experts.' },
        { id: 5, title: "Hire Flutter App Developers", image: "/images/job1.jpg", description: "We have the best flutter team to help you experience the best app development." },
        { id: 6, title: "Hire Kotlin App Developers", image: "/images/1.png", description: "Our Kotlin developers are eligible in improving operational efficiencies and cost structures of businesses through most powerful mobile applications for Android native solution." },
        { id: 7, title: "Hire Laravel Developers", image: "/images/1.png", description: "Hire our experienced Laravel developers to create high-end web applications as per your requirement." },
        { id: 8, title: "Hire Node JS Developers", image: "/images/1.png", description: "Are you looking for hire top Node.js developers at affordable prices? At Weapplinse you can get dedicated Node.js developers." },
        { id: 9, title: "Hire React JS Developers", image: "/images/job2.jpg", description: "Coordinate talented and prepared ReactJS App Developers of Weapplinse Technology to use untouchable ReactJS improvement that benefits independent of your business size and area." },
        { id: 10, title: "Hire UI/UX Designer", image: "/images/1.png", description: "Hire Our proficient UI/UX Designer to Surge up your business to a Different Level With Exceptional Designs." },
    ];
    const tech=[
        {id:1,title:"Mobile Technology",slug:"mobile-technology",child:[
            {id:20,name:"Objective-C",icon:cobjective,},
            {id:21,name:"Swift",icon:swiftIcon},
            {id:22,name:"Flutter",icon:flutterIcon},
            {id:23,name:"React Native",icon:reactIcon},
            {id:24,name:"Kotlin",icon:kotlinIcon},
            {id:25,name:"Java",icon:javaIcon},
        ]},
        {id:2,title:"Web Technology",slug:"web-technology",child:[
            {id:26,name:"PHP",icon:phoneIcon},
            {id:27,name:"Laravel",icon:lavrvelIcon},
            {id:28,name:"Node.Js",icon:nodeIcon},
            {id:29,name:"React.JS",icon:reactIcon},
            {id:30,name:"HTML 5",icon:htmlIcon},
        ]},
        {id:3,title:"Cloud",slug:"cloud",child:[
            {id:31,name:"Amazon AWS",icon:awsIcon},
            {id:32,name:"Google Cloud",icon:lavrvelIcon},
            {id:33,name:"Digital Ocean",icon:nodeIcon},
            {id:34,name:"Firebase",icon:firebaseIcon}
        ]},
        {id:4,title:"Database",slug:"databse",child:[
            {id:51,name:"MySQl",icon:mysqlIcon},
            {id:52,name:"PostgreSQL",icon:postsqlIcon},
            {id:53,name:"Mongo DB",icon:mongoIcon}
        ]},
        {id:5,title:"UI/UX Design",slug:"ui/ux-design",child:[
            {id:35,name:"Photoshop",icon:photoshopIcon},
            {id:36,name:"Illustrator",icon:illustratorIcon},
            {id:37,name:"Figma",icon:figmaIcon},
            {id:38,name:"XD",icon:xdIcon},
            {id:39,name:"Sketch",icon:sketchIcon},
            {id:40,name:"Invision Studio",icon:invisionStudioIcon},
            {id:41,name:"Zeplin",icon:zeplinIcon}
        ]}
    ]
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
                                <h6>Hire Dedicated Developers</h6>
                                <h2>Hire Dedicated Resources To Reach<span> New Business Heights</span></h2>
                            </div>
                            <h5 class="sub-head">Looking to perfect the balance between cost, time &amp; quality? </h5>
                            <p className='text'>Hire dedicated developers from Weapplinse will be the best option to develop your business website or applications. Being a leading enterprise, Weapplinse offers you tailored solutions. Hiring dedicated developers to manage the entire development cycle of your project. When you choose us, you get trust of a brand, Surat's top Dedicated Development team, 7+ years of experience, strict NDA terms & complete peace of mind.</p>
                        </div>
                        <div className="image-wrap">
                            <img src="/images/hdd_img1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="section-app-dev" style={{paddingTop:"0",marginBottom:"40px"}}>
                    <div className="container">
                        <div className="image-wrap-1" style={{padding:"0 10px 0 0"}}>
                            <div className="img-1">
                                <img src="/images/hdd_img2.jpg" alt="" />
                            </div>
                            <div className="img-2">
                                <img src="/images/hdd_img3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="content-wrap" style={{padding:"0 0 0 10px"}}>
                            <div className="head-sction">
                                <h2>Our Expert Developer Create an experience<span> that's is too hard to Forget.</span></h2>
                            </div>
                            <p className='text'>Finding developers may not be difficult, however, vetting them or having the assurance of product delivery is quite a challenge. But not anymore, at cj-tech, we have a dedicated Developers model of outsourcing.</p>
                            <p className='text'>cj-tech developers work dedicatedly with clients, report on their reporting tools and work as a part of the client’s team to attain success. All happens under reliability and trust that is ensured always by cj-tech under proper agreements and working procedure.Here you can hire an already formed team of expert developers who will harmonize with your team or existing process and work dedicatedly.</p>
                            <p className='text'>When you choose us, you get trust of a brand, Surat's top Dedicated Development team, 13+ years of experience. Here, cj-tech keeps the process as simple as possible and does not bog you down with any long term agreement. We house professionally trained developers that are proficient and experienced in providing end-to-end mobile and web solutions for startups as well as large-scale enterprises worldwide.</p>
                            <div className="conversioninquire" onClick={() => window.location="/contact"}><span>&gt;</span>Get In Touch</div>
                        </div>
                    </div>
                </div>
                <div className="why-choose-wrap">
                    <div className="container">
                        <div className="head-sction">
                            <h6>Why Choose Us</h6>
                            <h2>Cj Is your<span> Development Partner</span></h2>
                        </div>
                        <div className="info-wrap">
                            {data.map((item) => (
                                <div className="info" key={item.id}>
                                    <div className="inner">
                                        <div className="icon">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="text">{item.about}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="process-wrap">
                    <div className="container">
                        <div className="head-sction">
                            <h2>Hire Expert Developer<span> - A Simplistic & Flexible Process</span></h2>
                        </div>
                        <div className="info-wrap">
                            {processData.map((item) => (
                                <div className="info" key={item.id}>
                                    <div className="inner">
                                        <div className={`icon ${item.cls}`}>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="text">{item.about}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="dev-wrap">
                    <div className="container">
                        <div className="head-sction">
                            <h6>Highly Qualified and Dedicated Developers For Hire</h6>
                        </div>
                        <div className="info-wrap">
                            {dev.map((item) => (
                                <div className="info" key={item.id}>
                                    <div className="inner">
                                        <div className="icon">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="title">{item.title}</div>
                                        <div className="text">{item.description}</div>
                                        <button className="btn" onClick={() => window.location ="/contact"} type='button'>Hire Developer</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="tech-wrap">
                    <div className="container">
                        <div className="head-sction">
                            <h6>We Hold Expertise in the Following Platforms</h6>
                        </div>
                        <div className="swap-section">
                            {tech.map((category) => (
                                <button key={category.id} onClick={() => setShowList(category.slug)} 
                                className={`btn ${showList === category.slug ? 'active': ''}`}>
                                    {category.title}
                                </button>
                            ))}
                        </div>
                        <div className="support-wrap">
                            {showList && tech.find((category) => category.slug === showList)?.child.map((item) => (
                                <div className="box" key={item.id}>
                                <div className="icon">{item.icon({width:50,height:50})}</div>
                                <div className="title">{item.name}</div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </Wrap>
        </Layout>
    );
};

export default hiredev;