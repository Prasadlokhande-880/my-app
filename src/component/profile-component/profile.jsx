import React, { useState, useEffect } from "react";
import "./profile.css";
import Map from "./mapcode";
import Navbar from "../HomePage-Component/Navbar";
const ProfilePage = () => {
  const [userData, setUserData] = useState({
    id: "",
    imageUrl: "",
    name: "",
    description: "",
    email: "",
    institution: "",
    profession: "",
    discussProfile: "",
    teamsList: "",
    country: "",
    teamName: "",
  });

  useEffect(() => {
    // Fetch data from localStorage based on the key
    const key = localStorage.getItem("key");
    const storedCards = JSON.parse(localStorage.getItem("cards"));

    console.log(key);

    // Find the user data from storedCards based on the id
    const storedUserData = storedCards.find((card) => card.id === key);
    console.log(storedUserData);
    // Update userData state with fetched data
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  return (
    <>
      <Navbar />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="profile.css" />
      <div className="main-content">
        {/* User */}
        <ul className="navbar-nav align-items-center d-none d-md-flex">
          <li className="nav-item dropdown">
            <a
              className="nav-link pr-0"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="media align-items-center">
                <div className="media-body ml-2 d-none d-lg-block"></div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-single-02"></i>
                <span>My profile</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-settings-gear-65"></i>
                <span>Settings</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-calendar-grid-58"></i>
                <span>Activity</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-support-16"></i>
                <span>Support</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
      {/* Header */}
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://raw.githubusercontent.com/creativetimofficial/argon-dashboard/gh-pages/assets-old/img/theme/profile-cover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Header container */}
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <h1 className="display-2 text-white">Hello {userData.name}</h1>
              <p className="text-white mt-0 mb-5">{userData.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Map />
      </div>
      {/* Page content */}
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div className="card card-profile shadow">
              <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                  <div className="profile-picture">
                    <div className="card-profile-image">
                      <img
                        src={
                          userData.imageUrl ||
                          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                        }
                        className="rounded-circle"
                        alt="profile-pic"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-header text-center border-0 pt-8 pt-md-4"></div>
              <div className="card-body pt-0 pt-md-4">
                <div className="row">
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 order-xl-1">
            <div className="card bg-secondary shadow">
              <div className="card-header bg-white border-0">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h3 className="mb-0">My account</h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control form-control-alternative"
                            placeholder="Username"
                            name="username"
                            value={userData.username}
                            disabled={true}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            id="input-email"
                            name="email"
                            className="form-control form-control-alternative"
                            placeholder="jesse@example.com"
                            value={userData.email}
                            disabled={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Institution
                          </label>
                          <input
                            type="text"
                            id="input-first-name"
                            className="form-control form-control-alternative"
                            placeholder="Institution"
                            name="institution"
                            value={userData.institution}
                            disabled={!userData.isEditMode}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Profession
                          </label>
                          <input
                            type="text"
                            id="input-last-name"
                            className="form-control form-control-alternative"
                            placeholder="Profession"
                            name="profession"
                            value={userData.profession}
                            disabled={!userData.isEditMode}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Discuss Profile
                          </label>
                          <input
                            id="input-address"
                            className="form-control form-control-alternative"
                            placeholder="Discuss Profile"
                            name="discussProfile"
                            value={userData.discussProfile}
                            disabled={!userData.isEditMode}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-teamsList"
                          >
                            Teams List
                          </label>
                          <input
                            type="text"
                            id="input-teamsList"
                            className="form-control form-control-alternative"
                            placeholder="Teams List"
                            name="teamsList"
                            value={userData.teamsList}
                            disabled={!userData.isEditMode}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            id="input-country"
                            className="form-control form-control-alternative"
                            placeholder="Country"
                            name="country"
                            value={userData.country}
                            disabled={!userData.isEditMode}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-team-name"
                          >
                            Team Name
                          </label>
                          <input
                            type="text"
                            id="input-team-name"
                            className="form-control form-control-alternative"
                            placeholder="Team Name"
                            name="teamInvites"
                            value={userData.teamName}
                            disabled={!userData.isEditMode}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
