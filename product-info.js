export const PRODUCT = {
  title: 'Audio-Technica ATH MSR7',
  subtitle: '2017 Best Headphones of the Year Award Winner',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo eros sed finibus eleifend. Curabitur aliquet odio et augue pellentesque, a feugiat nisi interdum. Sed ac nibh auctor, suscipit urna nec, eleifend urna. Pellentesque quis nibh sit amet dolor dapibus lobortis vulputate et orci. ',
  details: 'Nam placerat lectus vitae varius feugiat. Nam hendrerit mi leo, aliquam tempor lectus elementum eget. Phasellus pharetra porttitor commodo. Curabitur pulvinar gravida lacinia. In vulputate nisi nunc, sit amet luctus lorem mattis vitae.',
  price: {
    current: '59.99',
    previous: '89.99',
  },
  colors: [{
    id: 1,
    color: 'Black',
    image: '/static/ath-msr7-black.jpg',
  }, {
    id: 2,
    color: 'Brown',
    image: '/static/ath-msr7-brown.jpg',
  }],
};

export const PRODUCT_TABS = [{
  id: 1,
  label: 'description',
  content: PRODUCT.description,
}, {
  id: 2,
  label: 'details',
  content: PRODUCT.details,
}];
