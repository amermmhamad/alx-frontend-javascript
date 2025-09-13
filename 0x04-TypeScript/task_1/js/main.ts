interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: Boolean;
  yearsOfExperience?: Number;
  location: String;
  [propName: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Hamad",
  fullTimeEmployee: true,
  location: "Cairo",
  contract: true,
};
