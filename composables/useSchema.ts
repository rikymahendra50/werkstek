import { object, string, boolean, array, any, union, number } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

export default function () {
  /**
   * catatan jika type string harus diikuti dengan .min(1, "Name is required")
   * karena ="" adalah string
   *
   */

  const contactSchema = toTypedSchema(
    object({
      // firstname: string({
      //   required_error: "First Name is required",
      // })
      //   .trim()
      //   .min(1, "First Name is required"),
      // lastname: string({
      //   required_error: "Last Name is required",
      // })
      //   .trim()
      //   .min(1, "Last Name is required"),
      name: string({
        required_error: "Name is required",
      })
        .trim()
        .min(1, "Name is required"),
      email: string({
        required_error: "Email is required",
      })
        .trim()
        .email("Invalid email address"),
      subject: string({
        required_error: "Subject is required",
      })
        .trim()
        .min(1, "Subject is required"),
      message: string({
        required_error: "Message is required",
      })
        .trim()
        .min(1, "Message is required"),
      phone: string({
        required_error: "Phone is required",
      })
        .trim()
        .min(1, "Phone is required"),
    })
  );

  const loginSchema = toTypedSchema(
    object({
      email: string({
        required_error: "Email is required",
      })
        .trim()
        .email("Invalid email address"),
      password: string({
        required_error: "Password is required",
      })
        .trim()
        .min(1, "Password is required"),
    })
  );
  return {
    contactSchema,
    loginSchema,
  };
}
