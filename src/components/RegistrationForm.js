import React from "react";
import { useState } from "react";
import URL from "../helpers/url";
import "./RegistrationForm.scss";
import Sea from "../images/backgroundFrom.jpg";

const RegistrationForm = () => {
  const [datePicker] = useState([
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [pickup_point, setPickUpPoint] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service_type, setServiceType] = useState("");
  const [package1, setPackage1] = useState("");
  const [packageOption, setpackageOption] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsAccepted = (e) => {
    setTermsAccepted(e.target.checked);
  };
  const handleOptionChange = (e) => {
    setServiceType(e.target.value);
    console.log(e.target.value);
    // set text value based on selected option
    if (e.target.value === "Bike") {
      setServiceType("Bike");
      setPickUpPoint("Kolatoli");
      setpackageOption([
        "4hr : 840TK",
        "6hr : 1240TK",
        "8hr : 1650TK",
        "12hr : 2200TK",
        "24hr : 2400TK",
      ]);
    } else if (e.target.value === "Scooty") {
      setServiceType("Scooty");
      setPickUpPoint("Kolatoli");
      setpackageOption([
        "4hr : 840TK",
        "6hr : 1200TK",
        "8hr : 1550TK",
        "12hr : 2000TK",
        "24hr : 2200TK",
      ]);
    } else {
      setServiceType("Chander-Gari");
      setPickUpPoint("");
      setpackageOption([
        "Half day(9am-3pm):4000TK",
        "Half day(3pm-9pm):4000TK",
        "Full day(9am-9pm):6000TK",
      ]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      name,
      email,
      contact,
      pickup_point,
      date,
      time,
      service_type,
      package: package1,
    };

    try {
      fetch(`${URL}order/register`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            alert("Order placed Successfully!");
            setName("");
            setEmail("");
            setContact("");
            setPickUpPoint("");
            setDate("");
            setTime("");
            setServiceType("");
            setPackage1("");
          } else {
            alert("Please Try Again!");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="form_container container-fluid  mx-auto"
      style={{ backgroundImage: `url(${Sea})` }}
    >
      <div className="heading_section d-flex justify-content-center align-items-center">
        <h1 style={{ color: "white" }}>Book A Bike/ Scooty/ Chander-Gari</h1>
      </div>
      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <div className="shadow form_wrapper">
          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="name" className="col-form-label">
                Name:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="name"
                className="form-control"
                aria-labelledby="name"
                value={`${name}`}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="email" className="col-form-label">
                Email:
              </label>
            </div>
            <div className="col-9">
              <input
                type="email"
                id="email"
                className="form-control"
                aria-labelledby="email"
                value={`${email}`}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="contact" className="col-form-label">
                Contact:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="contact"
                className="form-control"
                aria-labelledby="contact"
                value={`${contact}`}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>

          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="date" className="col-form-label">
                Date:
              </label>
            </div>
            <div className="col-9">
              <input
                type="date"
                id="date"
                className="form-control"
                aria-labelledby="date"
                value={`${date}`}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="time" className="col-form-label">
                Time:
              </label>
            </div>
            <div className="col-9">
              <select
                className="form-select"
                aria-label="Package"
                value={`${time}`}
                onChange={(e) => {
                  setTime(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option value="-1" defaultValue={"Select"}>
                  Select
                </option>
                {datePicker.map((date, index) => {
                  return <option key={index}>{date}</option>;
                })}
              </select>
            </div>
          </div>

          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="service-type" className="col-form-label">
                Vehicle Type:
              </label>
            </div>

            <div className="col-9">
              <select
                className="form-select"
                aria-label="service type"
                value={`${service_type}`}
                onChange={handleOptionChange}
              >
                <option value="0" defaultValue={"Select"}>
                  Select
                </option>
                <option value="Bike">Bike</option>
                <option value="Scooty">Scooty</option>
                <option value="Chander-Gaari">Chander Gaari</option>
              </select>
            </div>
          </div>

          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="package" className="col-form-label">
                Package:
              </label>
            </div>
            <div className="col-9">
              <select
                className="form-select"
                aria-label="Package"
                value={`${package1}`}
                onChange={(e) => setPackage1(e.target.value)}
              >
                <option value="0" defaultValue={"Select"}>
                  Select
                </option>
                {packageOption.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="pickup point" className="col-form-label">
                Pickup Point:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="pickup-point"
                className="form-control"
                aria-labelledby="pickup-point"
                value={`${pickup_point}`}
                onChange={(e) => setPickUpPoint(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-3 m-2 align-items-center">
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={termsAccepted}
                onChange={handleTermsAccepted}
                required
                style={{ marginRight: "5px", cursor: "pointer" }}
              />
              I have read and agree to the Terms and Conditions.
            </label>
          </div>
          <div className="row g-3 m-2 align-items-center justify-content-center">
            <div className="submit_btn_section">
              <input
                type="submit"
                id="submit"
                className="form-control  text-white"
                aria-labelledby="submit"
                style={{
                  fontWeight: "600",
                  backgroundColor: "#23d244",
                  outline: "none !important",
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
