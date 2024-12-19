let formData = {
  nametag: "",
  email: "",
  number: "",
  country: "",
  date: "",
  comment: "",
  check: "",

  printData: function() {
    console.log(`Имя: ${this.username}`);
    console.log(`E-mail: ${this.email}`);
    console.log(`Телефон: ${this.number}`);
    console.log(`Страна: ${this.country}`);
    console.log(`Дата: ${this.date}`);
    console.log(`Комментарий: ${this.comment}`);
    console.log(`CheckBox: ${this.check}`);
  }
};

function submitForm(event) {
  event.preventDefault();

  const username = document.getElementById('nametag').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const country = document.getElementById('country').value;
  const date = document.getElementById('date').value;
  const comment = document.getElementById('comment').value;
  const check = document.getElementById('check').value;


  // Проверка
  if (!nametag || !email || !comment) {
    alert("Имя, E-mail и комментарий не могут быть пустыми.");
    return;
  }


  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    alert("Некорректный E-mail.");
    return;
  }

  formData.nametag = nametag;
  formData.email = email;
  formData.number = number;
  formData.country = country;
  formData.date = date;
  formData.comment = comment;
  formData.check = check;

  formData.printData();
}

document.getElementById('myForm').addEventListener('submit', submitForm);