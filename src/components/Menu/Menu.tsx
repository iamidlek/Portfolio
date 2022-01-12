import { MenuContainer, MenuItem, IconBox } from "./MenuStyle";
import { VscAccount, VscBeaker, VscRocket, VscCode } from "react-icons/vsc";
import Link from "next/link";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <Link href={`/about`}>
          <a>
            <IconBox title="About">
              <VscAccount />
            </IconBox>
            <strong>About</strong>
          </a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href={`/skill`}>
          <a>
            <IconBox title="Skill">
              <VscCode />
            </IconBox>
            <strong>Skill</strong>
          </a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href={`/project`}>
          <a>
            <IconBox title="Project">
              <VscRocket />
            </IconBox>
            <strong>Project</strong>
          </a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href={`/repo`}>
          <a>
            <IconBox title="Repository">
              <VscBeaker />
            </IconBox>
            <strong>Repository</strong>
          </a>
        </Link>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
