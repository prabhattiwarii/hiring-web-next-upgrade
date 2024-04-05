import React from 'react'
import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import { dratIcon, fluttersdkIcon} from '@/Helpers/icon';

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

const flutterdev = () => {
    const datanew = [
        { id: 1, title: "Single Coding Based", desc: "Probably the best part with Flutter application development services is that the application developers no longer need to deliver multiple codes for particular platforms.", },
        { id: 2, title: "Make your Own Widget", desc: "Flutter is intended to let you adjust its current devices and make another one. Its device library accompanies a scope of alternatives and can be modified easily.", },
        { id: 3, title: "Simple to Adopt", desc: "Google has planned Flutter to guarantee conveying some simplicity to developers and make the development procedure quicker and simpler. The SDK can be easily gotten a handle on by amateur developers too.", },
        { id: 4, title: "Cupertino & Design", desc: "Flutter SDK gives an expressive User Interface, outwardly appealing cross-platform native like applications with device library work of material plan for android application and cupertino for iOS application.", }
    ];
    const techData = [
        {id:1,name:"Flutter SDK",icon:fluttersdkIcon},
        {id:2,name:"Dart",icon:dratIcon},
    ]
      
    const breadcrumbs = [
        { name: "Flutter Development", path: "/services/flutter-dev"},
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
                                    <h4>Flutter App Development Company - An Expressive, Flexible and Revolutionary Framework to Develop The Next-Gen Apps</h4>
                                    <p>
                                        Flutter is an open-source technology powered by Google to create native Android and iOS apps with a single codebase. It is a comprehensive and full-fledged software development kit that contains a rendering engine, readymade widgets, testing, and integration APIs, command-line tools, and everything a developer needs to develop a cross-platform application. Flutter offers crucial advantages to businesses as its development process is quick and the cost of production is low. Besides this, the flutter apps are visually appealing and UI is smoothly animated which ensures user engagement. Moreover, it combines all the features of the native performance like navigation, scrolling, icons, and fonts to allow the businesses to work with an existing part of the application and there is no requirement to have a full application in the Flutter.
                                    </p>
                                    <div className="img-wrap">
                                        <img className="wrapimagework" src="/images/flutter_img.jpg" alt="Develop A Unique iOS Application Of Your Vision "/>
                                    </div>
                                    <h4>We deliver best-in-class highly secure, sustainable scalable custom flutter development service.</h4>
                                    <p>
                                        Flutter Apps are cost-effective where a single code base is used to develop applications for both iOS and Android; thereby eliminates the need for having separate iOS and Android developers.
                                    </p>
                                    <p>
                                        With Flutter mobile app, deployment of new features, and maintenance is now much easier and comfortable, as a single code base is required to deploy the application.
                                    </p>
                                    <p>
                                        The advanced UX/UI helps businesses to engage their customers and retain them in the long term. Also, the app looks the same on older versions, so there are no additional costs for supporting the older devices.
                                    </p>
                                    <p>
                                        The architecture of Flutter apps allows it to work faster and smoother without hanging and cutting when one scrolls them.
                                    </p>
                                    <p>
                                        Its cross-platform functionality caters to Android and iOS users thereby enhance the reach of your business.
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
                                        <li><Link href="/services/react-native-dev">React Native Development</Link></li>
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

export default flutterdev