import React from "react";
import { withRouteData } from "react-static";

import PrevNextLinks from "./PrevNextLinks";

export default withRouteData(({ title, contents, prevPage, nextPage }) => (
  <div>
    <br />
    <h3>{title}</h3>
    <div dangerouslySetInnerHTML={{ __html: contents }} />
    <PrevNextLinks prevPage={prevPage} nextPage={nextPage} />
  </div>
));
