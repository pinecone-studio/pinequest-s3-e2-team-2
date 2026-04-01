import { graphqlRequest } from "@/lib/graphql";

type StudentLookupResponse = {
  studentByEmail: {
    id: string;
  } | null;
};

type CreateStudentResponse = {
  createStudent: {
    id: string;
  };
};

const STUDENT_BY_EMAIL_QUERY = `
  query StudentByEmail($email: String!) {
    studentByEmail(email: $email) {
      id
    }
  }
`;

const CREATE_STUDENT_MUTATION = `
  mutation CreateStudent($name: String!, $email: String!) {
    createStudent(name: $name, email: $email) {
      id
    }
  }
`;

export const resolveStudentId = async (
  studentEmail: string,
  studentName: string,
) => {
  const existingStudent = await graphqlRequest<StudentLookupResponse>(
    STUDENT_BY_EMAIL_QUERY,
    { email: studentEmail },
  );

  if (existingStudent.studentByEmail?.id) {
    return existingStudent.studentByEmail.id;
  }

  const createdStudent = await graphqlRequest<CreateStudentResponse>(
    CREATE_STUDENT_MUTATION,
    {
      name: studentName,
      email: studentEmail,
    },
  );

  if (!createdStudent.createStudent?.id) {
    throw new Error("Оюутны мэдээлэл үүсгэж чадсангүй.");
  }

  return createdStudent.createStudent.id;
};
