import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import wrapper from "../store/configureStore";

const NodeBrid = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
        <Component />
      </Head>
    </>
  );
};
NodeBrid.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(NodeBrid);
