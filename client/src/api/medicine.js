import axios from "./axios";

/* Wholesaler: add medicine */
export const addMedicine = async (data) => {
  const token = localStorage.getItem("token");

  const res = await axios.post("/medicines", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

/* Retailer: get medicines */
export const getMedicines = async () => {
  const res = await axios.get("/medicines");
  return res.data;
};
