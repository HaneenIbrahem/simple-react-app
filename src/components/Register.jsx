import { useFormik } from 'formik';
import axios from 'axios';
import '../css/Register.module.css';

export default function Register() {
  const formik = useFormik({
    initialValues: { userName: '', email: '', password: '' },
    onSubmit: async (values) => {
      const { data } = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`, values);
      console.log(data);
    },
  });

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
}
