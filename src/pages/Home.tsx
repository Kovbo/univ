import { Link } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import { useTranslation } from "react-i18next";
import { regions, universityTypes } from "../features/universities/api/filters";
import { useState } from "react";

const DEFAULT_FILTERS = {
  REGION: "80",
  TYPE: "1",
};

function Home() {
  const { t } = useTranslation();
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(
    DEFAULT_FILTERS.REGION
  );
  const [selectedType, setSelectedType] = useState<string | undefined>(
    DEFAULT_FILTERS.TYPE
  );

  const universityTypesTranslated = universityTypes.map((type) =>
    translateFilter(type)
  );

  const regionsTranslated = regions.map((region) => translateFilter(region));

  function translateFilter(item: { value: string; label: string }) {
    return {
      ...item,
      label: t(item.label),
    };
  }

  // let selectedRegion: string | undefined = "";
  // let selectedType: string | number | undefined = "";

  function regionFilterInputHandler(
    e: SingleValue<{ value: string; label: string }>
  ) {
    setSelectedRegion(e?.value);
  }

  function universityTypeFilterInputHandler(
    e: SingleValue<{ value: string; label: string }>
  ) {
    setSelectedType(e?.value);
  }

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
                    {t("Home page header")}
                  </h1>
                  <div className="text-gray-400 fw-semibold fs-6">
                    {t("Choose region:")}
                  </div>
                  <Select
                    defaultValue={
                      regionsTranslated.filter(
                        (el) => el.value === DEFAULT_FILTERS.REGION
                      )[0]
                    }
                    onChange={regionFilterInputHandler}
                    options={regionsTranslated}
                  />
                </div>

                <div className="text-start mb-10">
                  <div className="text-gray-400 fw-semibold fs-6">
                    {t("Choose university type:")}
                  </div>
                  <Select
                    defaultValue={
                      universityTypesTranslated.filter(
                        (el) => el.value === DEFAULT_FILTERS.TYPE
                      )[0]
                    }
                    onChange={universityTypeFilterInputHandler}
                    options={universityTypesTranslated}
                  />
                </div>

                <div className="fv-row mb-10"></div>
                <div className="d-flex flex-stack">
                  <Link
                    to={`/universities?region=${selectedRegion}&type=${selectedType}`}
                  >
                    <button
                      id="kt_new_password_submit"
                      className="btn btn-primary"
                    >
                      <span className="indicator-label">
                        {t("Show results")}
                      </span>
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
