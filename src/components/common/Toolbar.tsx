import { faBars, faCartShopping, faShareNodes, faStar, faX, faHouse, faGear } from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon } from "./ButtonIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

export interface ToolbarProps {
  ToolbarItems?: React.ReactNode
}

export function Toolbar({ ToolbarItems }: ToolbarProps) {
  const location = useLocation();

  function renderToolbar() {

    return (
      <div className="toolbar flex flex-center just-center gap-1">
        <ButtonIcon
          icon={<FontAwesomeIcon icon={faHouse} />}
          classes={`primary-color border-r-10${location.pathname === '/' ? ' selected' : ''}`}
          tooltip="Home"
          linkTo={"/"}
        />

        <ButtonIcon
          icon={<FontAwesomeIcon icon={faCartShopping} />}
          classes={`gold border-r-10${location.pathname === '/cart' ? ' selected' : ''}`}
          tooltip="Carrello"
          linkTo={"/cart"}
        />

        <ButtonIcon
          icon={<FontAwesomeIcon icon={faStar} />}
          classes={`gold border-r-10${location.pathname === '/favorites' ? ' selected' : ''}`}
          tooltip="Preferiti"
          linkTo={"/favorites"}
        />

        <ButtonIcon
          icon={<FontAwesomeIcon icon={faGear} />}
          classes={`gray border-r-10${location.pathname === '/settings' ? ' selected' : ''}`}
          tooltip="Impostazioni"
          linkTo={"/settings"}
        />
      </div>
    )
  }

  return renderToolbar()
}