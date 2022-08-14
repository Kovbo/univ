import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { regions, universityTypes } from "../features/universities/api/filters";

const DEFAULT_FILTERS = {
  REGION: "80",
  TYPE: "1",
};

// const link = {
//   pathname: "/universities",
//   param1: "Par1",
// };

function Home() {
  return (
    <div
      className="d-flex flex-column flex-root"
      id="kt_app_root"
      style={{ height: "100vh" }}
    >
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        <div className="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10">
          <div className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px">
            <div className="py-20">
              <form className="form w-100" id="kt_new_password_form" action="#">
                <div className="text-start mb-10">
                  <h1 className="text-dark mb-10 fs-3x">
                    База даних ВНЗ України
                  </h1>
                  <div className="text-gray-400 fw-semibold fs-6">
                    Оберіть область:
                  </div>
                  <Select
                    defaultValue={regions.filter(
                      (el) => el.value === DEFAULT_FILTERS.REGION
                    )}
                    options={regions}
                  />
                </div>

                <div className="text-start mb-10">
                  <div className="text-gray-400 fw-semibold fs-6">
                    Оберіть тип навчального закладу:
                  </div>
                  <Select
                    defaultValue={
                      universityTypes.filter(
                        (el) => el.value === DEFAULT_FILTERS.TYPE
                      )[0]
                    }
                    options={universityTypes}
                  />
                </div>

                <div className="fv-row mb-10"></div>
                <div className="d-flex flex-stack">
                  <Link to="/universities">
                    <button
                      id="kt_new_password_submit"
                      className="btn btn-primary"
                    >
                      <span className="indicator-label">Пошук</span>
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="home-backgound-photo d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat" />
      </div>
    </div>
  );
}

export default Home;
