const recieveEntries = () => {
  let entry = localStorage.getItem("user-enteries");
  if (entry) {
    entry = JSON.parse(entry);
  } else {
    entry = [];
  }
  return entry;
};

let userentry = recieveEntries();

const displayEnteries = () => {
  const enteries = recieveEntries();

  let tableEnteries = enteries
    .map((entry) => {
      const ncell = `<td class="px-5">${entry.name}</td>`;
      const ecell = `<td class="px-5">${entry.email}</td>`;
      const pcell = `<td class="px-5">${entry.password}</td>`;
      const dobcell = `<td class="px-5">${entry.dob}</td>`;
      const taccell = `<td class="px-5">${entry.tac}</td>`;

      const row = `<tr>${ncell} ${ecell} ${pcell} ${dobcell} ${taccell}</tr>`;
      return row;
    })
    .join("");
  const table = `<table class="table-fixed"><tr>
        <th class="px-5">Name</th>
        <th class="px-5">Email</th>
        <th class="px-5">Password</th>
        <th class="px-5">Dob</th>
        <th class="px-5">Accepted terms?</th>
    </tr>${tableEnteries} </table>`;

  let details = document.getElementById("user-enteries");
  console.table(tableEnteries);
  details.innerHTML = table;
};

const saveForm = (event) => {
  // event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const tac = document.getElementById("tac").checked;

  const entry = {
    name,
    email,
    password,
    dob,
    tac,
  };

  userentry.push(entry);
  localStorage.setItem("user-enteries", JSON.stringify(userentry));
};
displayEnteries();
