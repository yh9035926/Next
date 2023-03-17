import React from "react";

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
