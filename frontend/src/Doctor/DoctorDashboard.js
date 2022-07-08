import React, { useEffect, useState, useContext } from "react";
import DoctorNavbar from "./DoctorNavbar";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../Redux/Services/DoctorService";

const DoctorDashboard = (props) => {
  const [patients, setPatients] = useState();
  const [appointments, setAppointments] = useState();
  let { loading, resError = {}, doctorUser } = props.doctor;
  const loadData = async () => {
    const data = JSON.parse(localStorage.getItem("data"));
    const obj = {
      emaill: data.email,
      password: data.password,
    };
    const result = await props.login(obj);
    alert(result);
  };
  useEffect(() => {
    loadData();
    // axios
    //   .get("/patient/patients")
    //   .then(function (response) {
    //     // console.log(response.data.data);
    //     if (response.data.status === 200) {
    //       setPatients(response.data.data);
    //     } else {
    //       alert("Sorry");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    axios
      .get(`/appointmentWithUser?doctorId=${doctorUser._id}`)
      .then(function (response) {
        if (response.data.status === 200) {
          // console.log(response.data.data);
          setAppointments(response.data.data);
        } else {
          alert("Sorry");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // console.log(doctorData);
  return (
    <>
      <DoctorNavbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6 mt-3">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Appointments for you</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <h5 className="card-text">5</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-3">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Patients under you</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <h5 className="card-text">11</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-3">
            <div className="card text-white bg-danger  mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Your Discharged Patients</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <h5 className="card-text">17</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-data">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col" className="table-color">
                #
              </th>
              <th scope="col" className="table-color">
                Patient name
              </th>
              <th scope="col" className="table-color">
                description
              </th>
              <th scope="col" className="table-color">
                Mobile
              </th>
              <th scope="col" className="table-color">
                Address
              </th>
              <th scope="col" className="table-color">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((appointment, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{appointment.userId?.name}</td>
                  <td>{appointment.description}</td>
                  <td>{appointment.userId?.phone}</td>
                  <td>dummy address</td>
                  <td>dummy date</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  doctor: state.doctor,
});
export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // signup,
  login,
  // adminPatients,
})(DoctorDashboard);
// export default DoctorDashboard;
