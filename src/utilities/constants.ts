export const planPrices = {
  pro: "₦89,800",
  proMonthly: "₦7,900",
  business: "₦214,800",
  businessMonthly: "₦19,800",
};

export const pricing = {
  standard: {
    name: "free",
    monthlyName: "free",
    title: "Standard",
    description: "Lorem Ipsum dolor sit amet",
    payment: "Free",
    monthlyPayment: "Free",
    duration: "",
    tenor: "Free forever",
    incentives: [
      "Community Engagement",
      "Networking Opportunities",
      "Stay Informed on Creative Trends",
    ],
    buttonText: "Continue for free",
    logo: "/img/pricing-free.svg",
    radius: "lg:rounded-l-[8px]",
    buttonLink: "/dashboard",
    buttonLink2: "/dashboard",
  },
  pro: {
    name: "pro",
    monthlyName: "pro-monthly",
    title: "Pro",
    description: "Lorem Ipsum dolor sit amet",
    payment: planPrices.pro,
    monthlyPayment: planPrices.proMonthly,
    monthlyDuration: "/month",
    yearlyDuration: "/year",
    tenor: "Get one month free if you subscribe now",
    incentives: [
      "Enhanced Visibility",
      "Access to Premium Jobs",
      "Expanded Project Showcase",
      "Advanced Analytics and Insights",
      "Advanced Analytics and Insights",
    ],
    buttonText: "Subscribe now",
    logo: "/img/pricing-pro.svg",

    radius: "!rounded-[0]",
    buttonLink: "/subscription/pro",
    buttonLink2: "/subscription/pro-monthly",
  },
  business: {
    name: "business",
    monthlyName: "business-monthly",
    title: "Business",
    description: "Lorem Ipsum dolor sit amet",
    payment: planPrices.business,
    monthlyPayment: planPrices.businessMonthly,
    monthlyDuration: "/month",
    yearlyDuration: "/year",
    tenor: "For the next 3 months and 7900",
    incentives: [
      "Premium Talent Pool Access",
      "Featured Job Listings",
      "Analytics and Performance Metrics",
      "Promotion and Marketing Opportunities",
      "Access to GridTools Discovery Pack (Free)",
    ],
    buttonText: "Subscribe now",
    logo: "/img/pricing-business.svg",

    radius: "lg:rounded-r-[8px]",
    buttonLink: "/subscription/business",
    buttonLink2: "/subscription/business-monthly",
  },
  proMonthly: {
    name: "pro",
    monthlyName: "pro-monthly",
    title: "Pro",
    description: "Lorem Ipsum dolor sit amet",
    payment: planPrices.pro,
    monthlyPayment: planPrices.proMonthly,
    monthlyDuration: "/month",
    yearlyDuration: "/year",
    tenor: "Get one month free if you subscribe now",
    incentives: [
      "Enhanced Visibility",
      "Access to Premium Jobs",
      "Expanded Project Showcase",
      "Advanced Analytics and Insights",
      "Advanced Analytics and Insights",
    ],
    buttonText: "Subscribe now",
    logo: "/img/pricing-pro.svg",

    radius: "!rounded-[0]",
    buttonLink: "/subscription/pro",
    buttonLink2: "/subscription/pro-monthly",
  },
  businessMonthly: {
    name: "business",
    monthlyName: "business-monthly",
    title: "Business",
    description: "Lorem Ipsum dolor sit amet",
    payment: planPrices.business,
    monthlyPayment: planPrices.businessMonthly,
    monthlyDuration: "/month",
    yearlyDuration: "/year",
    tenor: "For the next 3 months and 7900",
    incentives: [
      "Premium Talent Pool Access",
      "Featured Job Listings",
      "Analytics and Performance Metrics",
      "Promotion and Marketing Opportunities",
      "Access to GridTools Discovery Pack (Free)",
    ],
    buttonText: "Subscribe now",
    logo: "/img/pricing-business.svg",

    radius: "lg:rounded-r-[8px]",
    buttonLink: "/subscription/business",
    buttonLink2: "/subscription/business-monthly",
  },
};

export const projectModalTypes = {
  add: "add",
  edit: "edit",
};

export const filterOptions = {
  postsSort: [
    { id: 1, name: "Most recent", value: 0, returnValue: "Most recent" },
  ],
};

export const plans = [
  {
    type: "Free",
    subPlan: "Current plan",
    amount: "Free",
    tenor: null,
    supportingText: "One sentence supporting text",
    features: [
      "Community Engagement",
      "Networking Opportunities",
      "Stay Informed on Creative Trends",
    ],
    pricing: {
      ...pricing.standard,
    },
    action: (navigate) => {
      navigate("/subscription/free");
    },
    monthlyAction: (navigate) => {
      navigate("/subscription/free");
    },
  },
  {
    type: "Pro",
    subPlan: "Recommended plan",
    amount: planPrices.pro,
    tenor: "/month",
    supportingText: "One sentence supporting text",
    features: [
      "Enhanced Visibility",
      "Access to Premium Jobs 1",
      "Expanded Project Showcase",
      "Advanced Analytics and Insights",
      "Access to GridTools Discovery Pack (Free)",
    ],
    pricing: {
      ...pricing.pro,
    },
    action: (navigate) => {
      navigate("/subscription/pro");
    },
    monthlyAction: (navigate) => {
      navigate("/subscription/pro-monthly");
    },
  },

  {
    type: "Business",
    subPlan: null,
    amount: planPrices.business,
    tenor: "/month",
    supportingText: "One sentence supporting text",
    features: [
      "Premium Talent Pool Access",
      "Featured Job Listings",
      "Analytics and Performance Metrics",
      "Access to GridTools Discovery Pack (Free)",
      "Promotion and Marketing Opportunities",
    ],
    pricing: {
      ...pricing.business,
    },
    action: (navigate) => {
      navigate("/subscription/business");
    },
    monthlyAction: (navigate) => {
      navigate("/subscription/business-monthly");
    },
  },
];

export const planObj = {
  standard: {
    type: "Free",
    subPlan: "Current plan",
    amount: "Free",
    tenor: null,
    supportingText: "One sentence supporting text",
    features: [
      "Community Engagement",
      "Networking Opportunities",
      "Stay Informed on Creative Trends",
    ],
    pricing: {
      ...pricing.standard,
    },
    action: (navigate) => {
      navigate("/subscription/free");
    },
    monthlyAction: (navigate) => {
      navigate("/subscription/free");
    },
    param: "standard",
  },
  pro: {
    type: "Pro",
    subPlan: "Recommended plan",
    amount: planPrices.pro,
    tenor: "/year",
    supportingText: "One sentence supporting text",
    features: [
      "Enhanced Visibility",
      "Access to Premium Jobs 1",
      "Expanded Project Showcase",
      "Advanced Analytics and Insights",
      "Access to GridTools Discovery Pack (Free)",
    ],
    pricing: {
      ...pricing.pro,
    },
    action: (navigate, isCurrentPlan = false) => {
      navigate("/subscription/pro" + `?isCurrentPlan=${isCurrentPlan}`);
    },
    monthlyAction: (navigate, isCurrentPlan = false) => {
      navigate("/subscription/pro"+ `?isCurrentPlan=${isCurrentPlan}`);
    },
    param: "pro",
  },

  business: {
    type: "Business",
    subPlan: null,
    amount: planPrices.business,
    tenor: "/year",
    supportingText: "One sentence supporting text",
    features: [
      "Premium Talent Pool Access",
      "Featured Job Listings",
      "Analytics and Performance Metrics",
      "Access to GridTools Discovery Pack (Free)",
      "Promotion and Marketing Opportunities",
    ],
    pricing: {
      ...pricing.business,
    },
    action: (navigate, isCurrentPlan = false) => {
      navigate("/subscription/business"+ `?isCurrentPlan=${isCurrentPlan}`);
    },
    monthlyAction: (navigate, isCurrentPlan = false) => {
      navigate("/subscription/business"+ `?isCurrentPlan=${isCurrentPlan}`);
    },
    param: "business",
  },
  proMonthly: {
    type: "Pro",
    subPlan: "Recommended plan",
    amount: planPrices.proMonthly,
    tenor: "/month",
    supportingText: "One sentence supporting text",
    features: [
      "Enhanced Visibility",
      "Access to Premium Jobs 1",
      "Expanded Project Showcase",
      "Advanced Analytics and Insights",
      "Access to GridTools Discovery Pack (Free)",
    ],
    pricing: {
      ...pricing.pro,
    },
    action: (navigate, isCurrentPlan = false) => {
      navigate("/subscription/pro-monthly"+ `?isCurrentPlan=${isCurrentPlan}`);
    },
    monthlyAction: (navigate, isCurrentPlan = false) => {
      navigate("/subscription/pro-monthly"+ `?isCurrentPlan=${isCurrentPlan}`);
    },
    param: "pro-monthly",
  },

  businessMonthly: {
    type: "Business",
    subPlan: null,
    amount: planPrices.businessMonthly,
    tenor: "/month",
    supportingText: "One sentence supporting text",
    features: [
      "Premium Talent Pool Access",
      "Featured Job Listings",
      "Analytics and Performance Metrics",
      "Access to GridTools Discovery Pack (Free)",
      "Promotion and Marketing Opportunities",
    ],
    pricing: {
      ...pricing.business,
    },
    action: (navigate, isCurrentPlan = false) => {
      navigate("/subscription/business-monthly"+ `?isCurrentPlan=${isCurrentPlan}`);
    },
    monthlyAction: (navigate, isCurrentPlan = false) => {
      navigate("/subscription/business-monthly"+ `?isCurrentPlan=${isCurrentPlan}`);
    },
    param: "business-monthly",
  },
};

export const carouselImages = [
  { id: 1, url: "/imgUi/I1.png" },
  { id: 2, url: "/imgUi/black-boy-playing-guitar.jpg" },
  {
    id: 3,
    url: "/imgUi/black-white-portrait-woman-with-clapperboard-old-hollywood-glamour-style.jpg",
  },
  {
    id: 4,
    url: "/imgUi/calm-attractive-fashion-designers-work-cozy-office-darkskinned-lady-paint-shorthaired-woman-holds-coffee-cup.jpg",
  },
  {
    id: 5,
    url: "/imgUi/cheerful-photographer-giving-instructions-studio.jpg",
  },
  {
    id: 6,
    url: "/imgUi/chef-cooking-kitchen-while-wearing-professional-attire.jpg",
  },
  {
    id: 7,
    url: "/imgUi/cropped-photo-serious-young-man-sitting-office-coworking.jpg",
  },
  {
    id: 8,
    url: "/imgUi/design-professional-showcases-elegant-fashion-collection-stage-generated-by-ai.jpg",
  },
  {
    id: 9,
    url: "/imgUi/front-view-handsome-male-musician-singing-home-with-microphone.jpg",
  },
  {
    id: 10,
    url: "/imgUi/front-view-male-musician-playing-guitar-bed.jpg",
  },
  { id: 11, url: "/imgUi/front-view-women-clothes-shopping.jpg" },
  {
    id: 12,
    url: "/imgUi/graphic-designer-choosing-color-from-sampler.jpg",
  },
  { id: 13, url: "/imgUi/hands-with-movie-slate.jpg" },
  {
    id: 14,
    url: "/imgUi/high-angle-brazilian-women-working-as-clothing-designers.jpg",
  },
  { id: 15, url: "/imgUi/man-wearing-apron-baking-kitchen.jpg" },
  { id: 16, url: "/imgUi/medium-shot-women-clothes-shopping (1).jpg" },
  { id: 17, url: "/imgUi/medium-shot-women-clothes-shopping.jpg" },
  {
    id: 18,
    url: "/imgUi/medium-shot-women-working-as-photographer.jpg",
  },
  {
    id: 19,
    url: "/imgUi/portrait-attractive-african-american-female-with-beautiful-makeup-posing-with-her-eyes-closed.jpg",
  },
  {
    id: 20,
    url: "/imgUi/portrait-indigenous-person-integrated-into-modern-life.jpg",
  },
  { id: 21, url: "/imgUi/portrait-woman-with-cheerful-makeup.jpg" },
  {
    id: 22,
    url: "/imgUi/woman-promoting-cloths-from-thrift-store.jpg",
  },
];
