      import { Outlet } from "react-router-dom";
      import Header from "../Components/Header/Header";

      const getData = async ()=>{
            const res = await fetch('/public/data/data.json')
            const data = await res.json()
            return data
            
      }

      const MainLayout = () => {
            
            return (
                  <div>
                        <Header></Header>
                        <Outlet></Outlet>
                  </div>
            );
      };

      export { MainLayout, getData}