interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Amer",
  lastName: "Hamad",
  age: 25,
  location: "Tagamo3",
};

const student2: Student = {
  firstName: "Rema",
  lastName: "Hamad",
  age: 25,
  location: "Tagamo3",
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  const th1 = document.createElement("th");
  th1.textContent = "First Name";
  const th2 = document.createElement("th");
  th2.textContent = "Location";

  headerRow.appendChild(th1);
  headerRow.appendChild(th2);

  students.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
