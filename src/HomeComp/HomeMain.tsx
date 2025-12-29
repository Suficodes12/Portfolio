import { Banner } from "./Banner"
import Contact from "./Contact"
// import App from "./Fourth"c
import FrontendSkills from "./Fourth"

import { Second } from "./Second"
import { Third } from "./Third"


export const HomeMain = () => {
  return (
 <div className="conatiner mx-auto">
 <Banner/>
 <Second/>
 <Third/>
 <FrontendSkills/>
 <Contact/>
 </div>
  )
}
