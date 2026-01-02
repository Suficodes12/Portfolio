import { Banner } from "./Banner"
import Contact from "./Contact"
// import App from "./Fourth"c
import FrontendSkills from "./Fourth"

import { Second } from "./Second"
import { Third } from "./Third"


export const HomeMain = ({TopRef, skillsRef, AboutRef, contactRef, ProjectRef }: any) => {
  return (
 <div className="conatiner mx-auto">
 
 <div ref={TopRef}>
 <Banner/>
</div>

 <div ref={AboutRef}>
 <Second/>
 </div>

<div ref={ProjectRef}>
 <Third/>
 </div>

      <div ref={skillsRef}>
        <FrontendSkills />
      </div>

  <div ref={contactRef}>
        <Contact />
      </div>
 </div>
  )
}
