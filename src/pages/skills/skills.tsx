import React, { RefObject } from "react";
import { CssIcon, GitIcon, HtmlIcon, JSIcon, NextIcon, ReactIcon, TSIcon } from "../../assets/icons/skills";
import "./skills.scss";
type SkillsProps = {
  skills: RefObject<any> | undefined;
  isDarkMode: string | null;
};
function Skills({ skills, isDarkMode }: SkillsProps) {
  return (
    <section className='skills-page' ref={skills} id='skills'>
      <h1 datatype='Skills'>Skills</h1>
      <div className='skills-page--skills'>
        <div className='skills-page--languages'>
          <h2 datatype='Skills'>Languages/Libraries</h2>
          <ul>
            <li>
              <HtmlIcon />
              <span>HTML5</span>
            </li>
            <li>
              <CssIcon />
              <span>CSS3</span>
            </li>
            <li>
              <JSIcon />
              <span>JavaScript</span>
            </li>
            <li>
              <TSIcon />
              <span>TypeScript</span>
            </li>
            <li>
              <ReactIcon className='SpinIcon' />
              <span>React</span>
            </li>
            <li>
              <NextIcon fill={isDarkMode === "dark" ? "#7be5be" : "#000000"} />
              <span>Next.JS</span>
            </li>
          </ul>
        </div>
        <div className='skills-page--languages'>
          <h2 datatype='Skills'>Devtools</h2>
          <ul>
            <li>
              <GitIcon />
              <span>Git</span>
            </li>
          </ul>
        </div>
        <div className='skills-page--languages'>
          <h2 datatype='Skills'>Learning In Progress</h2>
          <ul>
            <li>
              <HtmlIcon />
              <span>NodeJS</span>
            </li>
            <li>
              <CssIcon />
              <span>GraphQL</span>
            </li>
            <li>
              <NextIcon fill={isDarkMode === "dark" ? "#7be5be" : "#000000"} />
              <span>Next.JS</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// <section className='skills-page' ref={skills} id='skills'>
//   <div className='skills-page--content'>
//     <h1 datatype='Skills'>Skills</h1>

//     <div className='skills-page--skills'>
//       <div className='languages'>
//         <h2 datatype='Skills'>Languages</h2>
//         <ul>
//           <li>
//             <HtmlIcon fill={!darkMode ? "#000" : "#fff"} />
//             <span>HTML5</span>
//           </li>
//           <li>
//             <HtmlIcon fill='#fff' />
//             <span>HTML5</span>
//           </li>
//           <li>
//             <HtmlIcon fill='#fff' />
//             <span>HTML5</span>
//           </li>
//           <li>
//             <HtmlIcon fill='#fff' />
//             <span>HTML5</span>
//           </li>
//           <li>
//             <HtmlIcon fill='#fff' />
//             <span>HTML5</span>
//           </li>
//         </ul>
//       </div>

//       {/* <div className='devtools'>
//         <h2 datatype='Skills'>Dev Tools</h2>
//         <ul>
//           <li>
//             <HtmlIcon fill='#fff' />
//             <span>Git</span>
//           </li>
//         </ul>
//       </div> */}

//       {/* <div className='devtools'>
//         <h2 datatype='Skills'>CSS Frameworks</h2>
//         <ul>
//           <li>
//             <img style={{ width: "24px" }} src={BootstrapIcon} alt='Bootstrap Icon' />
//             <span>Bootstrap</span>
//           </li>
//           <li>
//             <img style={{ width: "24px" }} src={MaterialUI} alt='Material UI' />
//             <span>Material UI</span>
//           </li>
//           <li>
//             <img style={{ width: "24px" }} src={TailwindCSS} alt='Bootstrap Icon' />
//             <span>TailWind CSS</span>
//           </li>
//           <li>
//             <img style={{ width: "24px" }} src={MaterializeIcon} alt='Materialize Icon' />
//             <span>Materialize CSS</span>
//           </li>
//         </ul>
//       </div> */}
//     </div>

//     <p>
//       You must be wondering what I have done with all the things above.
//       <br /> Well,
//       <Link to='/project'> here you go</Link>.
//     </p>
//   </div>
// </section>
export default Skills;
