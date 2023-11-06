import axios from "axios";

const salesURL: string = `https://business-monitor-api.onrender.com/api/sales`;
const adminSaleURL: string = `https://business-monitor-api.onrender.com/api/admin`;

export const createSales = async (userID: string, data: any) => {
  try {
    return await axios.post(`${salesURL}/${userID}/sales`, data);
  } catch (error: any) {
    console.log(error);
  }
};

export const populateSales = async (userID: string) => {
  try {
    return await axios
      .get(`${salesURL}/${userID}/sales-populate`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const populateAdminReview = async (adminID: string) => {
  try {
    return await axios
      .get(`${salesURL}/${adminID}/sales-review`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const populateBusiness = async (adminID: string) => {
  try {
    return await axios
      .get(`${adminSaleURL}/${adminID}/workers`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};
