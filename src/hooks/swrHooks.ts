import useSWR from "swr";
import { allAdmin, viewOneAdmin, viewOneUser } from "../API/authAPI";
import { populateAdminReview, populateBusiness, populateSales } from "../API/salesAPI";

export const useOneAdmin = (adminID: string) => {
  const { data } = useSWR(`/admin/${adminID}`, () => viewOneAdmin(adminID));
  return { data };
};

export const useOneUser = (userID: string) => {
  const { data } = useSWR(`/user/${userID}`, () => viewOneUser(userID));
  return { data };
};

export const useViewAll = () => {
  const { data } = useSWR(`/admin/all`, allAdmin);
  return { data };
};

export const useViewBusiness = (adminID: string) => {
  const { data } = useSWR(`/admin/${adminID}/workers`, () => populateBusiness(adminID));
  return { data };
};

export const useViewSales = (userID: string) => {
  const { data: mySales } = useSWR(`/sales/sales-populate`, () => populateSales(userID));
  return { mySales };
};

export const useViewReview = (adminID: string) => {
  const { data } = useSWR(`/sales/${adminID}/sales-review`, () => populateAdminReview(adminID));
  return { data };
};
