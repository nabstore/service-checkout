'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Compras", {
      fields: ["cartaoId"],
      type: "foreign key",
      name: "cartaoCompraFk",
      references: {
        table: "Cartaos",
        field: "id",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Compras", "cartaoCompraFk");
  }
};
