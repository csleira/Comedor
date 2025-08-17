import { Outlet } from "react-router-dom"
import FooterComp from "./footer_comp"
import HeaderComp from "./header_comp"

const LayautComp = () => {

  return (
    <div>
        <HeaderComp></HeaderComp>
        <main>
          <Outlet />
        </main>
        <FooterComp></FooterComp>
    </div>
  )
}

export default LayautComp