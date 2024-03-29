import React from "react";
import Login from "./Login";
import StickyFooter from "./StickyFooter"
import CreateButton from "./CreateButton"

class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div
                      className="flex-grow-1 bg-login-image"
                      style={{
                        backgroundImage: 'url("assets/img/dogs/image3.jpeg")'
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <Login />
                  <CreateButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StickyFooter />
      </div>
      );
  }
}

export default Index;
