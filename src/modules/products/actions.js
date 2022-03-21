const getProductImage = async (req, res) => {
  // #swagger.tags = ['Produtos']
  // #swagger.summary = 'Redireciona para a rota de imagem do service-products'

  let base_url = process.env.SERVICE_PRODUCTS_BASE_URL;
  if (process.env.NODE_ENV === "development") {
    base_url = base_url.replace("service_products", "localhost");
  }

  return res
    .status(301)
    .redirect(`${base_url}/produtos/${req.params.id}/image`);
};

export default { getProductImage };
