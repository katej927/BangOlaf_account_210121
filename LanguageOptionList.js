import React from "react";
import FOOTERLANGUAGE from "./Languagedata";
import "./LanguageOptionList.scss";

class LanguageOptionList extends React.Component {
  render() {
    return (
      <div className="languageOptionList">
        <select name="languageTranslation" id="languageSelect">
          {FOOTERLANGUAGE.map((data) => {
            return (
              <option value="" key={data.id}>
                {data.languageType}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default LanguageOptionList;
