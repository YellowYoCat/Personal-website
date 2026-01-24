// import Link from "next/link";
// import Image from "next/image";
// import "./about.css";

// export default function AboutPage() {
//   return (
//     <main className="about-container">
//       <Image
//         src="/images/pond.png"
//         alt="Custom art background"
//         fill
//         className="about-bg"
//         priority
//       />


      
//       <h1 className="about-title">About Me</h1>

//       <div className="text-background">
//         <p className="about-text">
//           I’m a front-end developer and UI/UX designer who 
//           loves building engaging interfaces
//            and thoughtful user experiences. 
//            I work comfortably with modern frameworks like 
//            React and Next.js, and I enjoy bringing designs 
//            to life with smooth, purposeful animations using 
//            tools like Motion. I’m always excited to learn new
//            languages and technologies, and I thrive in collaborative 
//            environments where front-end, back-end, and design 
//            come together to create great products.
//         </p>
//       </div>

//       <div>
//         <p>Click on me to go back home!</p>
//         <Link href="/" className="duck-link">
//         <div className="cursor-hover home-cursor">
//           <Image
//             src="/images/duck.png"
//             alt="Duck"
//             width={220}
//             height={220}
//             className="duck"
//             priority
//           />
//         </div>
//       </Link>
//       </div>

      
//     </main>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import "./about.css";

export default function AboutPage() {
  return (
    <main className="about-container">
      <Image
        src="/images/pond.png"
        alt="Custom art background"
        fill
        className="about-bg"
        priority
      />

      <h1 className="about-title">About Me</h1>

      <div className="text-background">
        <p className="about-text">
          I'm a front-end developer and UI/UX designer who 
          loves building engaging interfaces
           and thoughtful user experiences. 
           I work comfortably with modern frameworks like 
           React and Next.js, and I enjoy bringing designs 
           to life with smooth, purposeful animations using 
           tools like Motion. I'm always excited to learn new
           languages and technologies, and I thrive in collaborative 
           environments where front-end, back-end, and design 
           come together to create great products.
        </p>
      </div>

      <div className="duck-container">
        <p className="duck-instruction">Click on me to go back home!</p>
        <Link href="/" className="duck-link">
          <div className="cursor-hover home-cursor">
            <Image
              src="/images/duck.png"
              alt="Duck"
              width={220}
              height={220}
              className="duck"
              priority
            />
          </div>
        </Link>
      </div>
    </main>
  );
}