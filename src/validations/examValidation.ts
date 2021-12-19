import joi from 'joi';

const urlValidation =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\\.-]+)+[\w\-\\._~:/?#[\]@!\\$&'\\(\\)\\*\\+,;=.]+$/;

const examSchema = joi.object({
  name: joi.string().required(),
  examLink: joi.string().pattern(urlValidation).required(),
});

const isExamInputValid = (examBody: { name: string; examLink: string }) => {
  if (examSchema.validate(examBody).error) return false;
  return true;
};

export { isExamInputValid };
