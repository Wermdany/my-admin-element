const tail = [
  {
    path: "/404",
    component: "page404",
    hidden: true,
    name: "404"
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];
export default tail;
