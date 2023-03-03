export const ROUTES = {
  root: '/',
  dashboard: '/dashboard',
  about: '/about',
  explore: '/explore',
  auth: '/auth',
};

export enum LanguageKeysEnum {
  en = 'en',
}

export enum AuthMode {
  login = 'login',
  signup = 'signup',
}
export type AuthModeType = AuthMode.login | AuthMode.signup;


export const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};