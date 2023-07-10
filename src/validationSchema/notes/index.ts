import * as yup from 'yup';

export const noteValidationSchema = yup.object().shape({
  content: yup.string().required(),
  business_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
