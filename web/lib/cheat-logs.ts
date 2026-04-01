import { graphqlRequest } from "@/lib/graphql";

type CheatLogRecord = {
  id: string | null;
  student_id: string | null;
  exam_id: string | null;
  type: string | null;
  event: string | null;
  severity: number | null;
  metadata: string | null;
  created_at: string | null;
};

type CreateCheatLogResponse = {
  createCheatLog: CheatLogRecord | null;
};

type UpdateCheatLogResponse = {
  updateCheatLog: CheatLogRecord | null;
};

const CREATE_CHEAT_LOG_MUTATION = `
  mutation CreateCheatLog(
    $studentId: String!
    $examId: String!
    $type: String!
    $event: String!
    $severity: Int!
    $metadata: String
  ) {
    createCheatLog(
      student_id: $studentId
      exam_id: $examId
      type: $type
      event: $event
      severity: $severity
      metadata: $metadata
    ) {
      id
      student_id
      exam_id
      type
      event
      severity
      metadata
      created_at
    }
  }
`;

const UPDATE_CHEAT_LOG_MUTATION = `
  mutation UpdateCheatLog(
    $id: String!
    $severity: Int
    $metadata: String
  ) {
    updateCheatLog(
      id: $id
      severity: $severity
      metadata: $metadata
    ) {
      id
      student_id
      exam_id
      type
      event
      severity
      metadata
      created_at
    }
  }
`;

export const createCheatLogEntry = async ({
  studentId,
  examId,
  type,
  event,
  severity,
  metadata,
}: {
  studentId: string;
  examId: string;
  type: string;
  event: string;
  severity: number;
  metadata?: string;
}) => {
  const response = await graphqlRequest<CreateCheatLogResponse>(
    CREATE_CHEAT_LOG_MUTATION,
    {
      studentId,
      examId,
      type,
      event,
      severity,
      metadata,
    },
  );

  if (!response.createCheatLog?.id) {
    throw new Error("Cheat log үүсгэж чадсангүй.");
  }

  return response.createCheatLog;
};

export const updateCheatLogEntry = async ({
  id,
  severity,
  metadata,
}: {
  id: string;
  severity?: number;
  metadata?: string;
}) => {
  const response = await graphqlRequest<UpdateCheatLogResponse>(
    UPDATE_CHEAT_LOG_MUTATION,
    {
      id,
      severity,
      metadata,
    },
  );

  if (!response.updateCheatLog?.id) {
    throw new Error("Cheat log шинэчилж чадсангүй.");
  }

  return response.updateCheatLog;
};
