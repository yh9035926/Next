import React from "react";

import PropTypes from "prop-types";
import wrapper from "../store/configureStore";

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
export default wrapper.withRedux(NodeBrid);
