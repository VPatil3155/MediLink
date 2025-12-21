import axios from "./axios";

/* Retailer places order */
export const placeOrder = async (data) => {
  const token = localStorage.getItem("token");

  const res = await axios.post("/orders", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

/* Wholesaler views orders */
export const getWholesalerOrders = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get("/orders/wholesaler", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
export const updateOrderStatus = async (orderId, status) => {
  const token = localStorage.getItem("token");

  const res = await axios.patch(
    `/orders/${orderId}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
