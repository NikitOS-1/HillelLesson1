function getAge() {
  let age = Number(prompt("Введіть свій рік народження"));

  if (age == false) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження, Бай бай!)");
    return null;
  } else if (isNaN(age)) {
    alert("Потрібно ввести саме рік Вашого народження");
    return getAge();
  }

  let currentYear = new Date().getFullYear();
  let ageUser = currentYear - age;
  return ageUser;
}

function getCity() {
  let city = prompt("Введіть місто, в якому ти живеш");
  let cityToCheck = city
    ? Number(city)
    : alert(
        "Шкода, що Ви не захотіли ввести свое місто, в якому ти живеш, Бай бай!)"
      );
  if (!isNaN(cityToCheck)) {
    alert("Потрібно ввести саме свое місто, в якому ти живеш");
    return getCity();
  } else {
    return city;
  }
}

function displayInfoUser() {
  // let age = getAge();
  // if (age === null) return;

  let city = getCity();
  if (city === null) return;
  alert("Ваш вік: " + "\n" + "Ти живеш у столиці " + city + ".");
}
displayInfoUser();
// "Тобі  років"
// "Ти живеш у столиці "
// "Ти живеш у місті "

// "Круто! Хочеш стати як ?"

// "Шкода, що Ви не захотіли ввести свій(ю) …"  і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .
