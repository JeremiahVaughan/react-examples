import './button.scss'
import {vikingHelmet} from "../../constants/icons";
import Icon from "../icon";

function Button({
                  children,
                  type,
                  loading,
                  svgIcon,
                  ...rest
                }) {
  return (
    <button disabled={loading} className={`button type-${type}`} {...rest}>
      <Icon svg={svgIcon || vikingHelmet} size={2}></Icon>
      {loading ? 'loading...' : children}
    </button>
  )
}

export default Button;
