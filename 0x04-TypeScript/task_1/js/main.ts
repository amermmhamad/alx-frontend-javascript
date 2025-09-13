interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Hamad",
  fullTimeEmployee: true,
  location: "Cairo",
  contract: true,
};

interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  numberOfReports: 17,
};
