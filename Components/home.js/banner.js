import React from "react";
import style from "./banner.module.css";
import { businessIcon, educationIcon, entertainmentIcon, financeIcon, fooddrinkIcon, galaryIcon, healthfitnessIcon, lifestyleIcon, shoppingIcon, socialmarketingIcon, sportIcon, travelIcon } from "@/Helpers/icon";


const Banner = () => {
    const data = [
        { id: 1, title: "Busniess", icon: businessIcon },
        { id: 2, title: "Education", icon: educationIcon },
        { id: 3, title: "Entertainment & Music", icon: entertainmentIcon },
        { id: 4, title: "Finance", icon: financeIcon },
        { id: 5, title: "Food & Drink", icon: fooddrinkIcon },
        { id: 6, title: "Health & Fitness", icon: healthfitnessIcon },
        { id: 7, title: "Photo & Video", icon: galaryIcon },
        { id: 8, title: "Shopping", icon: shoppingIcon },
        { id: 9, title: "Sports", icon: sportIcon },
        { id: 10, title: "Social Networking", icon: socialmarketingIcon },
        { id: 11, title: "Travel", icon: travelIcon },
        { id: 12, title: "Lifestyle", icon: lifestyleIcon },
    ];
    const achivementData = [
		{id:1,title:"Satisfied Clients",number:"200+",image:"./images/smile.png",bg:"#029e76",shadow:"0 2px 15px rgb(2 158 118 / 50%)"},
		{id:2,title:"Projects Completed",number:"500+",image:"./images/settings.png",bg:"#ffa808",shadow:"0 2px 15px rgb(255 168 8 / 50%)"},
		{id:3,title:"Client Retention",number:"96%",image:"./images/startup.png",bg:"#5543d1",shadow:"0 2px 15px rgb(85 67 209 / 50%);"},
		{id:4,title:"Years Completed",number:"13",image:"./images/confetti.png",bg:"#ff586e",shadow:"0 2px 15px rgb(255 88 110 / 50%)"},
	]
    const clientData  = [
		{id:1, text:"Highly skilled Developers", image:"./images/homeimg_1.png" },
		{id:2, text:"On Time Delivery", image:"./images/homeimg_2.png" },
		{id:3, text:"Quick Response", image:"./images/homeimg_3.png" },
		{id:4, text:"Diverse Expertise", image:"./images/homeimg_4.png" },
		{id:5, text:"Committed to Quality", image:"./images/homeimg_5.png" },
		{id:6, text:"Responsive to your need", image:"./images/homeimg_6.png" },
		{id:7, text:"Follows Industry Trends", image:"./images/homeimg_7.png" },
		{id:8, text:"Guaranteed ROI", image:"./images/homeimg_8.png" }
	];

    return (
        <>
            <div className={style.headerwrap}>
                <div className={style.headsection}>
                    <div className={style.inner}>
                        <div className={style.conversionmain}>We Convert your Idea <br/> into <span> Reality </span></div>
                        <div className={style.conversiondescription}>Do you have any idea? Want to digitize Your business?</div>
                        <div className={style.conversioninquire} onClick={() => window.location="/contact"}><span>&gt;</span>Inquire Now</div>
                    </div>
                </div>
            </div>
            <div className={style.workcategory}>
                <div className={style.categorywrap}>
                    <div className={style.leftside}>
                        <div className={style.mainheading}>Our Industry-specific IT Solutions!</div>
                        <div className={style.submainheading}>Helping <span>Businesses</span> in All Domains</div>
                        <p className={style.maindetails}>Coding-Jobs Technology never shies away from a new challenge,
                            new technologies, and new markets. This flexibility and versatility 
                            have allowed us to utilize our expertise across a growing range of industries
                        </p>
                    </div>
                    <div className={style.rightside}>
                        {data.map((item) => (
                            <div className={style.item} key={item.id}>
                                <div className={style.inner}>
                                    <div className={style.icon}>{item.icon({width:60,height:60})}</div>
                                    <div className={style.title}> {item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={style.workflowsection}>
                <div className={style.workflowheader}>Our Work Flow</div>
                <div className={style.workflowdescription}>
                    Here are the steps <span>we follow</span>
                </div>
                <div className={style.flowstep}>
                    <div className={style.flow1}></div>
                    <div className={style.flow2}></div>
                    <div className={style.flow3}></div>
                    <div className={style.flow4}></div>
                    <div className={style.flow5}></div>
                    <div className={style.flow6}></div>
                    <div className={style.flow7}></div>
                </div>
                <div className={style.workflowdetails}>
					<div className={style.workflowitem}>
						<div className={style.icon}>01</div>
						<div className={style.title}>Support & Maintenance</div>
					</div>
					<div className={style.workflowitem}>
						<div className={style.icon}>02</div>
						<div className={style.title}>Requirement Gathering</div>
					</div>
					<div className={style.workflowitem}>
						<div className={style.icon}>03</div>
						<div className={style.title}>UI/UXDesign</div>
					</div>
					<div className={style.workflowitem}>
						<div className={style.icon}>04</div>
						<div className={style.title}>Prototype-</div>
					</div>
					<div className={style.workflowitem}>
						<div className={style.icon}>05</div>
						<div className={style.title}>Development</div>
					</div>
					<div className={style.workflowitem}>
						<div className={style.icon}>06</div>
						<div className={style.title}>Quality Assurance</div>
					</div>
					<div className={style.workflowitem}>
						<div className={style.icon}>07</div>
						<div className={style.title}>Deployment</div>
					</div>
				</div>
            </div>
            <div className={style.expertisesection}>
				<div className={style.expertisetitle}>Our Expertise</div>
				<div className={style.expertisedescription}>
					Amazing Services to Build <span>Busines Growth</span>
				</div>
				<div className={style.expertisedetails}>
					<div className={style.expertisecategory1}>
						<div className={style.categoryitem}>
							<div className={style.itemname}>iOS Development</div>
							<div className={style.itemskills}>Objective-C, Swift, Xcode</div>
						</div>
						<div className={style.categoryitem}>
							<div className={style.itemname}>Android Development</div>
							<div className={style.itemskills}>Java, XML, Android Studio, Firebase</div>
						</div>
						<div className={style.categoryitem}>
							<div className={style.itemname}>Web Development</div>
							<div className={style.itemskills}>Core PHP, Codeigniter, Laravel, Wordpress HTML, CSS, JavaScript, MySql</div>
						</div>
					</div>
					<div className={style.expertiseimage}>
						<img className={style.image} src="./images/converted.png"></img>
					</div>
					<div className={style.expertisecategory2}>
						<div className={style.categoryitem}>
							<div className={style.itemname}>React-Native Development</div>
							<div className={style.itemskills}>React, JavaScript, Redux</div>
						</div>
						<div className={style.categoryitem}>
							<div className={style.itemname}>UI/UX Design</div>
							<div className={style.itemskills}>Mobile App, Website, Logo, Brochure, Flyer, Visiting Cards, Photoshop, Illustrator</div>
						</div>
						<div className={style.categoryitem}>
							<div className={style.itemname}>Flutter Development</div>
							<div className={style.itemskills}>Flutter SDK, Dart</div>
						</div>
					</div>
				</div>
			</div>
            <div className={style.statisticscontainer}>
                <div className={style.boxcontainer}>
                    <div className={style.boxwrap}>
                        {achivementData.map((item) => (
                            <div className={`${style.box} ${item.id%2 ==0  ? style.od : ""}`} key={item.id}>
                                <div className={style.iconwrap} style={{background:item.bg,boxShadow:item.shadow}}>
                                    <img src={item.image} alt="img"/>
                                </div>
                                <div className={style.boxa}>{item.title}</div>
                                <span>{item.number}</span>
                            </div>
                        ))}
                    </div>
                </div>
			</div>
            <div className={style.aboutcjssection}>
				<div className={style.cjwhy}>Why Choose Coding-Job Technology</div>
				<div className={style.cjsubdetails}>
					We Create Amazing And Remarkable <span>Experience For Our Clients</span>
				</div>
				<div className={style.mainsection}>
					{clientData.map((data) => (
					<div className={style.sec3} key={data.id}>
						<div className={style.main1}>
							<img src={data.image}></img>
						</div>
						<div className={style.text}>{data.text}</div>
					</div>
					))}
				</div>
			</div>
        </>
    );
};

export default Banner;