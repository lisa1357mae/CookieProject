function eat(cookie_type) {
  let value = parseInt(Cookies.get(cookie_type));
  value++;
  Cookies.set(cookie_type, value, { expires: Infinity });
  updateCount(cookie_type);
}

function updateCount(cookie_type) {
  const count = Cookies.get(cookie_type);
  let elCounto = document.getElementById(`num_${cookie_type}`);

  elCounto.innerText = count;
}

function initCookies() {
  if (Cookies.get('sugar') === undefined) {
    Cookies.set("sugar", 0, { expires: Infinity });
  }
  if (Cookies.get('chocolate') === undefined) {
    Cookies.set("chocolate", 0, { expires: Infinity });
  }
  if (Cookies.get('lemon') === undefined) {
    Cookies.set("lemon", 0, { expires: Infinity });
  }
}

function clearCookies() {
  Cookies.set("sugar", 0, { expires: Infinity });
  Cookies.set("chocolate", 0, { expires: Infinity });
  Cookies.set("lemon", 0, { expires: Infinity });
}

function updateAll() {
  updateCount('sugar');
  updateCount('chocolate');
  updateCount('lemon');
}

initCookies();
updateAll();
