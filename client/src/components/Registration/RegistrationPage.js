import React from "react";
import BusinessName from "./BusinessName";
import Address from "./Address";
import TownCity from "./TownCity";
import State from "./State";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import FirstPassword from "./FirstPassword";
import SecondPassword from "./SecondPassword";
import SubmitCreate from "./SubmitCreate";
import SubmitCreateGoogle from "./SubmitCreateGoogle";
import SubmitCreateFacebook from "./SubmitCreateFacebook";
import GoToLogin from "./GoToLogin";

class RegistrationPage extends React.Component {
  render() {
    return (
      <div className="p-5">
        <div className="text-center">
          <h4 className="text-dark mb-4">Create an Account!</h4>
        </div>
        <form className="user">
          <div className="form-group row">
            <BusinessName></BusinessName>
          </div>
          <div className="row">
            <Address></Address>
          </div>
          <div className="form-group row">
            <TownCity></TownCity>
            <State></State>
          </div>
          <div className="form-group row">
            <FirstName></FirstName>
            <LastName></LastName>
          </div>
          <Email></Email>
          <div className="form-group row">
            <FirstPassword></FirstPassword>
            <SecondPassword></SecondPassword>
          </div>
          <SubmitCreate></SubmitCreate>
          <hr />
          <SubmitCreateGoogle></SubmitCreateGoogle>
          <SubmitCreateFacebook></SubmitCreateFacebook>
          <hr />
        </form>
        <GoToLogin></GoToLogin>
      </div>
    );
  }
}

export default RegistrationPage;
