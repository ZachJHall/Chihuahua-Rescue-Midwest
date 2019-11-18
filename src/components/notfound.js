import React from "react";
import Icon from "@material-ui/icons/Error";

import "../CSS/home.css";

const NotFound = () => {
  return (
    <div className="center">
      <Icon fontSize="large" color="action" />
      <h1>Page not found</h1>
    </div>
  );
};
export default NotFound;
