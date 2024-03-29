import { IProduct } from './iproduct';

export let ProductList: IProduct[] = [
  {
    id: 1,
    img: 'assets/images/candle/antiq_eg_1704679869626.jpeg',
    name: 'Candle',
    description: 'White Candle ',
    price: 200000,
    onSale: true,
    discount: 0.05,
    quantity: 2,
  },
  {
    id: 2,
    img: 'assets/images/vase/antiq_eg_1704680058889.jpeg',
    name: 'Vase',
    description: 'White Vase',
    price: 7000,
    onSale: false,
    discount: 0.1,
    quantity: 10,
  },
  {
    id: 3,
    img: 'assets/images/candle/antiq_eg_1704679994417.jpeg',
    name: 'Candle',
    description: 'Black Candle',
    price: 500,
    onSale: true,
    discount: 0.25,
    quantity: 5,
  },
  {
    id: 4,
    img: 'assets/images/vase/antiq_eg_1704680064181.jpeg',
    name: 'Vase',
    description: 'White Vase ',
    price: 300,
    onSale: false,
    discount: 0.1,
    quantity: 0,
  },
  {
    id: 5,
    img: 'assets/images/vase/antiq_eg_1704680154100.jpeg',
    name: 'Vase',
    description: 'Black Vase',
    price: 15000,
    onSale: true,
    discount: 0.15,
    quantity: 20,
  },
];
