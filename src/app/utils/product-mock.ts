import Product from "../models/product.models"

const PRODUCTS_MOCK: Product[] = [
  {
    title: 'Peixe',
    description: 'Peixe pacu grande 1.5kg',
    photo: 'assets/peixe.jpg',
    price: 15,
    type: 'food'
  },
  {
    title: 'Queijo',
    description: 'Queijo redondo amarelo 30cm diametro 1kg',
    photo: 'assets/queijo.jpg',
    price: 27,
    type: 'food'
  },
  {
    title: 'Água',
    description: 'Hidratem-se! 300ml',
    photo: 'assets/agua.jpg',
    price: 3,
    type: 'drink'
  },
  {
    title: 'Pizza',
    description: 'O sabor é sortido aleatório',
    photo: 'assets/pizza.jpg',
    price: 59.99,
    type: 'food'
  },
  {
    title: 'Coca-cola',
    description: 'Uma água menos saudável e mais cara 350ml',
    photo: 'assets/coca.jpg',
    price: 8,
    type: 'drink'
  },
  {
    title: 'Suco de uva',
    description: 'Água com gosto de uva 1L',
    photo: 'assets/sucouva.jpg',
    price: 12,
    type: 'drink'
  },
]

export default PRODUCTS_MOCK
