import { Link } from "react-router-dom";
const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  },
  // add the other link as well
];
export const Navbar = () => {
  return (
    <>
      <h1>I'm Navbar</h1>
      <ul>
        {links.map((e, index) => {
          return (
            <>
              <Link key={index} to={e.link}>
                <li id={e.id}>{e.title}</li>
              </Link>
            </>
          );
        })}
      </ul>
    </>
  );
};
