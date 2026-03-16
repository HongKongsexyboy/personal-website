export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export function validateContactPayload(payload: ContactPayload) {
  const isValid =
    payload.name.trim().length > 1 &&
    payload.email.includes("@") &&
    payload.message.trim().length > 10;

  return {
    isValid
  };
}
