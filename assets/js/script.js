var people = [
  {
    name: 'Fernando Henrique Caversan Santos Duro',
    tel: '14999999999',
    xp: true,
  },
  {
    name: 'Anderson Arcenio Matos da costa',
    tel: '14999999999',
    xp: true,
  },
  {
    name: 'Karina do Amaral',
    tel: '14999999999',
    xp: false,
  },
];

for (person in people) {
  document.querySelector(
    'table.lista tbody',
  ).innerHTML += `<tr style="background-color: ${
    person % 2 == 0 ? '#FFF' : '#EEE'
  }" >
  <td>${people[person].name}</td>
  <td>${people[person].tel}</td>
  <td>${
    people[person].xp
      ? '<span style="color:green"> Sim </span>'
      : '<span style="color:red"> Não </span>'
  }</td>
  <td>
      <button>Alterar</button>
    </td>
  </tr>`;
}
