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

  const singleNameField = toTypedSchema(
    object({
      name: string().min(1, "Name is required"),
    })
  );

  const blogSchema = toTypedSchema(
    object({
      title: string().min(1, "Title is required"),
      category: number().min(1, "Category is required"),
      meta: string().min(1, "Meta is required"),
    })
  );

  const communitySchema = toTypedSchema(
    object({
      title: string().min(1, "Title is required"),
      meta: string().min(1, "Meta is required"),
    })
  );

  const emailField = string().email("Please enter a valid email");
  const passwordField = string()
    .min(7, "Password should be at least 7 characters")
    .max(50, "Password should be at most 50 characters");
  const confirmPasswordField = string()
    .min(7, "Confirm Password should be at least 7 characters")
    .max(50, "Confirm Password should be at most 50 characters");
  const firstNameField = string().min(1, "First name is required");
  const lastNameField = string().min(1, "Last name is required");
  const otpField = string()
    .min(6, "OTP should be at least 6 characters")
    .max(6, "OTP should be at most 6 characters");

  const passwordAndConfirm = object({
    password: passwordField,
    confirm_password: confirmPasswordField,
  }).superRefine((data, ctx) => {
    if (data.password !== data.confirm_password) {
      ctx.addIssue({
        path: ["confirm_password"],
        code: "custom",
        message: "Passwords do not match",
      });
    }
  });

  const formInput = toTypedSchema(
    object({
      name: string().min(1, "Name is required"),
      // body: bodyField,
      email: emailField,
      rating: number({ invalid_type_error: "Rating Required" })
        .min(0, "Minimum 1 Rating")
        .max(10, "Maximum 10 Rating"),
      phone: string().min(1, "Phone is required"),
      latitude: string().min(1, "Latitude is required"),
      longitude: string().min(1, "Longitude is required"),
      price: string().min(1, "price is required"),
      renttype: string().min(1, "Rent Type is required"),
      areasize: string().min(1, "Area Size is required"),
      location: number().min(1, "Location is required"),
      type: number().min(1, "Type is Requeired"),
      leveltype: number().min(1, "Level Type is requeired"),
    })
  );

  const registerSchema = toTypedSchema(
    object({
      first_name: firstNameField,
      last_name: lastNameField,
      email: emailField,
    }).and(passwordAndConfirm)
  );

  const onlyEmailSchema = toTypedSchema(
    object({
      email: emailField,
    })
  );

  const otpSchema = toTypedSchema(
    object({
      otp: otpField,
    })
  );

  const resetPasswordSchema = toTypedSchema(passwordAndConfirm);

  const updatePasswordSchema = toTypedSchema(
    object({
      old_password: passwordField,
    }).and(passwordAndConfirm)
  );

  return {
    singleNameField,
    communitySchema,
    blogSchema,
    contactSchema,
    formInput,
    loginSchema,
    registerSchema,
    onlyEmailSchema,
    otpSchema,
    resetPasswordSchema,
    updatePasswordSchema,
  };
}
