export type FormAction = (
  prevState: any,
  formData: FormData,
) => Promise<{ message: string }>;
