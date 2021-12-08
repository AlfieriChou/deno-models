import Ajv, { ErrorObject } from "ajv";

const ajv: Ajv = new Ajv();

const validateSchema = (schema: Object, data: Object): void | Error => {
  const isValid: boolean = ajv.validate(schema, data);
  if (!isValid) {
    const errMsg = ajv.errors!.map(
      (errorMsg: ErrorObject) => (JSON.stringify(errorMsg)),
    ).join();
    throw new Error(errMsg);
  }
};

export default validateSchema;
