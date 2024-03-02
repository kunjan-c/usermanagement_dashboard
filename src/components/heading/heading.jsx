import PropTypes from "prop-types";
 import "./heading.css";
const Heading = ({headingText}) => {
  return (
    <div className="section-heading-text">{headingText}</div>
  )
}
Heading.propTypes = {
    headingText: PropTypes.string.isRequired
  };

export default Heading