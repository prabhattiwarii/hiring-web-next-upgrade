import React from 'react'
import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import styled from 'styled-components';
import { figmaIcon, illustratorIcon, invisionStudioIcon, photoshopIcon, sketchIcon, xdIcon, zeplinIcon } from '@/Helpers/icon';
import Link from 'next/link';

const Wrap = styled.div`
    & .banner{
        background: url('/images/webbg.jpg');width:100%;min-height: 600px;display: flex;align-items: center;position: relative;background-size: cover;background-position: center center
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

const mobileappdesign = () => {
    const breadcrumbs = [
        { name: "Mobile & Web App Design", path: "/services/mobile-web-app-design"},
    ];
    const techData = [
        {id:1,name:"Photoshop",icon:photoshopIcon},
        {id:2,name:"Illustrator",icon:illustratorIcon},
        {id:3,name:"Figma",icon:figmaIcon},
        {id:4,name:"XD",icon:xdIcon},
        {id:5,name:"Sketch",icon:sketchIcon},
        {id:6,name:"Invision Studio",icon:invisionStudioIcon},
        {id:7,name:"Zeplin",icon:zeplinIcon},
    ]
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
                                    <h4>Our Attractive Ideas And Design Will Not Only Build Your Brand Name But Also Make An Impact On Your Customer’s Mind.</h4>
                                    <p>Create Unique And Attractive Web Designs For Your Business!</p>
                                    <div className="img-wrap">
                                        <img className="wrapimagework" src="/images/mw_img.jpg" alt="mobile web app design"/>
                                    </div>
                                    <h4>Cj believes the key to success in developing Graphic Design is in our ability to understand the Client’s vision, and we convey that vision using powerful Graphic Delivery.</h4>
                                    <p>
                                    We are specialists in web design, be it big or small websites. Our designs are a creative outlet and we make sure our gorgeous web designs and newsletter design are totally inline with clients’ business objectives. An instantly responsive website, logo branding for product identity, naming, colors, custom icon sets, style guide or be it typography. We are focused on helping a host of small businesses succeed online through our coolest software application user interface. We have treated each of our clients as a family. Is it a small business or huge international corporations?
                                    </p>
                                    <p>
                                    We deliver engaging and stunning websites keeping a focus on elegant design to make your website stand out from your competition. We do take time to understand your mission and your culture and then we translate this knowledge into an exciting new face for your company.
                                    </p>
                                    <p>
                                    Since your website design is the reflection of your company, details are important to us, so that we can present an excellent insight about your business and navigate the content. Web design is our passion. We love innovation and coming up with new strategies to push our client’s website forward and make them stand out from the pack.
                                    </p>
                                    <p>
                                    Cj Technology crafts beautiful and stunning mobile app designs that attract customers’ attention quickly. We aim to provide utmost satisfaction at clients' end with our awesome work.
                                    </p>
                                    <p>
                                    Our creative designing team is filled with knowledge and experience to provide the best mobile app designs that make a lasting impression on clients.
                                    </p>
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
                                        <li><Link href="/services/wireframe-prototype">Wireframe & Prototype</Link></li>
                                        <li><Link href="/services/ui">UI/UX Customization</Link></li>
                                        <li><Link href="/services/graphics-design">Graphics Design</Link></li>
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

export default mobileappdesign;