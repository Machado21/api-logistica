const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    _id: {
      type: String,
      required: [true, "ID do produto é obrigatório"],
    },
    description: {
      type: String,
      required: [true, "Nome do produto é obrigatório"],
    },
    amount: {
      type: Number,
      required: [true, "Quantidade do produto é obrigatória"],
    },
    price: {
      type: Number,
      required: [true, "Valor do produto é obrigatório"],
    },
    group: {
      type: String,
      required: [true, "Deve fazer parte de um Grupo. "],
    },
    brand: {
      type: String,
      required: [true, "Marca do produto é obrigatória"],
    },
    factory_code: {
      type: String,
      required: [true, "Valor do produto é obrigatório"],
    },
    sub_group: {
      type: String,
      required: [true, "Deve fazer parte de um Sub Grupo."],
    },
    sys_code: {
      type: Number,
      required: [true, "Valor do produto é obrigatório"],
    },
  },
  { collection: "product" }
);

module.exports = productSchema;
