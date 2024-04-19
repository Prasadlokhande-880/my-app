import React, { useState } from "react";
import icon1 from "./facebook.png";
import icon2 from "./instagram.png";
import icon3 from "./linkedin.png";
import icon4 from "./twitter.png";
import "./contactform.css";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "../component/HomePage-Component/Navbar";
const Contact = () => {
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   gender: '',
  //   location: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log(formData);
  //   // Reset form fields
  //   setFormData({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     gender: '',
  //     location: '',
  //     message: ''
  //   });
  // };

  return (
    <div className="mar">
      <Navbar />
      <div className="contact_form">
        <div className="contact_form_sideBar">
          <p className="PhysicsSansar">Physics Sansar</p>

          <div className="sub">
            <ul>
              <li className="social_media">
                <img
                  src={icon1}
                  alt="Facebook Icon"
                  width={"40px"}
                  height={"40px"}
                />
                <a
                  href="https://www.facebook.com/quantemjeeacademy/"
                  target="_blank"
                >
                  <p className="links">@PhysicsSansar</p>
                </a>
              </li>
              <li className="social_media">
                <img
                  src={icon2}
                  alt="Instagram Icon"
                  width={"40px"}
                  height={"40px"}
                />
                <a
                  href="https://www.instagram.com/quantemjeeacademy/?hl=en"
                  target="_blank"
                >
                  <p className="links">@PhysicsSansar</p>
                </a>
              </li>
              <li className="social_media">
                <img
                  src={icon3}
                  alt="LinkedIn Icon"
                  width={"40px"}
                  height={"40px"}
                />
                <a
                  href="https://www.youtube.com/@QuantEMJEEAcademy"
                  target="_blank"
                >
                  <p className="links">@PhysicsSansar</p>
                </a>
              </li>
              <li className="social_media">
                <img
                  src={icon4}
                  alt="Twitter Icon"
                  width={"40px"}
                  height={"40px"}
                />
                <a target="_blank">
                  <p className="links">@PhysicsSansar</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact_form_mainBar">
          <p className="contact_form_heading">We'd love to help</p>
          <p className="contact_form_subheading">
            Reach out and we'll get in touch within 24 hours.
          </p>

          <div className="input_form">
            <form
              //onSubmit={handleSubmit}
              action="https://formspree.io/f/xayraowa"
  method="POST"
            >
              <section className="form_group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  // value={formData.firstName}
                  // onChange={handleChange}
                  required
                />

                <div className="form_group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    // value={formData.lastName}
                    // onChange={handleChange}
                    required
                  />
                </div>

                <div className="form_group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                  />
                </div>

                <div className="form_group">
                  <label htmlFor="gender">Gender:</label>
                  <select
                    id="gender"
                    name="gender"
                    // value={formData.gender}
                    // onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form_group">
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Enter your location"
                    // value={formData.location}
                    // onChange={handleChange}
                    required
                  />
                </div>
              </section>

              <div className="form_group_message">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  // value={formData.message}
                  // onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
