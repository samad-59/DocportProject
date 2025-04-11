// src/components/Login.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeroSection from './HeroSection';
const Login = () => {
  const loginImage = "https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1709032773~exp=1709033373~hmac=b0cf7d5f58943b0776f3828ed445f0b415ae87c7c7f069b41a32b28454aef957";
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        toast.success('🎉 Welcome back!');
        navigate('/dashboard');
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          toast.error('📧 No account found with this email. Please sign up.');
        } else if (error.code === 'auth/wrong-password') {
          toast.error('🔑 Incorrect password. Please try again.');
        } else if (error.code === 'auth/too-many-requests') {
          toast.error('⚠️ Too many failed attempts. Please try again later.');
        } else {
          toast.error('❌ Failed to login. Please try again.');
        }
        console.error('Login error:', error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ fontFamily: '"Poppins", sans-serif' }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <img src="https://docport.co/assets/images/brand/logo.png" alt="Logo" className="h-12 mx-auto mb-6" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Welcome back</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button onClick={() => navigate('/signup')} className="font-medium text-green-600 hover:text-green-500">
            Sign up
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-5xl">
        <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10 flex flex-col md:flex-row items-center justify-between">
          <div className="hidden md:block w-1/2 pr-10">
            <img src={loginImage} alt="Login" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Sign in to your account</h3>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  {...formik.getFieldProps('email')}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  {...formik.getFieldProps('password')}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.password}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
