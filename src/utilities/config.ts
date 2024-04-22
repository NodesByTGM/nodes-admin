export const BASE_API_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? "https://dev.api.nodesafrica.com/api/v1"
    : "https://dev.api.nodesafrica.com/api/v1";
export const MAIN_APP_URL = "https://nodes.com";

const API_ENDPOINTS = {
  Auth: {
    RegisterURL: `${BASE_API_ENDPOINT}/auth/register`,
    LoginURL: `${BASE_API_ENDPOINT}/admin/auth/login`,
    LogoutURL: `${BASE_API_ENDPOINT}/auth/logout`,
    ResetPasswordURL: `${BASE_API_ENDPOINT}/reset-password`,
    CheckResetLinkURL: `${BASE_API_ENDPOINT}/admin/auth/check-reset-link`,
    ForgotPasswordURL: `${BASE_API_ENDPOINT}/admin/auth/forgot-password`,
    ChangePasswordURL: `${BASE_API_ENDPOINT}/admin/auth/change-password`,
    RefreshTokenURL: `${BASE_API_ENDPOINT}/auth/token`,
    SendOTP: `${BASE_API_ENDPOINT}/auth/send-otp`,
    VerfiyEmail: `${BASE_API_ENDPOINT}/auth/verify-email`,
    ProfileURL: `${BASE_API_ENDPOINT}/users/profile`,
    GoogleSocial: `${BASE_API_ENDPOINT}/socialauth/google/auth`
  },
  Community: {
    Post: `${BASE_API_ENDPOINT}/community/posts`,
  },
  Profile: {
    UserProfile: `${BASE_API_ENDPOINT}/users/profile`,
    UserById: `${BASE_API_ENDPOINT}/users/:id`,
    AllUsers: `${BASE_API_ENDPOINT}/users`,

  },
  Job: {
    JobUrl: `${BASE_API_ENDPOINT}/jobs`,
    MyJobsUrl: `${BASE_API_ENDPOINT}/jobs/mine`,
  },
  Project: {
    Projects: `${BASE_API_ENDPOINT}/projects`,
  },
  Submissions: {
    ContactURL: `${BASE_API_ENDPOINT}/submissions/contact`,
    WaitlistURL: `${BASE_API_ENDPOINT}/submissions/waitlist`,
    SubscribeURL: `${BASE_API_ENDPOINT}/submissions/subscribe`,
    LinkedInURL: `${BASE_API_ENDPOINT}/submissions/linkedin`,
    AddressURL: `${BASE_API_ENDPOINT}/submissions/address`,
    MembershipURL: `${BASE_API_ENDPOINT}/submissions/membership`,
  },
  Upgrades: {
    TalentURL: `${BASE_API_ENDPOINT}/onboarding`,
    BusinessURL: `${BASE_API_ENDPOINT}/onboarding/business`,
  },
  Events: {
    BaseURL: `${BASE_API_ENDPOINT}/events`,
    MineURL: `${BASE_API_ENDPOINT}/events/mine`,
    CreateURL: `${BASE_API_ENDPOINT}/events/create`,
    BuyTicketURL: `${BASE_API_ENDPOINT}/events/create/buy-ticket`,
    GuestsURL: `${BASE_API_ENDPOINT}/events/guests/`,
  },
  Transactions: {
    VerifyURL: `${BASE_API_ENDPOINT}/transactions/verify/internal`, // /:description/:reference
  },
  Uploads: {
    UploadFile: `${BASE_API_ENDPOINT}/uploads/media`,
  },
  Trending: {
    Events: `${BASE_API_ENDPOINT}/trending`,
    Movies: `${BASE_API_ENDPOINT}/movies-and-shows`,
  },
};

const PATHS = {
  Admin: {
    Auth: {
      Base: "/",
      Default: "",
      Signup: "/auth/signup",
      Login: "/auth/login",
      Register: "/auth/register",
      ForgotPassword: "/auth/forgot-password",
      ResetPassword: "/auth/reset-password/",
      ResetPasswordWithParams: "/auth/reset-password/:accountId/:token",
    },
    Content: {
      Base: "/admin/content",
      Default: "",
    },
    UserDetails: {
      Base: "/admin/user/:id",
      Default: "",
    },
    User: {
      Base: "/admin/user",
      Default: "",
    },
    Subscription: {
      Base: "/admin/subscription",
      Default: "",
    },
    Analytics: {
      Base: "/admin/analytics",
      Default: "",
    },
  },

  Auth: {
    Login: "/auth/login",
    Register: "/auth/register",
    ForgotPassword: "/auth/forgot-password",
    ResetPassword: "/auth/reset-password/",
    ResetPasswordWithParams: "/auth/reset-password/:accountId/:token",
    Google: "/socialauth/google",
  },
  Upgrades: {
    Talent: {
      Base: "/upgrade/talent",
      GetStarted: "/upgrade/talent/get-started",
      Onboarding: "/upgrade/talent/onboarding",
    },
    Business: {
      Base: "/upgrade/business",
      GetStarted: "/upgrade/business/get-started",
      Onboarding: "/upgrade/business/onboarding",
    },
    Pricing: {
      Base: "/upgrade/pricing",
    },
  },
  Business: {
    Base: "/business",
    Default: "",
    Dashboard: "/business/dashboard",
    Profile: "/business/profile",
    EditProfile: "/business/edit-profile",
  },

  Dashboard: {
    Base: "/dashboard",
    Dashboard: "",
    ViewAll: "/dashboard/view-all",
    Business: "/dashboard/business",
    ViewDetail: "/dashboard/view-detail/:id",
    SeeMore: "/dashboard/see-more/:type",
    Details: "/dashboard/see-more/:type/:id",
    Categories: {
      Base: "/dashboard/categories",
      CategoryWithParam: "/dashboard/categories/:id",
    },
    Posts: {
      Base: "/dashboard/posts",
      PostWithParam: "/dashboard/posts/:id",
    },
    Profile: {
      Base: "/profile",
      Profile: "",
      EditProfile: "/profile/edit-profile",
      EditTalent: "/profile/edit-talent",
    },
    Events: {
      Base: "/dashboard/events",
      Create: "/dashboard/events/create",
      Edit: "/dashboard/events/edit",
      EditWithParam: "/dashboard/events/edit/:id",
      Guests: "/dashboard/events/guests/",
    },
  },
  Contact: `${MAIN_APP_URL}/contact`,
  Community: {
    Base: "/community",
    Overview: "",
  },
  Saved: {
    Base: "/saved",
    Overview: "",
  },
  Spaces: {
    Base: "/spaces",
    Overview: "",
    Space: "/spaces/:id",
  },
  Subscription: {
    Base: "/subscription",
    Subscription: "",
    MakePayment: "/subscription/:plan",
  },
  AccountSettings: {
    Base: "/settings",
  },
  Career: "/career",
  Blog: "/blog",
  Partner: "/partner",
  GridTools: "/grid-tools",
  Trending: {
    Base: "/trending",
    Overview: "",
  },
  Terms: "/terms-and-conditions",
  Privacy: "/privacy-policy",
};

const ROUTES = {};

const DATA = {};

export enum AccountTypes {
  Default = 0,
  Talent = 1,
  Business = 2,
}
export const AccountTypesObj = {
  individual: 0,
  talent: 1,
  business: 2,
};

export enum OnboaringPurpose {
  NotSelected = 0,
  Connection = 1,
  Jobs = 2,
  Showcase = 3,
  ExploreProjects = 4,
  Others = 5,
}

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS = Array(31)
  .fill(0)
  .map((_, i) => i + 1);

const currentYear = new Date().getFullYear();
const startingYear = currentYear - 100;
const stopYear = currentYear - 18;

export const YEARS = Array.from(
  { length: stopYear - startingYear + 1 },
  (_, index) => startingYear + index
);

export const defaultSuggestions = [
  [
    "Production assistant",
    "Producer",
    "Production manager",
    "Project manager",
    "Modelling",
    "Video Editing",
  ],
];

const AppConfig = {
  API_ENDPOINTS,
  ROUTES,
  DATA,
  PATHS,
  ERROR_MESSAGES: {
    InvalidCredentialsProvided: "Invalid Credentials Provided.",
    AuthenticationError: "Authentication Error.",
    BadRequestError: "Bad Request Error.",
    InternalServerError: "Internal Server Error.",
    UserAlreadyExists:
      "This email address provided is associated with an existing account.",
    InvalidLinkProvided: "The link provided is either invalid or has expired.",
    ResourceNotFound: "Unable to process. Resource not found.",
    AlreadyInWaitlist: "You're already in the waitlist.",
    AlreadySubscribed: "You have already subcribed to our newsletter.",
    AlreadyLinked:
      "You have already submitted your LinkedIn Profile, thank you.",
    AlreadySubmitted: "You have already submitted your address, thank you.",
    ServerError: "Unable to process request. Please try again later.",
    ValidationError: "All fields are required",
  },
  STRINGS: {
    RegistrationSuccessful: "Registration successful.",
    PasswordLinkSent:
      "A password reset link has been sent to your email account.",
    PasswordResetSuccessful: "Password has been reset successfully.",
    PasswordChangeSuccessful: "Password changed successfully.",
    PasswordLinkEmailTitle: "Password reset.",
    NewContactSubmission: "New Contact Submission.",
    JoinedWaitlistSuccessfully:
      "Congratulations! you've joined the waitlist successfully.",
    SubscribedSuccessfully:
      "Congratulations! you've subscribed to our newsletter successfully.",
    LinkedInSuccessfully:
      "Thank you! we've received your LinkedIn URL, we'll be in touch.",
    SubmittedSuccessfully:
      "Thank you! we've received your address, we'll be in touch.",
  },
  PRODUCT_OPTIONS: ["Nodes Edu", "Nodes Lab", "Nodes Token"],
  SEO: {
    META_TITLE: "Nodes",
    META_DESCRIPTION: "",
    META_IMAGE: "",
    META_IMAGE_ALT: "Nodes Logo",
    META_IMAGE_WIDTH: "1200",
    META_IMAGE_HEIGHT: "630",
    META_IMAGE_TYPE: "image/png",
    META_IMAGE_QUALITY: "100",
    META_IMAGE_URL_ALT: "Nodes Logo",
    META_IMAGE_WIDTH_ALT: "1200",
    META_IMAGE_HEIGHT_ALT: "630",
    META_IMAGE_TYPE_ALT: "image/png",
    META_IMAGE_QUALITY_ALT: "100",
    META_URL: "https://nodes.vercel.app/", //will change to  the real domain lateR
    META_TYPE: "website",
    META_AUTHOR: "Nodes Dev Team",
    META_PUBLISHER: "Nodes Inc",
    META_PUBLISHED_AT: "2023-09-27",
    META_KEYWORDS: "Nodes,",
  },
  PLACEHOLDERS: {
    Searchbar: "Search",
    Email: "Enter email address",
    Fullname: "Enter your full name",
    Firstname: "Enter your first name",
    Businessname: "Enter your business name",
    Lastname: "Enter your last name",
    Location: "Enter your city",
    Height: "Enter your height",
    Age: "Enter your age",
    Username: "Enter username",
    Profession: "Profession",
    Gender: "Gender",
    Year: "1995",
    LinkedInUrl: "e.g https://www.linkedin.com/in/stephenelufisan/",
    Distinction:
      "Tell us about yourself and what you're doing differently with emerging disruptive technologies in three paragraphs.",
    Password: "Password",
    ConfirmPassword: "Confirm password",
    Image: "Upload Image here",
    Timezone: "Timezone",
    PersomalWebsite: "http://",
    Instagram: "https://www.Instagram.com/in/jane-doe/",
    X: "https://www.Twitter.com/in/jane-doe/",
    LinkedIn: "https://www.linkedin.com/in/jane-doe/",
    Headline: "Ex: Actress, Actor, Director",
    Bio: "Add a short bio to showcase your best self",
    ProjectName: "Ex: Actress, Actor, Director",
    ProjectDescription: "Add a short bio to showcase your best self",
    ProjectUrl: "http://",
    JobTitle: "Enter the title of the job here",
    Hours: "E.g 20",
    JobDescription: "Give more information about the job",
    EventDescription: "Give more information about the event",
    SpaceName: "Enter the name of the space here",
    SpaceDescription: "What is this space about?",
    CardNumber: "1234 1234 1234 1234",
    AddTitle: "Add a title",
    WritePost: "What is your post...",
  },
  OTP_LENGTH: 4,
  OTP_COUNTDOWN: 300,
  ACCOUNT_TYPES: {
    DEFAULT: 0,
    TALENT: 1,
    BUSINESS: 2,
  },
  DATE_OPTIONS: {
    MONTHS: MONTHS.map((x) => ({ value: x, label: `${x}` })),
    DAYS: DAYS.map((x) => ({ value: x, label: `${x}` })),
    YEARS: YEARS.map((x) => ({ value: x, label: `${x}` })),
  },
  SKILL_OPTIONS: [
    // "Production assistant",
    // "Producer",
    // "Production manager",
    // "Project manager",
    // "Modelling",
    // "Video Editing",
    "Art Curator",
    "Architect",
    "Graphic Designer",
    "Fashion Designer",
    "Film Producer",
    "Music Producer",
    "Actor",
    "Actress",
    "Content writer",
    "Visual Artist (Painter/Sculptor)",
    "Jjournalist",
    "Choreographer",
    " Chef",
    "Interior Decorator",
  ],
  PROFESSION_OPTIONS: ["Hiring manager", "Producer", "Director"],
  SUPPORTED_EXTENTIONS: {
    jpeg: "image",
    jpg: "image",
    png: "image",
    // "mp3": "audio",
    // "mp4": "video",
    // "m4a": "video",
    // "gltf": "3d",
    // "obj": "3d",
    // "gif": "3d",
    // "glb": "3d"
  },
  FILE_SIZE_LIMIT: 2, //2mb,
  COMPANY_INFO: {
    Address: "Level 1, 12 Sample St, Sydney NSW 2000",
    Phone: "1800 123 4567",
    Email: "nodes@nodes.com",
  },
};

export default AppConfig;
