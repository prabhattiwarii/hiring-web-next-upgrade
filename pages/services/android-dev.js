import React from 'react'
import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import { androidIcon, firebaseIcon, javaIcon, kotlinIcon, xmlIcon } from '@/Helpers/icon';
import styled from 'styled-components';

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
            }
        }
    }
`

const androiddev = () => {
    const datanew = [
        { id: 1, title: "High ROI With Lower Costs", desc: "One of the key points of interest of Android application development is the simple accessibility of the Android SDK. The development groups can utilize the material plan from these SDKs to assemble intuitive applications.", },
        { id: 2, title: "Focus on Multiple Platforms", desc: "The utilization of Java as a programming language makes it simple to port the application to different working frameworks like Symbian and Ubuntu. Along these lines, organizations can focus on different platforms with Android application development.", },
        { id: 3, title: "Improved Security", desc: "Android P presented a few extra and in-manufactured security features. It will help with the security against malware and infections. Hence, wellbeing and dependability are outstanding advantages of android application development.", },
        { id: 4, title: "Customization", desc: "Android is an open source platform and offers most extreme customization features to development groups. It is the reason android applications are a well known decision.", }
    ];
    const techData = [
        {id:1,name:"Java",icon:javaIcon},
        {id:2,name:"XML",icon:xmlIcon},
        {id:3,name:"Android Studio",icon:androidIcon},
        {id:4,name:"Firebase",icon:firebaseIcon},
        {id:5,name:"Kotlin",icon:kotlinIcon},
    ]
      
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
                                        Cj is popular mobile app development company from India specializes in building professional grade Android applications for its global clients while covering all the segment of Android-based development to offer one-stop shop solutions.
                                    </p>
                                    <div className="img-wrap">
                                        <img class="wrapimagework" src="/images/and_img.jpg" alt="Develop A Unique iOS Application Of Your Vision "/>
                                    </div>
                                    <h4>Most Reliable Android App Development Company</h4>
                                    <p>
                                    The Google Android is a well-known OS platform, possessed by various major smartphones available today. Due to its huge popularity, there is a great hike for Android-based applications in the Google Play/ market. And hence inviting the needs for custom-made Android app development!
                                    </p>
                                    <p>
                                    Cj is popular mobile app development company from India specializes in building professional grade Android applications for its global clients while covering all the segment of Android-based development to offer one-stop-shop solutions. With our professional excellence, we deliver state-of-the-art Android applications meeting business specifications and client satisfaction. We have gained an immense experience in manifold areas of Android application development such as Android enterprise solution, Android multimedia, business, android game development, travel, utility, Wi-Fi/ GPS development, app maintenance and upgrade, custom Android apps etc.
                                    </p>
                                    <p>
                                    Our development team holds great expertise in Android SDK, Java, XML, C++, native development tools, Eclipse IDE, framework APIs, Android app tools plug-ins etc. to develop the latest technology and futuristic apps possible. We have extensive experience in Android app development, which makes us capable to bring feasible solution and materialize your ideas into fully functional application. Our aim is not just to provide the feasible solution but to work dedicatedly right from the scratch. Our fervent attitude, ceaseless dedication, and strong business methodology prove us to be exceptional.
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
                                <div class="widget-content">
                                    <ul class="service-list">
                                        <li><a href="#">iOS Development</a></li>
                                        <li><a href="#">React Native Development</a></li>
                                        <li><a href="#">Flutter Development</a></li>
                                    </ul>
                                </div>
                                <div class="sidebar-widget">
                                    <div class="widget-content" style={{backgroundImage:"url(/images/pattern.png)"}}>
                                        <div class="title">
                                            Have Any Project <span>or work together ?</span>
                                        </div>
                                        <a href="#" class="contact-btn">Contact us</a>
                                        <div class="phone">
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

export default androiddev