export const requestStatusCheck = (api, action = "server") => {
  const httpErrors = {
    200: { data: api.data, status: api.status, error: undefined },
    204: { data: undefined, status: api.status, error: undefined },
    400: {
      data: api.data,
      status: api.status,
      error: "400 - One or more itens are missing",
    },
    404: { data: api.data, status: api.status, error: "404 - Item not found" },
    500: {
      data: api.data,
      status: api.status,
      error: `500 - Error on ${action} try again later`,
    },
    999: {
      data: api?.data,
      status: api?.status,
      error: `${
        api?.status || "Unknow status"
      } - Unknow error, try again later`,
    },
  };

  return httpErrors[api.status] || httpErrors[999];
};
