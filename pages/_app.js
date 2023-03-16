import React from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";

const NodeBrid = ({ Component }) => {
  return (
    <>
     
      <Component />
    </>
  );
};
NodeBrid.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default NodeBrid;
