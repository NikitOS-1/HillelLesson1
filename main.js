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

function getSport() {
  let sport = prompt("Введіть ваш улюблений вид спорту:");

  let sportToCheck = sport
    ? Number(sport)
    : alert("Шкода, що ви не захотіли ввести свій улюблений вид спорту.");

  if (!isNaN(sportToCheck)) {
    alert("Потрібно ввести саме свій улюблений вид спорту");
    return getSport();
  } else {
    return sport;
  }
}

function app() {
  alert("Це дуже крута смарт программа ! Спробуй ))");

  let messageAlert = "";

  let age = getAge();
  if (age === null) return;
  messageAlert += `Ваш вік: ${age}.\n`;

  let city = getCity();
  if (city === null) return;

  let cityLowerCase = city.toLowerCase();
  if (
    cityLowerCase == "київ" ||
    cityLowerCase == "вашингтон" ||
    cityLowerCase == "лондон"
  ) {
    let country = "";
    if (cityLowerCase == "київ") {
      country = "України";
    } else if (cityLowerCase == "вашингтон") {
      country = "США";
    } else if (cityLowerCase == "лондон") {
      country = "Великої Британії";
    }
    messageAlert += `Ти живеш у столиці: ${country}.\n`;
  } else {
    messageAlert += `Ти живеш у місті: ${city}.\n`;
  }

  let sport = getSport();
  if (sport === null) return;

  let sportKings = {
    карате: "Брюс Лі",
    бокс: "Майк Тайсон",
    шахмати: "Магнус Карлсен",
  };
  let sportKing = sportKings[sport];
  if (sportKing) {
    messageAlert += `Круто! Хочеш стати як ${sportKing}?`;
  } else {
    messageAlert += `Жаль що ми не знаємо королів цього виду спорту як ${sport}`;
  }

  alert(messageAlert);
}

app();
