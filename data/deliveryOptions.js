export const deliveryOptions = [
  {
  id: '1',
  deliveryDays: 7,
  priceRupees: 0
},
{
  id: '2',
  deliveryDays: 3,
  priceRupees: 99
},
{
  id: '3',
  deliveryDays: 1,
  priceRupees: 199
}]

export function getDeliveryOption(deliveryOptionId) {
  
  let deliveryOption;

  deliveryOptions.forEach((option) => {
  if(option.id === deliveryOptionId) {
    deliveryOption = option;
  };
  });

  return deliveryOption || deliveryOption[0];

}