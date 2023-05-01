const axios = require("axios");

/** @type {import('axios').AxiosInstance} */
const instance = axios.create({
  timeout: 1000,
});

const get = async (url, timeout = 1000) => {
  const options = { timeout };
  try {
    const res = await instance.get(url, options);
    return res.data;
  } catch (error) {
    console.error("Error at API Client: Get request failed.", error);
    throw error;
  }
};

module.exports = {
  get,
};
