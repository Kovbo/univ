import React from "react";
import { Link } from "react-router-dom";
import { usePageData } from "../context/PageDataProvider";

function PageTitleBar() {
  const pageData = usePageData();

  return (
    <div className="toolbar py-5 py-lg-2" id="kt_toolbar">
      <div id="kt_toolbar_container" className="container d-flex flex-stack">
        <div className="page-title d-flex flex-column">
          <h1 className="d-flex text-white fw-bold my-1 fs-3">
            {pageData.state.pageTitle}
          </h1>
        </div>
        {pageData.state.pageActionTitle && pageData.state.pageActionLink && (
          <div className="d-flex align-items-center py-1">
            <Link
              to={pageData.state.pageActionLink}
              className="btn btn-bg-white btn-active-color-primary cursor-pointer"
              style={{ color: "rgb(24, 28, 50)" }}
            >
              {pageData.state.pageActionTitle}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageTitleBar;
