import React from "react";
import { Link } from "react-router-dom";
import LanguageOptionList from "./LanguageOptionList";
import "./AccountFooter.scss";

class AccountFooter extends React.Component {
  render() {
    return (
      <footer className="accountfooter">
        <LanguageOptionList />
        <div>
          <Link to="/">
            <span>@ 2021 Bang & Olaf</span>
          </Link>
          <span>개인정보 보호정책</span>
          <span>서비스 약관</span>
        </div>
      </footer>
    );
  }
}

export default AccountFooter;
