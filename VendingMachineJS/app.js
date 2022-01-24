const drinkBtns = document.getElementsByClassName('drink');
const moneyBtns = document.getElementsByClassName('money');
const currentMoney = document.getElementById('currentMoney');
const moneyText = document.getElementById('moneyText');

const handleDrinkClick = (e) => {
  console.log(e);
  alert('돈이 부족합니다:(');
};

const addMoney = (money) => {
  moneyText.innerText = '현재 금액:';
  money += Number(currentMoney.innerText);
  currentMoney.innerText = money;
};

const handleMoneyClick = (e) => {
  const money = e.target.innerText.match(/[0-9]/g);
  moneyNum = parseInt(money.join(''));
  addMoney(moneyNum);
};

Array.from(drinkBtns).forEach((drinkBtn) => {
  drinkBtn.addEventListener('click', handleDrinkClick);
});

Array.from(moneyBtns).forEach((money) => {
  money.addEventListener('click', handleMoneyClick);
});
