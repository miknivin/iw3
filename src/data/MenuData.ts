interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
      mega_menu?: {
         link: string;
         title: string;
      }[];
   }[];
};

const menu_data: MenuItem[] = [
   {
      id: 1,
      has_dropdown: true,
      title: "Home",
      link: "/",
      // sub_menus: [
      //    { link: "/", title: "Cargo Shipping" },
      //    { link: "/home-two", title: "Marine Shipping" },
      //    { link: "/home-three", title: "Air Logistics" },
      //    { link: "/home-four", title: "Cargo Warehouse" },
      // ],
   },
   {
      id: 2,
      has_dropdown: false,
      title: "About",
      link: "/about",
   },
   {
      id: 3,
      has_dropdown: true,
      title: "Services",
      link: "/services",
      sub_menus: [
         { link: "/services-details/svc-infra-001", title: "Infrastructure" },
         // { link: "/history", title: "Our Company History" },
         {
            link: "/services-details/svc-infra-002", title: "Procurement"
            
         },
         {
             link: "/services-details/svc-youth-001", title: "Logistics"
            
         },
         {
           link: "/services-details/svc-infra-003", title: "Consulting"
           
            
         },
         // { link: "/how-it-work", title: "How It’s Work" },
         // { link: "/pricing", title: "Pricing Page" },
         // { link: "/faq", title: "FAQ Page" },
         // { link: "/testimonial", title: "Testimonial Page" },
         // { link: "/client", title: "Our Partners" },
      ],
   },
   // {
   //    id: 4,
   //    has_dropdown: true,
   //    title: "Blog",
   //    link: "#",
   //    sub_menus: [
   //       { link: "/blog", title: "Our Blog" },
   //       { link: "/blog-details", title: "Blog Details" },
   //    ],
   // },
   {
      id: 5,
      has_dropdown: false,
      title: "Contact",
      link: "/contact",
   },
];
export default menu_data;