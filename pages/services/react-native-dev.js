import React from 'react'
import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import { jsIcon, reactIcon, reduxIcon } from '@/Helpers/icon';

const Wrap = styled.div`
    & .banner{
        background: url('/images/reactnbg.jpg');width:100%;min-height: 600px;display: flex;align-items: center;position: relative;background-size: cover;background-position: center center
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

const reactativedev = () => {
    const datanew = [
        { id: 1, title: "React Native Consulting Services", desc: "On the off chance that you need to know anything about React Native innovation, don't hesitate to get in touch with us and specialists are prepared to support you.", },
        { id: 2, title: "Relocation and Upgradation Services", desc: "On the off chance that you need to move your CMS from another platform to React Native or overhaul the current adaptation of React Native, we are prepared to support you.", },
        { id: 3, title: "Custom React Native Development", desc: "Our long stretches of space ability encourages us in giving secure, versatile, stuffed and portable inviting React Native CMS solutions.", },
        { id: 4, title: "Backing and Maintenance", desc: "Notwithstanding the React Native development administrations, we are additionally capable in giving nonstop React Native support and upkeep to our regarded customers.", }
    ];
    const techData = [
        {id:1,name:"JavaScript",icon:jsIcon},
        {id:2,name:"React",icon:reactIcon},
        {id:3,name:"Redux",icon:reduxIcon},
    ]
      
    const breadcrumbs = [
        { name: "React Native Development", path: "/services/react-native-dev"},
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
                                    <h4>If You Have A Dream Of A Successful App, Then Look No Further Than React Native</h4>
                                    <p>
                                        React Native is a framework that was introduced by Facebook to reinforce and enhance their mobile app's development. It has gained a new height of popularity not only among the start-up companies but also the big players in the industry are using and vouching for it. Some of the most popular apps that are presently making use of the React Native are Instagram, Bloomberg, Skype, Facebook Messenger, SoundCloud Pulse, Uber, and Salesforce, to name a few.
                                    </p>
                                    <div className="img-wrap">
                                        <img className="wrapimagework" src="/images/reactn_img.jpg" alt="Develop A Unique iOS Application Of Your Vision "/>
                                    </div>
                                    <h4>React Native Apps - The Best Cross Platform App Development</h4>
                                    <p>
                                        We align innovative technology with your business objectives to help you embrace new opportunities. We build apps that are based on latest trends, giving you the game-changer advantages.
                                    </p>
                                    <p>
                                        React Native makes mobile apps development workflow more resilient, be it live reloading or hot reloading, which in turn, empowers the developer to perform the most sought after modifications to the source code of the app without necessitating recomposing of it. It is lightning-fast and considerably expedites the overall software development process. Apps can be integrated more rapidly on both Android and iOS without compromising in performance or UX.
                                    </p>
                                    <p>
                                        Building mobile app through React Native application development can save you few hundred dollars. The application is flawless and bug-prone. Although the code is hard to learn, you don’t need to stress on the code and let us do the job for you. You can expect the app in quick time as it prevents the bugs.
                                    </p>
                                    <p>
                                        Our React Native app developer can do high-performance, functional applications quickly and easily for you. If our skilled developers are developing your app, then a big difference will be seen in terms of graphics rendering and the speed of the app. Whether you hire React Native Programmers or React Native Developers in India, we keep it in PRAXINFO. With the help of our accomplished fast developers, you can apply new features to your app or expand existing ones. Stay in touch with our team to learn more about our affordable price plans for React Native app development.
                                    </p>
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
                                        <li><Link href="/services/ios-dev">iOS Development</Link></li>
                                        <li><Link href="/services/android-dev">Android Development</Link></li>
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

export default reactativedev