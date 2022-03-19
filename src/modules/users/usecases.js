import axios from "axios";

const api = axios.create({
  baseURL: process.env.SERVICE_USERS_PORT,
});

const getEnderecoById = async (id, token) => {
  const res = await api.get(`/enderecos/${id}`, {
    headers: {
      authorization: token
    }
  });
  return res.data;
};

export { getEnderecoById };
