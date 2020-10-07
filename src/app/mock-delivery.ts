
export const Delivery = [
    {
        id: 'a',
        time: '2020-12-24 14:32:21',
        requesttime: '15:00 ~ 15:00',
        market: 'OO정육점',
        products_dt: [
          {
            order_prd_id:'a_1',
            prd_name:'삼겹살 200G',
            prd_cost:'10,000',
            prd_price:'20,000',
            prd_opt:'수육용',
            quantity: 1,
            status: 0
          },
          {
            order_prd_id:'a_2',
            prd_name:'삼겹살 200G',
            prd_cost:'10,000',
            prd_price:'20,000',
            prd_opt:'구이용',
            quantity: 1,
            status: 0
          },
        ],
        mem_info: 'OOO / 충북 청주시 OOO OOOOO OOO / 010-1234-1234',
        status: "배송중"
      },
      {
        id: 'b',
        time: 'time',
        requesttime: 'timeb',
        market: 'market',
        products_dt: [
          {
            order_prd_id:'b_1',
            prd_name:'삼겹살 200G',
            prd_cost:'10,000',
            prd_price:'20,000',
            prd_opt:'수육용',
            quantity: 1,
            status: 0
          },
          {
            order_prd_id:'b_2',
            prd_name:'삼겹살 200G',
            prd_cost:'10,000',
            prd_price:'20,000',
            prd_opt:'구이용',
            quantity: 1,
            status: '취소'
          },
        ],
        mem_info: 'OOO / 충북 청주시 OOO OOOOO OOO / 010-1234-1234',
        status: "배송준비중"
      },
];
