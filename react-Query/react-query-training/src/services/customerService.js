import api from "./api"; //const api = axios.create({ ---> axios

export const fetchCustomer = async () => {
  const response = await api.get("/customers", {
    params: {
      //params adds ?select=* to the URL.
      select: "*",
    },
  });
  return response.data;
};

export const createCustomer = async (customerData) => {
  const response = await api.post("/customers", customerData, {
    headers: {
      Prefer: "return=representation",
    },
  });

  return response.data;
};

export const fetchCustomersWithFilters = async ({
  page,
  pageSize,
  search,
  status,
  sortBy,
  sortOrder,
}) => {
  const offset = (page - 1) * pageSize;

  const params = {
    select: "*",
    limit: pageSize,
    offset,
    order: `${sortBy}.${sortOrder},id.asc`,
  };

  if (search.trim()) {
    const value = search.trim().replace(/[,*()]/g, "");

    params.or = `(first_name.ilike.*${value}*,last_name.ilike.*${value}*)`;
  }

  if (status !== "ALL") {
    params.status = `eq.${status}`;
  }

  const response = await api.get("/customers", { params });

  return response.data;
};

export const fetchCustomerById = async (id) => {
  const response = await api.get("/customers", {
    params: {
      select: "*",
      id: `eq.${id}`,
    },
  });

  return response.data[0];
};


export const fetchPoliciesByOrganization = async (
  organizationId
) => {
  const response = await api.get("/policies", {
    params: {
      select: "*",
      organization_id: `eq.${organizationId}`,
    },
  });

  return response.data;
};

export const updateCustomer = async (id, updatedData) => {
  const response = await api.patch("/customers", updatedData, {
    params: { id: `eq.${id}` },
    headers: {
      Prefer: "return=representation",
    },
  });

  return response.data;
};