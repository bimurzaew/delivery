import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

function Main() {
  return (
    <>
      <Box>
        <Typography>
          <a href="/food">
            Еда
          </a>
        </Typography>
        <Typography>
          Продукты
        </Typography>
      </Box>
    </>
  );
}
export default Main;
