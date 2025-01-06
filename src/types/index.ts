export interface User {
  id?: string;
  email: string;
  role: 'STUDENT' | 'ADMIN';
  createdAt?: Date;
}

export interface StudentRegistration {
  id?: string;
  formFourIndexNo: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  maritalStatus: string;
  gender: 'Male' | 'Female';
  admissionDate: string;
  mobileNo: string;
  courseName: string;
  collegeFaculty: string;
  yearOfStudy: number;
  courseDuration: number;
  nationalID: string;
  admissionNo: string;
  userId?: string;
  exportedAt?: Date;
  createdAt?: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
