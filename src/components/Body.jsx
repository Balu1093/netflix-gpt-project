import Login from "./Login"
import Browse from './Browse'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import { useEffect } from "react";


const Body = () => {
  
  const appLayout = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ]);

return (
    <div className="w-[100%] h-[100%] overflow-x-hidden scroll-smooth">
    <RouterProvider router={appLayout}/>
    </div>
)}



export default Body