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

interface Director extends Teacher {
  numberOfReports: number;
}

const director: Director = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  numberOfReports: 17,
};

interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}
