'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("CompraItems", {
      fields: ["compraId"],
      type: "foreign key",
      name: "compraCompraItemFk",
      references: {
        table: "Compras",
        field: "id",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("CompraItems", "compraCompraItemFk");
  }
};
