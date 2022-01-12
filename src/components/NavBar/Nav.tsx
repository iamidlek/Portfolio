import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu/Menu";
import { NavBar, ProfileImageBox } from "./NavStyle";

const Nav = () => {
  return (
    <NavBar>
      <ProfileImageBox>
        <Link href={`/`}>
          <a>
            <div title="Home">
              <Image
                src="https://avatars.githubusercontent.com/u/75520260?v=4"
                alt="logo"
                width="160"
                height="160"
              />
            </div>
          </a>
        </Link>
      </ProfileImageBox>
      <Menu />
    </NavBar>
  );
};

export default Nav;
