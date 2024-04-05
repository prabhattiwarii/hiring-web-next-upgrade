import React from 'react'
import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import { cobjective, swiftIcon, xcodeIcon } from '@/Helpers/icon';

const Wrap = styled.div`
    & .banner{
        background: url('/images/iosbg.jpg');width:100%;min-height: 600px;display: flex;align-items: center;position: relative;background-size: cover;background-position: center center
    } 
    & .dev-section{
        max-width:1280px;margin:0 auto;padding:50px 20px;text-align:center;
        & .section-wrapper{
            display:flex;
            & .left-section{
                flex:0 0 66.66%;padding:0 50px 0 0;
                & .service-detail{
                    & .inner-box{
                        text-align:left;
                        & h4{color: #294762;font-weight: 600;margin:0 0 20px;font-size:25px;}
                        & p{margin-top: 0;margin-bottom: 1rem;color: #6C8BA7;line-height:25px;}
                        & .img-wrap{
                            position: relative;margin-top: 30px;margin-bottom: 35px;overflow: hidden;text-align: center;
                            & img{border-style: none;height: auto;max-width: 100%;vertical-align: middle;}
                        }
                        & .sevice-wrap{
                            display:flex;flex-wrap:wrap;margin-bottom:30px;
                            & .service{
                                width:50%;position: relative;border: 1px solid #CAE5FF;
                                & .inner{
                                    position: relative;padding: 35px 45px;
                                    & h5{
                                        &::before{position: absolute;content:">";left: 40px;top: 28px;line-height: 35px;text-align: center;color: #ffffff;background-color: #0057FC;font-family: "fontawesome";width: 35px;height: 35px;font-size: 25px;border-radius: 50px;}
                                        padding-left: 45px;font-weight: 600;color: #294762;margin:0 0 10px;font-size:20px;
                                    }
                                    & .text{position: relative;font-size: 16px;color: #6C8BA7;margin-top: 15px;line-height:25px;}
                                }
                            }
                        }
                        & .service-box{
                            display:flex;flex-wrap:wrap;row-gap:20px;column-gap:20px;
                            & .box{
                                width:calc(25% - 38px);text-align: -webkit-center;transition:.3s all;
                                &:hover{transform: translateY(-8px);}
                                & .icon{
                                    width: 100px;height: 100px;margin: 0 0 15px;background: #F5F5F5;border-radius: 5px;display: flex;align-items: center;justify-content: center;
                                }
                                & .title{margin-bottom: 1rem;color: #6C8BA7;}
                            }
                        }
                    }
                }
            }
            & .right-section{
                flex:0 0 33.33%;padding:0 12px;
                & .sidebar{
                    position: sticky;top: 0;z-index: 1020;
                    & .widget-content{
                        position: relative;padding: 30px 30px;border: 2px solid #E4E4E4;margin:0 0 45px;
                        & .service-list{
                            margin:0;padding:0;list-style:none;
                            & li{
                                position: relative;margin-bottom: 15px;
                                & a{position: relative;display: block;font-weight: 600;padding: 18px 25px;border-radius: 4px;color: #294762;font-size: 18px;background-color: #F8F8F8;transition: all 300ms ease;}
                            }
                        }
                    }
                    & .sidebar-widget{
                        & .widget-content{
                            margin:0px;position: relative;text-align: center;padding: 45px 45px 45px;background-color: #0168CA;border:none;
                            & .title{
                                font-weight: 400;font-size: 18px;color: #fff;margin-bottom: 25px;
                                & span{display: block;font-weight: 600;font-size: 26px;}
                            }
                            & .contact-btn{position: relative;padding: 14px 30px;border-radius: 5px;font-weight: 600;color: #fff;font-size: 20px;text-transform: uppercase;display: inline-block;margin-bottom: 25px;border: 2px solid #fff;}
                            & .phone{
                                font-size: 18px;color: #fff;
                                & a{font-weight: 600;color: #fff;word-break: break-all;}
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
        & .dev-section{
            padding:50px 20px;
            & .section-wrapper{
                flex-direction:column;row-gap:20px;
                & .left-section{padding:0;}
                & .right-section{padding:0;}
            }
        }
    }
    @media(max-width:767px){
        & .dev-section{
            & .section-wrapper{
                & .left-section{
                    & .service-detail{
                        & .inner-box{
                            & .sevice-wrap{
                                & .service{width:100%;}
                            }
                            & .service-box{
                                & .box{width:calc(33.33% - 38px);}
                            }
                        }
                    }
                }
            }
        }
    }
    @media(max-width:575px){
        & .dev-section{
            & .section-wrapper{
                & .left-section{
                    & .service-detail{
                        & .inner-box{
                            & h4{font-size:22px;}
                            & .sevice-wrap{
                                & .service{
                                    width:100%;
                                    & .inner{
                                        padding:30px;
                                        & h5{
                                            margin:0 0 20px;
                                            &::before{left:32px;top: 25px;width: 30px;height: 30px;font-size:17px;}
                                        }
                                    }
                                }
                            }
                            & .service-box{
                                & .box{width:calc(50% - 38px);}
                            }
                        }
                    }
                }
                & .right-section{
                    & .sidebar{
                        & .sidebar-widget{
                            & .widget-content{
                                padding:30px;
                                & .contact-btn{padding: 14px 30px;color: #fff;font-size:16px;}
                            }
                        }
                    }
                }
            }
        }
    }
`

const iosdev = () => {
    const datanew = [
        { id: 1, title: "Custom iOS App Development", desc: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", },
        { id: 2, title: "iOS App Upgrade", desc: "With full scale information on the iOS biological system, we can give a problem free iOS App Upgrade service. We overhaul your application to the most recent iOS stage and ensure that the application is perfect with the freshest Apple gadgets.", },
        { id: 3, title: "iOS App Testing/Portability", desc: "Our accomplished iOS developers can port your iOS application to various Apple gadgets. Utilizing the best versatility approach, they guarantee the smooth and brisk convenience of your application.", },
        { id: 4, title: "Irresistible Features", desc: "No matter is it 3D Touch or iBeacon, we present irresistible features of iOS for getting affordable and the best iPhone Apps development solutions.", }
    ];
    const techData = [
        {id:1,name:"Objective-C",icon:cobjective},
        {id:2,name:"Swift",icon:swiftIcon},
        {id:3,name:"Xcode",icon:xcodeIcon},
    ]
      
    const breadcrumbs = [
        { name: "ios Development", path: "/services/ios-dev"},
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
                                    <h4>Develop A Unique iOS Application Of Your Vision</h4>
                                    <p>
                                        Cj has made its mark as the best iPhone application development company to cater incredible iOS application development services.</p>
                                    <div className="img-wrap">
                                        <img className="wrapimagework" src="/images/ios_img.jpg" alt="Develop A Unique iOS Application Of Your Vision "/>
                                    </div>
                                    <h4>Empowering Your Business With iOS App Development At Cj Technology</h4>
                                    <p>
                                        The iPhone has gained a huge limelight since its rumors & official launch for redefining the complete mobile technology. Cj has made its mark as the best iPhone application development company to cater incredible iOS application development services. The feature-rich iPhone apps can make this smart piece more extraordinary in performance and usage. With our enviable experience in custom iPhone apps development services, we are ready to accept any feasible challenge to prove our development skills. We firmly get involved within your (client) iPhone app development project right from the initial phase till we come out of fully featured app development meeting exactly to your specifications.                                    </p>
                                    <p>
                                    Our iPhone app developers and program managers are highly proficient to get mixed with the client ideas to shape it into the live applications, which result in to the sheer success.</p>
                                    <p>
                                    It’s not just about knowledge required for successful iPhone application development services, but our technical team evaluates each prospect of apps from market and business vision.
                                    </p>
                                    <p>Every day we promise ourselves to put a super-bright service satisfaction smile on our clients. Hey! Why don’t you give us a knock today?</p>
                                    <div className="sevice-wrap">
                                        {datanew.map((item) => (
                                            <div className="service" key={item.id}>
                                                <div className="inner">
                                                    <h5>{item.title}</h5>
                                                    <div className="text">{item.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <h4>We Hold Expertise in the Following Platforms</h4>
                                    <div className="service-box">
                                        {techData.map((item) => (
                                            <div className="box" key={item.id}>
                                                <div className="icon">{item.icon({width:50,height:50})}</div>
                                                <div className="title">{item.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <aside className='sidebar'>
                                <div className="widget-content">
                                    <ul className="service-list">
                                        <li><Link href="/services/android-dev">Android Development</Link></li>
                                        <li><Link href="/services/react-native-dev">React Native Development</Link></li>
                                        <li><Link href="/services/flutter-dev">Flutter Development</Link></li>
                                    </ul>
                                </div>
                                <div className="sidebar-widget">
                                    <div className="widget-content" style={{backgroundImage:"url(/images/pattern.png)"}}>
                                        <div className="title">
                                            Have Any Project <span>or work together ?</span>
                                        </div>
                                        <a href="/contact" className="contact-btn">Contact us</a>
                                        <div className="phone">
                                            Let's Discuss : <a href="">@cj-technology</a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </Wrap>
        </Layout>
      );
}

export default iosdev