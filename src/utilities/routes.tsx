export const ROUTES = Object.freeze({
  BASE_URL: "/",
  PRODUCTS: "/products",
  PRICING: "/pricing",
  ABOUT_US: "/about-us",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  GET_THE_APP: "/get-the-app",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_OF_USE: "/terms-of-use",
});

export const headerRoutes = [
  {
    name: "Plans & Pricing",
    route: ROUTES.PRICING,
  },
  {
    name: "About Us",
    route: ROUTES.ABOUT_US,
  },
  {
    name: "Get the App",
    route: ROUTES.GET_THE_APP,
  },
];
