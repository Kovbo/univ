import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import HeaderWrapper from "./header/HeaderWrapper";

function MasterLayout() {
  return (
    <>
      {/* <PageDataProvider> */}
      {/* <ThemeModeProvider> */}
      <Container fluid>
        <HeaderWrapper />
        <Container className="mt-5">
          <Outlet />
        </Container>
        {/* <Footer /> */}
      </Container>

      {/* </ThemeModeProvider> */}

      {/* /</PageDataProvider> */}
    </>
  );
}

export default MasterLayout;
