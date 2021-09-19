import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes <HTMLTextareaElement>, HTMLTextareaElement> {
  error?: FieldError;
}
