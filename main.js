function getAge() {
  let age = Number(prompt("Введіть свій рік народження"));

  if (age === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження, Бай бай!)");
  } else {
    if (isNaN(age)) {
      alert("Потрібно ввести саме рік Вашого народження");
      getAge();
    } else {
      let currentYear = new Date().getFullYear();
      let ageUser = currentYear - age;
      return ageUser;
    }
  }
}

getAge();
// "Тобі  років"
// "Ти живеш у столиці "
// "Ти живеш у місті "

// "Круто! Хочеш стати як ?"

// "Шкода, що Ви не захотіли ввести свій(ю) …"  і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .
