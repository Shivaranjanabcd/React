import api from "./api";

export const fetch_filter = async ({ queryKey }) => {
  const [, , filters] = queryKey; //queryKey=["customers", "list", { status: "ACTIVE" }]
  const params = {
    select: "*",
  };

  if (filters.status !== "ALL") {
    params.status = `eq.${filters.status}`;
  }

  const response = await api.get("/customers", {
    params,
  });

  return response.data;
};
