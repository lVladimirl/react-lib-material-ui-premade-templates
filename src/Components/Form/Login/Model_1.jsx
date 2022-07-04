import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./index.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

function Login1() {
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Required field!")
      .min(8, "minimum 8 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "At least one letter, one number and one special character"
      ),
    email: yup.string().required("Required field!").email("invalid email"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
    //code
  };
  return (
    <>
      <Paper color="secondary" className="loginSimple">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login simples</h2>
          <TextField
            error={errors.email && true}
            helperText={errors.email && errors.email.message}
            id="outlined-basic-email"
            label="Email"
            type="email"
            variant="outlined"
            {...register("email")}
          />
          <TextField
            error={errors.password && true}
            helperText={errors.password && errors.password.message}
            id="outlined-basic-password"
            label="password"
            type="password"
            variant="outlined"
            {...register("password")}
          />
          <Button
            color={errors.email || errors.password ? "error" : "secondary"}
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </form>
        <Box>
          <p><Link to="/registerPage1">Não possui conta?</Link></p>
        </Box>
      </Paper>
    </>
  );
}
export default Login1;
