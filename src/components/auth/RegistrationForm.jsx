import { useForm } from "react-hook-form";
import Field from "../common/Field";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const haldeRegister = async (formData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`, formData)
        if (response.status === 201) {
            navigate('/login')
        }
    } catch (error) {
        setError("root.random", {
        type: "random",
        message: `Register failed: ${formData.email, error.message}`,
      });
    }
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit(haldeRegister)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
    >
      <Field label={"First Name"} error={errors.firstName} className="">
        <input
          {...register("firstName", { required: "first Name is required!" })}
          className="auth-input"
          name="firstName"
          type="text"
          id="firstName"
        />
      </Field>
      <Field label={"Last Name"} error={errors.lastName} className="">
        <input
          {...register("lastName", { required: "Last Name is required!" })}
          className="auth-input"
          name="lastName"
          type="text"
          id="lastName"
        />
      </Field>

      <Field label="Email" error={errors.email} className="">
        <input
          {...register("email", { required: "Email ID is required!" })}
          className="auth-input"
          name="email"
          type="email"
          id="email"
        />
      </Field>
      <Field
        label={"Password"}
        error={errors.password}
        className=""
      >
        <input
          {...register("password", {
            required: "Password is required!",
            minLength: {
              value: 8,
              message: "Your password at least 8 characters!",
            },
          })}
          className="auth-input"
          name="password"
          type="password"
          id="password"
        />
      </Field>
      <p className="text-red-500">{errors?.root?.random?.message}</p>
      <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        type="submit"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
