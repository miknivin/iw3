// File: data/servicesData.js
import service_details1 from "@/assets/img/services/services_img01.jpg";
import service_details2 from "@/assets/img/services/services_img02.jpg"
import service_details3 from "@/assets/img/services/services_img03.jpg";
import service_details4 from "@/assets/img/services/services_img04.jpg";
const serviceData = [
  {
    id: "svc-infra-001",
    mainTitle: "Logistics Infrastructure Solutions",
    mainDescription:
      "iW3 began its journey with a goal to democratize industrial warehousing and logistics infrastructure. We firmly believe that robust logistics infrastructure is essential for developing countries to scale their economic outputs. This can only be achieved by competing globally with quality products at competitive prices. Developing countries face a clear gap in logistics infrastructure, resulting in high logistics-related costs. For example, in India, logistics costs account for 12-13% of GDP, compared to an average of 6-7% for developed countries like Germany, France, and the USA.",
    subTitle: "Our Next Level Logistics Around the World",
    subDescription:
      "The time is ripe for investing in infrastructure solutions in developing countries with high growth potential due to their youthful demographics. India alone requires over $1.4 trillion in infrastructure investment over the next 5 years to achieve its $5 trillion economy target. This necessitates affordable, long-term financing to build quality warehouses, airports, seaports, drone launch pads, highways, and more, all aimed at moving goods from manufacturer to consumer at the lowest cost.",
    progressMetrics: [
      { title: "Successful Delivery", value: 82 },
      { title: "Happy Customers", value: 90 },
    ],
    additionalDescription:
      "Beyond logistics, we are optimistic about youth-oriented infrastructure projects in areas like schools, colleges, hostels, sports, music, and travel. We are launching a digital platform where retail investors can explore these opportunities and invest in specific projects for monthly rental revenue.",
    benefitsTitle: "Raise Capital Faster & Negotiate on Your Own Terms",
    benefitsDescription:
      "Our platform empowers businesses to secure funding efficiently while maintaining control over terms, ensuring flexibility and scalability.",
    benefitsList: [
      "Reliable ",
      "Experienced",
      "Professional ",
      "Speed ",
    ],
    faqs: [
      {
        question: "Which Plan Is Right For Me?",
        answer:
          "Our plans are tailored to your investment goals, whether you’re focusing on logistics or youth-oriented projects. Explore our platform to find the best fit.",
      },
      {
        question: "Do I Have to Commit to a Contract?",
        answer:
          "No long-term contracts are required. Our platform offers flexible investment options, allowing you to choose projects that suit your timeline.",
      },
      {
        question: "What Payment Methods Are Available?",
        answer:
          "We support multiple payment methods, including bank transfers, credit cards, and digital wallets, ensuring seamless transactions for investors worldwide.",
      },
    ],
    videoId: "Ml4XCF-JS0k",
    mainImage: service_details1,
    secondaryImage: service_details2,
  },
  {
    id: "svc-infra-002",

  mainTitle: "Emergency Project Procurement",
  mainDescription: "iW3 can assist with specific product procurement requirements of its customers. This especially comes in handy when we are engaged in executing a project and the customer wants to buy additional material at short notice. We provide procurement and delivery solutions for projects by sourcing, purchasing and delivering quality bulk materials and equipment as per your requirements and within your budget.",
  subTitle: "Rapid Sourcing for Unplanned Project Needs",
  subDescription: "Our emergency procurement network covers 12 commodity categories across 35 countries, specializing in last-minute project requirements. When design changes or unexpected needs arise during execution, we guarantee material availability within 72 hours for 85% of standard construction items, with full logistics integration to your project site.",
  progressMetrics: [
    { title: "Urgent Order Fulfillment", value: 95 },
    { title: "Budget Compliance", value: 100 }
  ],
  additionalDescription: "We maintain strategic buffer stocks of high-demand project materials at regional hubs, combined with real-time supplier capacity monitoring. This enables same-day purchase order processing for 60% of emergency requests, with digital tracking from supplier to site.",
  benefitsTitle: "Your Project's Safety Net for Material Needs",
  benefitsDescription: "Contact us with your requirements and our team will procure it for you in the shortest time Some of our focus areas include:",
  benefitsList: [
    "Spices & foodstuff",
    "Humanitarian supplies",
    "Hygiene Products",
    "Office stationeries",
    "Government supplies",
    "Machinery",
    "Oil Lubricants & Chemicals",
    "General Trading",
  ],
  faqs: [
    {
      question: "What's your response time for urgent requests?",
      answer: "Critical requests receive vendor responses within 2 business hours, with materials typically enroute within 24 hours for stocked items."
    },
    {
      question: "How do you maintain budget compliance?",
      answer: "Our pre-established supplier agreements and volume discounts ensure emergency purchases stay within 5% of planned material costs, with no rush-order premiums."
    },
    {
      question: "Can you handle specialized equipment?",
      answer: "Yes, our technical procurement team sources everything from structural steel to specialized MEP components, with expedited shipping options for oversized loads."
    },
    {
      question: "Do you provide procurement for small quantities?",
      answer: "We optimize small orders through consolidated purchasing with other projects in your region, maintaining cost efficiency even for partial truckloads."
    }
  ],
  videoId: "EmergencyProcurementDemo",
  mainImage: service_details2, // Replace with actual procurement image
  secondaryImage: service_details2 // Replace with actual procurement image
},

  {
    id: "svc-youth-001",
    mainTitle: "Project Logistics Solutions",
  mainDescription: "iW3 has expertise and experience in handling time-bound Project Logistics. Whenever you need to transport something unique, project logistics come into play. Categories such as Heavy Machinery, Equipment, Out Of Gauge (OOG) items, Defense Goods, Relief Material, Pharmaceuticals, Live Animals or any Emergency goods would come under the purview of Project Logistics. There is a lot of planning and administration involved in project logistics with little or no room for error. We work closely with our customers to ensure that the project is delivered on time and on budget. Our team of experts thoroughly organize every aspect of transportation which ensure successful execution of the project – be it by Air, Ocean, Road – or a mix of all three!",
  subTitle: "Multimodal Transport for Complex Cargo",
  subDescription: "With specialized handling facilities in 12 global hubs, we've successfully moved 850+ project cargo shipments in the last year alone. Our engineered logistics solutions incorporate route surveys, load testing, and contingency planning for high-value shipments. The average project under our management saves 18-22% in transport costs through optimal mode selection and cargo consolidation.",
  progressMetrics: [
    { title: "On-Time Deliveries", value: 97 },
    { title: "Cost Savings Achieved", value: 83 }
  ],
  additionalDescription: "Our proprietary Project Control Tower provides real-time visibility of all project shipments, with predictive analytics for risk mitigation. We're currently implementing AI-powered stowage planning to maximize equipment utilization across all transport modes, projected to yield additional 15% efficiency gains by 2025.",
  benefitsTitle: "Your Project in Expert Hands",
  benefitsDescription: "We handle the complexities so you can focus on project execution.",
  benefitsList: [
    "Specialized cargo handling teams",
    "Custom clearance experts",
    "Route engineering services",
    "Dedicated project managers",
    "Insurance coordination",
    "24/7 cargo monitoring"
  ],
  faqs: [
    {
      question: "What makes project logistics different?",
      answer: "Project logistics requires precise phasing, specialized equipment, and exceptional coordination - we plan each movement considering weight distribution, road permits, tide schedules, and political climates where applicable."
    },
    {
      question: "How do you handle oversized cargo?",
      answer: "Our engineering team designs custom loading plans using CAD simulations, with escort vehicles and route surveys for shipments exceeding standard dimensions. We've moved items up to 450 metric tons."
    },
    {
      question: "What's your emergency response capability?",
      answer: "Our Global Rapid Response Team can mobilize appropriate transport within 6 hours for critical shipments, with standing contracts for Antonov AN-124 and heavy-lift ocean charter capacity."
    },
    {
      question: "Do you provide turnkey site logistics?",
      answer: "Yes, we offer complete site solutions including temporary storage yards, on-site cranes, and just-in-sequence delivery coordination for construction projects."
    }
  ],
  videoId: "ProjectLogisticsCaseStudy",
  mainImage: service_details3, // Replace with actual project logistics image
  secondaryImage: service_details2, // Replace with actual project logistics image
  sections: [
    {
      title: "Cargo Aircraft Solutions",
      content: "iW3 provides prompt and dedicated air cargo capacity whenever and wherever you need it most. When time is paramount, we provide you with the most suitable aircraft that results in seamless delivery to any location in the world. We also assist with documentation, origin pick-up and destination deliveries using our vast global agent network. We offer a wide range of air freight products to secure the ideal combination of delivery times, routing, commodity handling and freight pricing for each project we undertake. For example, we always strive to look for one-way availabilities and also to procure spot cargo from the market to optimize available cargo capacity on aircrafts being chartered by our customers. This often helps save immense costs for our customers. Wherever possible, we also combine scheduled airline capacity for one leg and operate full charter on the second leg, which always results in significant saving of overall air transportation cost. We are ready to take on your next air charter enquiry. We will take care of everything for you."
    }
  ]
},
  {
    id: "svc-infra-003",
     mainTitle: "Business Consulting Services",
  mainDescription: "iW3 offers consulting services in various areas such as infrastructure projects, planning, procurement and logistics. Our panel of experts also provide advice on growth strategy, sales, people, operations and technology to match defined objectives and parameters of our customers.",
  subTitle: "Strategic Guidance for Logistics & Infrastructure",
  subDescription: "With 150+ successful consulting engagements across 25 countries, we bring market-specific insights and operational expertise to help businesses scale efficiently. Our consultants average 15 years of industry experience, delivering actionable strategies that have helped clients achieve 30-40% faster growth compared to industry benchmarks.",
  progressMetrics: [
    { title: "Client Growth Achieved", value: 87 },
    { title: "Implementation Success", value: 93 }
  ],
  additionalDescription: "We combine traditional consulting with hands-on implementation support, ensuring strategies translate into measurable results. Our proprietary assessment tools evaluate over 200 operational parameters to identify growth opportunities and efficiency gaps specific to your business context.",
  benefitsTitle: "Transformative Business Expertise",
  benefitsDescription: "We provide end-to-end consulting solutions tailored to your strategic objectives.",
  benefitsList: [
    "Cross-functional expert teams",
    "Data-driven recommendations",
    "Implementation roadmaps",
    "Post-engagement support",
    "Market-specific intelligence",
    "Benchmarking against peers"
  ],
  faqs: [
    {
      question: "What industries do you specialize in?",
      answer: "We focus on logistics, transportation, and infrastructure sectors, with deep expertise in air/sea freight, warehousing, last-mile delivery, and industrial project development."
    },
    {
      question: "How do you measure consulting success?",
      answer: "We define KPIs during discovery and provide quarterly impact reports tracking operational improvements, cost savings, and revenue growth attributable to our recommendations."
    },
    {
      question: "What makes your approach unique?",
      answer: "We combine top-tier strategy consulting with boots-on-the-ground operators who have actually run logistics businesses, ensuring practical, executable advice."
    }
  ],
  videoId: "ConsultingOverviewVideo",
  mainImage: service_details4, // Replace with actual consulting image
  secondaryImage: service_details3, // Replace with actual consulting image
  sections: [
    {
      title: "Mergers & Acquisitions Advisory",
      content: "We consult on mergers & acquisitions in the logistics industry as we believe that the time is ripe for industry consolidation on various fronts. This enables our customers to drive geographic expansion through inorganic growth and greater collaboration in the areas they want to focus on. Contact us today if your company is interested in growing its footprint in new geographies by means of acquisitions. Alternatively, if you believe that you have built a fantastic company over the years, and now want to exit to pursue other things in life, you can speak to us and we will find you a suitable buyer."
    },
    {
      title: "Talent Acquisition Services",
      content: "Having the right talent is most crucial to the success of your business. Good people offer more than just their skills, but they are the ones that sustain and drive your business. iW3's talent advisory team are well connected in the cargo and logistics domain to provide you the best talent to match your requirements. We use our market insights and our vast database of profiles to provide you with excellent candidate recommendations at every level. We will find the best candidate fit for your organization keeping in mind various important parameters such as skill sets, IQ, EQ and other leadership traits to fit your company's culture. Some of the core areas of expertise of our candidates include Air Freight, Ocean Freight, Surface transportation, e-Commerce logistics, Airport and Ocean port operations management. As a matter of principle, we process all requests, however we charge a service fee only on successful transactions."
    }
  ]
},
];

export default serviceData;
