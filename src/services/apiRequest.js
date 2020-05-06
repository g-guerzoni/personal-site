import axios from "axios";

const request = async ({ urn, method, data }) => {
  try {
    let response = await axios({
      method: method,
      data: data,
      url: process.env.REACT_APP_API_URL + urn,
    });

    return response;
  } catch (err) {
    return {
      data: err?.response?.data || "Internal Error",
      status: err?.response?.status || 500,
    };
  }
};

export default {
  get: (urn) =>
    request({
      urn,
      method: "GET",
    }),
  post: (urn, data) =>
    request({
      urn,
      data,
      method: "POST",
    }),
  delete: (urn) =>
    request({
      urn,
      method: "DELETE",
    }),
};
