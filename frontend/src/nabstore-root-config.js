import { registerApplication, start } from "single-spa";
import { addProduto } from "./redux/slicer/cartSlicer";
import { login } from "./redux/slicer/userSlicer";
import { selectEndereco } from "./redux/slicer/cartSlicer";
import store from "./redux/store";

registerApplication({
  name: "@nabstore/monolito",
  app: () => import("./nabstore-monolito"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@nabstore/mfe-users",
  app: () => System.import("@nabstore/mfe-users"),
  activeWhen: ["/users"],
  customProps: {
    store,
    loginAction: login,
    selectEnderecoAction: selectEndereco,
  },
});

registerApplication({
  name: "@nabstore/mfe-products",
  app: () => System.import("@nabstore/mfe-products"),
  activeWhen: ["/products"],
  customProps: {
    store,
    addProductToCartAction: addProduto,
  },
});

System.import("@nabstore/styleguide").then(() => {
  start();
});
