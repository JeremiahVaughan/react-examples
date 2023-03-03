import useNavigation from "../../hooks/use-navigation";
import './link.scss';

function Link({to, children}) {
  const { navigate, currentPath } = useNavigation()

  const handleClick = event => {
    if (isControlKeyOnMacOsHeldDown(event) || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return <a className={currentPath === to ? "active-link" : ""} href={to} onClick={handleClick}>{children}</a>
}


export default Link;

function isControlKeyOnMacOsHeldDown(event) {
  return event.metaKey;
}

