import * as actions from "./types";

// export const setAdminLoader = (payload) => {
//   return {
//     type: actions.SET_ADMIN_LOADER,
//     payload: payload,
//   };
// };
export const setPatientUser = (payload) => {
  console.log("payload ", payload);
  return {
    type: actions.SET_PATIENT_USER,
    payload: payload,
  };
};
// export const setAdminProfile = (payload) => {
//   return {
//     type: actions.SET_ADMIN_PROFILE,
//     payload: payload,
//   };
// };
// export const setAdminPatients = (payload) => {
//   console.log(payload, "payload");
//   return {
//     type: actions.SET_ADMIN_PATIENTS,
//     payload: payload,
//   };
// };
// export const setAdminDoctors = (payload) => {
//   return {
//     type: actions.SET_ADMIN_DOCTORS,
//     payload: payload,
//   };
// };
// export const setAdminBill = (payload) => {
//   return {
//     type: actions.SET_ADMIN_EBILL,
//     payload: payload,
//   };
// };

// export const setAdminResponseError = (payload) => {
//   let resError = {};
//   resError[payload.field] = payload.msg;
//   return {
//     type: actions.SET_ADMIN_RES_ERROR,
//     payload: resError,
//   };
// };

export const setPatientResponseError = (payload) => {
  let resError = {};
  resError[payload.field] = payload.msg;
  return {
    type: actions.SET_PATIENT_RES_ERROR,
    payload: resError,
  };
};
