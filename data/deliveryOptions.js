import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"

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

  function isWeekend(date) {
    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
  }

export function calculateDeliveryDate(deliveryOption) {
  
  let remainingDays = deliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.add(1,'day');

    if(!isWeekend(deliveryDate)) {
      remainingDays--;
    }
  }
  const dateString = deliveryDate.format(
    'dddd, MMMM D'
  );
  return deliveryDate.format('dddd, MMMM D');
}