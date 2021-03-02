import { changeLocale, injectIntl } from "gatsby-plugin-intl"

import EspSvg from "../components/svg/espsvg"
import FrSvg from "../components/svg/frsvg"
import React from "react"
import UsaSvg from "../components/svg/usasvg"

const LocaleToggle = ({ intl }) => {
  const languages = [
    { language: "es", flag: <EspSvg width={20} height={20} /> },
    { language: "en", flag: <UsaSvg width={20} height={20} /> },
    { language: "fr", flag: <FrSvg width={20} height={20} /> },
  ]

  // Set current language flag
  const setCurrentLocale = () => {
    let loc = ""
    switch (intl.locale) {
      case "en":
        loc = <UsaSvg width={20} height={20} />
        break
      case "fr":
        loc = <FrSvg width={20} height={20} />
        break
      case "es":
        loc = <EspSvg width={20} height={20} />
        break
      default:
        loc = <FrSvg width={20} height={20} />
    }
    return loc
  }

  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">{setCurrentLocale()}</a>
      <div className="navbar-dropdown">
        {/* Filter current language then render object flag from language array */}
        {languages
          .filter(loc => loc.language !== intl.locale)
          .map((e, i) => {
            return (
              <a
                key={i}
                className="navbar-item pr-0"
                onClick={() => changeLocale(e.language)}
              >
                {e.flag}
              </a>
            )
          })}
      </div>
    </div>
  )
}

export default injectIntl(LocaleToggle)
