import { useState } from "react";
import {
  Button, FilledInput, FormControl, IconButton, InputAdornment, Snackbar, useTheme
} from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";
import StorageService from "../../util/storageService";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { FormStyle } from "./form.style";

const RegisterationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "name Required",
    email: "email Required",
    password: "password Required",
  });
  const [open, setOpen] = useState({
    open: false,
    message: "",
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!form.name || form.name === "" || form.name.length < 3) {
      setErrors({
        ...errors,
        name: "name Required",
      });
      toaster({
        message: errors.name,
      });
    }

    if (!form.email || form.email === "" || !form.email.includes('@')) {
      setErrors({
        ...errors,
        email: "email Required",
      });
      toaster({
        message: errors.email,
      });
    }
    if (!form.password || form.password === "" || form.password.length < 8) {
      setErrors({
        ...errors,
        password: "password Required password Required and minimum 8 digit password",
      });
      toaster({
        message: errors.password,
      });
    }
    if (errors.name || errors.email || errors.password) {
      return;
    }
    StorageService.setItem("accessToken", "Token");
    StorageService.setItem("name", form.name);
    StorageService.setItem("email", form.email);
    StorageService.setItem("password", form.password);
    //send form to fake api 
    api()
    navigate('/')

  };
  const toaster = (newState: any) => {
    setOpen({ open: true, ...newState });
  };

  const handleClose = (newState: any) => {
    setOpen({ open: false, ...newState });
  };
  const handleNameChange = (e: any) => {
    if (!e.target.value || e.target.value === "" || String(e.target.value).length < 3) {
      setErrors({
        ...errors,
        name: "name Required",
      });
    }
    else {
      setErrors({
        ...errors,
        name: "",
      });
    }

    setForm({ ...form, name: e.target.value });
  };


  const handleEmailChange = (e: any) => {
    if (!e.target.value || e.target.value === "" || !String(e.target.value).includes('@')) {
      setErrors({
        ...errors,
        email: "email Required",
      });
    }
    else {
      setErrors({
        ...errors,
        email: "",
      });
    }
    setForm({ ...form, email: e.target.value });
  };
  const handlePasswordChange = (e: any) => {
    if (!e.target.value || e.target.value === "" || String(e.target.value).length < 8) {
      setErrors({
        ...errors,
        password: "password Required and minimum 8 digit password",
      });
    } else {
      setErrors({
        ...errors,
        password: "",
      });
    }
    setForm({ ...form, password: e.target.value });

  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const api = async () => {
    const data = await axios.post('/posts',
      {
        title: form.name,
        body: form.email,
        userId: form.password,
      },

      {
        headers: {
          "Content-type": "application/json",
          "charset": "UTF-8"
        }
      }
    );
    console.log(data.data)
    return data;
  }
  return (
    <FormStyle>
      <div className={`${!isDark && "light"}`}>
        <FormControl className="input" sx={{ width: '100%' }} variant="filled">
          <FilledInput
            placeholder="Name"
            value={form.name}
            onChange={(e) => handleNameChange(e)}
            hiddenLabel
            id="filled-adornment-password"
            type='text'
          />
        </FormControl>


        <FormControl className="input" sx={{ my: 4, width: '100%' }} variant="filled">
          <FilledInput
            value={form.email}
            onChange={(e) => handleEmailChange(e)}
            placeholder="Email"
            hiddenLabel
            id="filled-adornment-password"
            type='email'
          />
        </FormControl>

        <FormControl className="input" sx={{ mb: 4, width: '100%' }} variant="filled">
          <FilledInput
            placeholder="password"
            value={form.password}
            onChange={(e) => handlePasswordChange(e)}
            hiddenLabel
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button className="btn" onClick={handleSubmit} fullWidth variant="contained">Continue</Button>

        <Snackbar
          open={open.open}
          autoHideDuration={2000}
          onClose={handleClose}
          message={open.message}
        />
      </div>
    </FormStyle>
  )
}
export default RegisterationForm