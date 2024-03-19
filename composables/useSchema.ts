import z, { object, string, boolean, array, any, union, number } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

export default function () {
  /**
   * catatan jika type string harus diikuti dengan .min(1, "Name is required")
   * karena ="" adalah string
   *
   */

  const locationSchema = toTypedSchema(
    object({
      image: z.instanceof(File),
      name: string().min(1, "Name is required"),
    })
  );

  const contactSchema = toTypedSchema(
    object({
      // first_name: string({
      //   required_error: "First Name is required",
      // }).min(1, "First Name is required"),
      first_name: string().min(1, "First Name is required"),
      // last_name: string({
      //   required_error: "Last Name is required",
      // }).min(1, "Last Name is required"),
      last_name: string().min(1, "Last Name is required"),
      email: string({
        required_error: "Email is required",
      })
        .trim()
        .email("Invalid email address"),
      subject: string().min(1, "Subject is required"),
      message: string().min(1, "Message is required"),
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
      image: z.instanceof(File),
      title: string().min(1, "Title is required"),
      body: string().min(0, "Description is required"),
      category: number().min(1, "Category is required"),
      meta: string().min(1, "Meta is required"),
    }).superRefine((data, ctx) => {
      if (data.body == "<p></p>") {
        ctx.addIssue({
          code: "custom",
          message: "Body required",
          path: ["body"],
        });
      }
    })
  );

  const communitySchema = toTypedSchema(
    object({
      image: z.instanceof(File),
      title: string().min(1, "Title is required"),
      body: string().min(0, "Description is required"),
      meta: string().min(1, "Meta is required"),
    }).superRefine((data, ctx) => {
      if (data.body == "<p></p>") {
        ctx.addIssue({
          code: "custom",
          message: "Body required",
          path: ["body"],
        });
      }
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
      email: emailField,
      body: string().min(0, "Description is required"),
      rating: number({ invalid_type_error: "Rating required" })
        .min(0, "Minimum 1 Rating")
        .max(10, "Maximum 10 Rating"),
      phone: string().min(1, "Phone is required"),
      latitude: string().min(0, "Latitude is required"),
      longitude: string().min(0, "Latitude is required"),
      price: number({ invalid_type_error: "Price required" }),
      renttype: string().min(1, "Rent Type is required"),
      areasize: number({ invalid_type_error: "Area Size Required" }),
      location: number().min(1, "Location is required"),
      type: number().min(1, "Type is Requeired"),
      leveltype: number().min(1, "Level Type is required"),
    }).superRefine((data, ctx) => {
      if (data.body === "<p></p>") {
        ctx.addIssue({
          code: "custom",
          message: "Body required",
          path: ["body"],
        });
      }
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
    locationSchema,
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
