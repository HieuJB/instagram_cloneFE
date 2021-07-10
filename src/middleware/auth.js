export default function auth({ next, router }) {
    if (localStorage.getItem('token')) {
       return router.push('google.com');
    }
    return next();
  }