import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import '../css/Login.module.css'

export default function Login() {
  const schema = yup.object({
    email: yup.string().required('Email is required').email(),
    password: yup.string().required('Password is required').min(5, 'Password too short'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => {
      const { data } = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`, values);
      console.log(data);
    },
    validationSchema: schema,
  });

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${formik.errors.password ? 'is-invalid' : ''}`}
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}
