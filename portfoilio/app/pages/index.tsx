import Link from "next/link";
import About from "../about/about";


export default function Home() {
  return (
    <div>
      <Link href="/about">
        <img
          src="/images/frog.png"
          alt="About Me"
          style={{ width: 1000, cursor: 'pointer' }}
        />
      </Link>
    </div>
  );
}


//       {/* Or just inline */}
//       <p>
//         Here is a clickable image link:{' '}
//         <Link href="./projects/projects.tsx" passHref>
//           <a>
//             <img
//               src="/images/wireframeshowingpage.png"
//               alt="Clickable Image Link"
//               style={{ width: 50, cursor: 'pointer' }}
//             />
//           </a>
//         </Link>
//       </p>
//     </div>
//   );
// }