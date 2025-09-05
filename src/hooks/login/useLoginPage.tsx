import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface FormData {
  email: string;
  password: string;
}

const defaultFormData = { email: "", password: "" };
type Errors = Partial<FormData>;

const validateFormData = (formData: FormData) => {
  const errors: Errors = {};
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!regexEmail.test(formData.email)) {
    errors.email = "Invalid email format";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else if (!regexPassword.test(formData.password)) {
    errors.password =
      "Password must be ≥ 8, có chữ hoa, thường, số, ký tự đặc biệt";
  }

  return errors;
};
const useLoginPage = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [errors, setErrors] = useState<Errors>();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const results: Errors = validateFormData(formData);
    if (Object.keys(results).length) {
      setErrors(results);
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    navigate("/", { replace: true });
  };
  const handleChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  return {
    formData,
    handleChangeFormData,
    handleSubmit,
    errors,
  };
};
export default useLoginPage;
