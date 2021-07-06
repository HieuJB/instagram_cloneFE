import { createRouter,createWebHistory } from "vue-router";
import Login from "./pages/Login";
import Registraion from "./pages/Registration"
const meta = {
    progress: {
      func: [
        { call: "color", modifier: "temp", argument: "#00c8ff" },
        { call: "fail", modifier: "temp", argument: "#6e0000" },
        { call: "location", modifier: "temp", argument: "top" },
        {
          call: "transition",
          modifier: "temp",
          argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
        },
      ],
    },
};
const routes=[
    {
        path:"/",
        component:Login,
        meta: meta
    },
    {
        path:"/registration",
        component:Registraion,
        meta: meta
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;