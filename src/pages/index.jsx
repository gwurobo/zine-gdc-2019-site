import React from "react";
import { withRouteData, Head } from "react-static";
import { Link } from "@reach/router";

import TableOfContents from "../containers/TableOfContents";

import "./index.css";

export default withRouteData(({ openingStatement }) => (
  <>
    <Head title={`GWU GDC 2019 Zine`} />
    <div className="intro-container">
      <img className="intro-image" src="images/isabelle-clearbg.png" />
      <div dangerouslySetInnerHTML={{ __html: openingStatement.contents }} />
      <Link to="/01-intro">
        <h1 className="intro-readzine">Read the Zine!</h1>
      </Link>
      <TableOfContents />
    </div>
  </>
));
