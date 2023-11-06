import axios from "axios";

const apiURL: string = "https://business-monitor-api.onrender.com/api/admin";
const userURL: string = "https://business-monitor-api.onrender.com/api/user";

export const registerAdmin = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/create-admin`, data);
  } catch (error: any) {
    console.log(error);
  }
};

export const verifyAdmin = async (token: string) => {
  try {
    return await axios.get(`${apiURL}/${token}/verify`).then((res) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const registerUser = async (data: any) => {
  try {
    return await axios.post(`${userURL}/create-user`, data);
  } catch (error: any) {
    console.log(error);
  }
};

export const signInAdmin = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const signInUser = async (data: any) => {
  try {
    return await axios.post(`${userURL}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const verifyUser = async (token: string) => {
  try {
    return await axios.get(`${userURL}/${token}/verify`).then((res) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const viewOneAdmin = async (adminID: string) => {
  try {
    return await axios.get(`${apiURL}/${adminID}`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const viewOneUser = async (userID: string) => {
  try {
    return await axios.get(`${userURL}/${userID}`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const allAdmin = async () => {
  try {
    return await axios.get(`${apiURL}/all`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};
