import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {
  
  

  const menu = ref([
    { name: 'เอสเปรสโซ ', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/9c1b8ffa4722426e9c6f44c7e4775ca4.jpg', price: 130 },
    { name: 'อเมริกาโน  ', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/d75543f963f9475bbe0d2cfa1cf85b35.jpg', price: 150 },
    { name: 'ลาเต้ ', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/4f623c1dacb1429ab10357400701ca06.jpg', price: 190 },
    { name: 'คาปูชิโน่', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/36f4e7624fb042fea06a67a9ca2cd6ee.jpg', price: 110 },
    { name: 'คาราเมลแมคคิอาโต้ ', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/f77e14b101224f349c4d3f7f91e69631.jpg', price: 170 },
    { name: 'มอคค่า ', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/ae43981b5d694d4597d29f82327e55ac.jpg', price: 190 },
    { name: 'ดัลโกน่าโกโก้', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/0f8a42c4d19341dcbaa65611211da7b8.jpg', price: 80 },
    { name: 'โกโก้มัทฉะ', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/e9169d1e84f1439da26ef4495968d045.jpg', price: 70 },
    { name: 'ชาไทยเย็น ', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/329ef7b2dddb44f184dab0b8858862b9.jpg', price: 70 },
    { name: 'โอวัลตินไวต์มอลต์ชาไทย ', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/49ea03c5d6ea420c803ea95d4db10bd4.jpg', price: 90 },
    { name: 'ชาเขียวปั่น', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/ccaf777b459741a092652be450d08c6f.jpg', price: 90 },
    { name: 'ชามะนาวเย็น', img: 'https://img.wongnai.com/p/1600x0/2022/02/21/a62bf94a59c642b592a6c80c2712c630.jpg', price: 65 },



  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
