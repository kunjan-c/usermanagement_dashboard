import "./cardBox.css";
import PropTypes from "prop-types";

const CardBox = ({children}) => {
  return (
   
    <div className="card-conatiner ">
        {children}
    </div>
   
  )
}

CardBox.propTypes = {
    children: PropTypes.node.isRequired 
  };
  
export default CardBox