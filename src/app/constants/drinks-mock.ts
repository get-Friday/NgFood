import IDrink from "../models/drink.model";

const LIST_DRINK_MOCK: IDrink[] = [
  {
    name: 'Água',
    description: 'Hidratem-se! 300ml',
    photo: 'assets/agua.jpg',
    price: 3
  },
  {
    name: 'Coca-cola',
    description: 'Uma água menos saudável e mais cara 350ml',
    photo: 'assets/coca.jpg',
    price: 8
  },
  {
    name: 'Suco de uva',
    description: 'Água com gosto de uva 1L',
    photo: 'assets/sucouva.jpg',
    price: 12
  },
]

export default LIST_DRINK_MOCK
