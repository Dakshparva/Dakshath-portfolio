import React from "react";

import Eventmanagement from "../assets/portfolio/Eventmanagement.JPG";
import Hotelbooking from "../assets/portfolio/Hotelbooking.JPG";
import Todolistjs from "../assets/portfolio/Todolistjs.JPG";
import TvmazeApp from "../assets/portfolio/TvmazeApp.JPG";
import Getintouch from "../assets/portfolio/Getintouch.JPG";
import Todolist from "../assets/portfolio/Todolist.JPG";
import Snakegame from "../assets/portfolio/Snakegame.JPG";
import NewsApp from "../assets/portfolio/News-App.jpg";
import EcommerceAmazonapp from "../assets/portfolio/EcommerceAmazonapp.jpg";
import DcartEcommerce from "../assets/portfolio/D-cart Ecommerce.jpg";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "ReactNative NewsApp",
      skills: "JavaScript,HTML,CSS,Reactjs,React-Native,React-redux,React-router",
      src: NewsApp,
     href:"https://github.com/Dakshparva/News-App.git",
      LiveDemo:"https://snack.expo.dev/@dakshath/github.com-dakshparva-news-app",
    },
    {
      id: 2,
      name: "EcommerceAmazonapp",
      skills: "JavaScript,HTML,CSS,Reactjs,React-redux,React-router",
      src: EcommerceAmazonapp,
      href:"https://github.com/Dakshparva/Amazon_App.git",
       LiveDemo:"https://amazon-2-arp.vercel.app/",
    },
    {
      id: 3,
      name: "Dcart-Ecommerce",
      skills: "JavaScript,HTML,CSS",
      src: DcartEcommerce,
      href:"https://github.com/Dakshparva/D-Cart.git",
       LiveDemo:"https://d-cart-dakshparva.vercel.app/",
    },
      {
      id: 4,
      name: "Eventmanagementapp",
      skills: "JavaScript,HTML,CSS",
      src: Eventmanagement,
      href:"https://github.com/Dakshparva/eventmanagement1",
       LiveDemo:"https://dakshparva.github.io/eventmanagement1/",
    },
    {
      id: 3,
      name: "HotelBooking",
      src: Hotelbooking,
      skills: "JavaScript,HTML,CSS",
      href:"https://github.com/Dakshparva/hotelwebsite.github.io",
      LiveDemo:"https://dakshparva.github.io/hotelwebsite.github.io/",
    },
    {
      id: 4,
      name: "TvmazeApp",
      src: TvmazeApp,
      skills: "ReactJs, Material-ui",
      href:"https://github.com/Dakshparva/Tv-maze",
      LiveDemo:"https://tv-maze-eight.vercel.app/",
    },
    {
      id: 5,
      name: Getintouch,
      src: Getintouch,
      skills: "JavaScript,HTML,CSS",
    href:"https://github.com/Dakshparva/Getintouch-github.io",
    LiveDemo:"https://dakshparva.github.io/Getintouch-github.io/",
    },
    {
      id: 6,
      name: Todolistjs,
      src: Todolistjs,
      skills: "JavaScript,HTML,CSS",
    href:"https://github.com/Dakshparva/Todo-app",
    LiveDemo:"https://dakshparva.github.io/Todo-app/",
     
    },
    {
        id: 7,
        name: Snakegame,
        src: Snakegame,
        skills: "JavaScript,HTML,CSS",
        href:"https://github.com/Dakshparva/snake-game-using-js",
        LiveDemo :"https://dakshparva.github.io/snake-game-using-js/"
      },
      {
        id: 8,
        src: Todolist,
        skills: "ReactJs",
        href:"https://github.com/Dakshparva/Todo-using-React",
        LiveDemo:"https://dakshparva.github.io/Todo-using-React/",
      },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,skills,href,LiveDemo  }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
            
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"  >
                <a href={LiveDemo}>View</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={href}>  <FaGithub size={30} /></a>
              
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;