import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import PageTitleBar from "./header/PageTitleBar";
import { PageDataProvider } from "../context/PageDataProvider";
import HeaderWrapper from "./header/HeaderWrapper";

function MasterLayout() {
  return (
    <>
      {/* <ThemeModeProvider> */}
      <div id="master-wrapper">
        <PageDataProvider>
          <HeaderWrapper />
          <Container fluid>
            <PageTitleBar></PageTitleBar>
            <Container className="mt-10">
              <Outlet />
            </Container>
            {/* <Footer /> */}
          </Container>
        </PageDataProvider>
        {/* </ThemeModeProvider> */}
      </div>
    </>
  );
}

export default MasterLayout;
