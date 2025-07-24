import { StaticImageData } from "next/image";

import service_1 from "@/assets/img/services/services_img11.jpeg"
import service_2 from "@/assets/img/services/services_img13.jpg"
import service_3 from "@/assets/img/services/services_img12.jpg"
import service_4 from "@/assets/img/services/services_img14.jpg"
// import service_5 from "@/assets/img/services/services_img07.jpg"
// import service_6 from "@/assets/img/services/services_img08.jpg"
// import service_7 from "@/assets/img/services/services_img09.jpg"
import infrastructure_icon from "@/assets/img/icon/img4.png" // New import for Infrastructure icon
import procurement_icon from "@/assets/img/icon/img2.png"   
import logistics_icon from "@/assets/img/icon/img3.png"
import consulting_icon from "@/assets/img/icon/img1.png"

interface DataType {
   id: string | number;
   page: string;
   img?: StaticImageData;
   icon: StaticImageData; // Updated to only allow StaticImageData
   title: string;
   desc: string;
   list?: string[];
}

const service_data: DataType[] = [
   {
      id: "svc-infra-001",
      page: "home_1",
      img: service_1,
      icon: infrastructure_icon, // Changed to image
      title: "Infrastructure",
      desc: "iW3 began its journey with a goal to democratize industrial warehousing and logistics infrastructure",
   },
   {
      id: "svc-infra-002",
      page: "home_1",
      img: service_2,
      icon: procurement_icon, // Changed to image
      title: "Procurement",
      desc: "iW3 has expertise and experience in handling time-bound Project Logistics",
   },
   {
      id: "svc-youth-001",
      page: "home_1",
      img: service_3,
      icon: logistics_icon, // Changed to image
      title: "Logistics",
      desc: "iW3 can assist with specific product procurement requirements of its customers",
   },
   {
      id: "svc-infra-003",
      page: "home_1",
      img: service_4,
      icon: consulting_icon, // Changed to image
      title: "Consulting",
      desc: "iW3 offers consulting services in various areas such as infrastructure projects, planning, procurement and logistics",
   },

   // home_2
   // {
   //    id: 1,
   //    page: "home_2",
   //    icon: "flaticon-delivery-cart",
   //    title: "Fast & Efficient Delivery",
   //    desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
   //    list: ["Quality Control System", "Modern Technology", "100% True Result Provide"],
   // },
   // {
   //    id: 2,
   //    page: "home_2",
   //    icon: "flaticon-ship",
   //    title: "Real - Time Tracking",
   //    desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
   //    list: ["Quality Control System", "Modern Technology", "100% True Result Provide"],
   // },
   // {
   //    id: 3,
   //    page: "home_2",
   //    icon: "flaticon-warehouse-1",
   //    title: "Warehouse Storage",
   //    desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
   //    list: ["Quality Control System", "Modern Technology", "100% True Result Provide"],
   // },
   // {
   //    id: 4,
   //    page: "home_2",
   //    icon: "flaticon-train",
   //    title: "Train Freight Location",
   //    desc: "Gadipi Scing elite Aliquam vulputate tortor nec com ultri viverra Suspen aucibus seed dolor eget follow.",
   //    list: ["Quality Control System", "Modern Technology", "100% True Result Provide"],
   // },

   // // home_4
   // {
   //    id: 1,
   //    page: "home_4",
   //    img: service_5,
   //    icon: "flaticon-delivery-cart",
   //    title: "Modern Storage",
   //    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   // },
   // {
   //    id: 2,
   //    page: "home_4",
   //    img: service_6,
   //    icon: "flaticon-delivery-man",
   //    title: "House Shifting",
   //    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   // },
   // {
   //    id: 3,
   //    page: "home_4",
   //    img: service_7,
   //    icon: "flaticon-warehouse",
   //    title: "Smart Warehousing",
   //    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   // },

   // // inner_page
   // {
   //    id: 1,
   //    page: "inner_page",
   //    img: service_1,
   //    icon: "flaticon-ship",
   //    title: "Ocean Freight",
   //    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   // },
   // {
   //    id: 2,
   //    page: "inner_page",
   //    img: service_2,
   //    icon: "flaticon-truck",
   //    title: "Road Freight",
   //    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   // },
   // {
   //    id: 3,
   //    page: "inner_page",
   //    img: service_3,
   //    icon: "flaticon-air-freight",
   //    title: "Air Freight",
   //    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   // },
   // {
   //    id: 4,
   //    page: "inner_page",
   //    img: service_4,
   //    icon: "flaticon-train",
   //    title: "Train Freight",
   //    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   // },
   // {
   //    id: 5,
   //    page: "inner_page",
   //    img: service_5,
   //    icon: "flaticon-delivery-cart",
   //    title: "Modern Storage",
   //    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   // },
   // {
   //    id: 6,
   //    page: "inner_page",
   //    img: service_6,
   //    icon: "flaticon-delivery-man",
   //    title: "House Shifting",
   //    desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   // },
];

export default service_data;