import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LogInAction, HandleLogType, SignUpAtion } from "../Redux/StoreSlice";
import { useRouter } from "next/router";
import Head from "next/head";

function Register() {
  let [defaultView, setdefaultView] = useState(true);
  let [user, setUserName] = useState();
  let [Pass, setUserPassword] = useState();
  let [NewUser, setNewUserName] = useState();
  let [newPass, setnewPass] = useState();
  let [newEmail, setNewEmail] = useState();
  let [newPhone, setnewPhone] = useState();
  let [Newstage, setNewStage] = useState();
  let [NewAddress, setNewAddress] = useState();
  let [age_group, setage_group] = useState();
  let dispatch = useDispatch();
  let { logSuccess, logError } = useSelector((s) => s.ASRStore);
  const router = useRouter();

  const handleLogIn = () => {
    router.push("/dashboard");
  };
  const handleSignUp = () => {
    router.push("/profile");
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="kindergarten" />
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="Register">
        <div className="over-lay">
          {logError ? (
            <div class="alert alert-danger alert-dismissible fade show">
              <strong>Error!</strong> The username or password you entered is
              wrong
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
              ></button>
            </div>
          ) : (
            ""
          )}
          {defaultView ? (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(LogInAction({ user, Pass }));
                if (logSuccess) {
                  handleLogIn();
                  dispatch(HandleLogType());
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <div className="head">Login Now</div>
              <div className="lable">User Name</div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                required
              />
              <div className="lable">Password</div>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your Password"
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                required
              />
              <input
                type="submit"
                className="form-control"
                value="LOGIN"
                id="submit"
              />
              <div
                className="signbtn"
                onClick={(e) => {
                  setdefaultView(false);
                }}
              >
                New Member?
              </div>
            </Form>
          ) : (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  SignUpAtion({
                    NewUser,
                    newPass,
                    newEmail,
                    newPhone,
                    Newstage,
                    NewAddress,
                    age_group,
                  })
                );
                handleSignUp();
              }}
              className="sign"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <div className="head">SignUp Now</div>
              <Row>
                <Col xs="12" sm="12" md="6" lg="6" className="sign-box">
                  <div className="lable">User Name</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Like Ahmed Mohamed"
                    onChange={(e) => {
                      setNewUserName(e.target.value);
                    }}
                    required
                  />
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" className="sign-box">
                  <div className="lable">Password</div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Password"
                    onChange={(e) => {
                      setnewPass(e.target.value);
                    }}
                    required
                  />
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" className="sign-box">
                  <div className="lable">Email</div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@example.com"
                    onChange={(e) => {
                      setNewEmail(e.target.value);
                    }}
                    required
                  />
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" className="sign-box">
                  <div className="lable">Mobile Phone</div>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="+2010000000000"
                    onChange={(e) => {
                      setnewPhone(e.target.value);
                    }}
                    required
                  />
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" className="sign-box">
                  <div className="lable">Address</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Like Tanta , 24 St Albahr"
                    onChange={(e) => {
                      setNewAddress(e.target.value);
                    }}
                    required
                  />
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" className="sign-box">
                  <div className="lable">Child Age Group</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Like 8"
                    onChange={(e) => {
                      setage_group(e.target.value);
                    }}
                    required
                  />
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" className="sign-box">
                  <div className="lable">Study Stage</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Like Primary"
                    onChange={(e) => {
                      setNewStage(e.target.value);
                    }}
                    required
                  />
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" className="sign-box">
                  <div className="lable">Comments</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Any comments ...?"
                  />
                </Col>
              </Row>

              <input
                type="submit"
                className="form-control"
                value="SIGNUP"
                id="submit"
              />
              <div
                className="signbtn"
                onClick={(e) => {
                  setdefaultView(true);
                }}
              >
                You already have an account, Login here
              </div>
            </Form>
          )}
        </div>
      </div>
    </>
  );
}

export default Register;
