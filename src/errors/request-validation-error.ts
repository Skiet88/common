import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error"; 

export class RequestValidationError extends CustomError {
    statusCode = 400;
    // errors: ValidationError[]
    // constructor( errors: ValidationError[]){
    //     this.errors = errors
    // } Or 

    constructor(public errors: ValidationError[]){
       super('Invalid request parameters'); 
       
       //Only because we extending a build in class
       Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map((err) => {
          if (err.type === 'field') {
            return { message: err.msg, field: err.path };
          }
          return { message: err.msg };
        });
      }
        
      }

    
