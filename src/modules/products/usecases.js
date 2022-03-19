import axios from "axios";

const api = axios.create({
  baseURL: process.env.SERVICE_PRODUCTS_PORT,
});

const getProducts = async (ids, token) => {
  const idsString = ids.reduce((prev, curr, index) =>
    index === ids.length - 1 ? `${prev},${curr}` : `${prev},${curr},`
  );

  const res = await api.get(`/produtos?ids=${idsString}`);
  return res.data;
};

export { getProducts };
