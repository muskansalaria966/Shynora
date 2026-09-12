// const API_URL = import.meta.env.VITE_API_URL;

// export const getProducts = async () => {
//   const response = await fetch(`${API_URL}/products`);

//   if (!response.ok) {
//     throw new Error(`Failed to fetch products: ${response.status}`);
//   }

//   return response.json();
// };

const API_URL = import.meta.env.VITE_API_URL;

const getUser = () => {
  return JSON.parse(localStorage.getItem("user") || "null");
};

const authHeaders = () => {
  const user = getUser();

  return user?.token
    ? { Authorization: `Bearer ${user.token}` }
    : {};
};

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch products");
  }

  return data.products;
};

// export const getProductsByCategory = async (category) => {
//   const response = await fetch(
//     `${API_URL}/products?category=${encodeURIComponent(category)}`
//   );

//   if (!response.ok) {
//     throw new Error(`Failed to fetch category products: ${response.status}`);
//   }

//   return response.json();
// };

export const getProductsByCategory = async (category) => {
  const response = await fetch(
    `${API_URL}/products?category=${encodeURIComponent(category)}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || `Failed to fetch category products: ${response.status}`
    );
  }

  return data.products;
};

// export const getProductById = async (id) => {
//   const response = await fetch(`${API_URL}/products/${id}`);

//   if (!response.ok) {
//     throw new Error(`Failed to fetch product: ${response.status}`);
//   }

//   return response.json();
// };

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `Failed to fetch product: ${response.status}`);
  }

  return data.product;
};

// export const createOrder = async (orderData) => {
//   const response = await fetch(`${API_URL}/orders`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(orderData),
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Failed to place order");
//   }

//   return data;
// };

export const createOrder = async (orderData) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify(orderData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create order");
  }

  return data.order;
};



export const deleteProduct = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }

  return response.json();
};

export const createProduct = async (formData) => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers:{
      ...authHeaders(),
    },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create product");
  }

  return data;
};

export const updateProduct = async (id, formData) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers:{
      ...authHeaders(),
    },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};


export const loginUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

// export const getOrders = async () => {
//   const response = await fetch(`${API_URL}/orders`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch orders");
//   }

//   return response.json();
// };

export const getOrders = async () => {
  const response = await fetch(`${API_URL}/orders`, {
    headers: {
      ...authHeaders(),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch orders");
  }

  return data.orders;
};



// export const updateOrderStatus = async (id, status) => {
//   const response = await fetch(`${API_URL}/orders/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ status }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to update order");
//   }

//   return response.json();
// };

// export const getMyOrders = async (userId) => {
//   const response = await fetch(`${API_URL}/orders/user/${userId}`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch your orders");
//   }

//   return response.json();
// };

export const updateOrderStatus = async (id, status) => {
  const response = await fetch(`${API_URL}/orders/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify({ status }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update order");
  }

  return data.order;
};

export const getMyOrders = async () => {
  const response = await fetch(`${API_URL}/orders/my-orders`, {
    headers: {
      ...authHeaders(),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch orders");
  }

  return data.orders;
};

export const addReview = async (id, review) => {
  const response = await fetch(
    `${API_URL}/products/${id}/review`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(review),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add review");
  }

  return response.json();
};


