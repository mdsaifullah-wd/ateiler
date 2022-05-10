import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleLogo from '../../images/logo/google.svg';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';

const Authentication = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  useEffect(() => {
    reset();
  }, [path]);

  const [
    createUserWithEmailAndPassword,
    userFromSignUp,
    loadingFromSignUp,
    errorFromSignUp,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [
    signInWithEmailAndPassword,
    userFromSignIn,
    loadingFromSignIn,
    errorFromSignIn,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, userFromGoogleSignIn, loading, error] =
    useSignInWithGoogle(auth);

  const submitForm = (data) => {
    const { email, password } = data;
    if (path === '/register') {
      createUserWithEmailAndPassword(email, password);
    }
    path === '/login' && signInWithEmailAndPassword(email, password);

    console.log(userFromSignIn || userFromSignUp);
  };
  const googleSignIn = () => {
    signInWithGoogle();
  };

  if (userFromSignIn || userFromSignUp || userFromGoogleSignIn) {
    navigate(from || '/', { replace: true });
  }

  if (errorFromSignIn?.message) {
    console.log(errorFromSignIn.message);
  }

  if (errorFromSignUp?.message) {
    console.log(errorFromSignUp.message);
  }

  // Errors
  let displayNameFieldErrors = errors.displayName?.message;
  let emailFieldErrors = errorFromSignIn?.message.includes(
    'auth/user-not-found'
  )
    ? 'No user found with this email'
    : errorFromSignUp?.message.includes('auth/email-already-in-use')
    ? 'Email already exist'
    : errors.email?.message;

  let passwordFieldErrors =
    path === '/login' &&
    errorFromSignIn?.message.includes('auth/wrong-password')
      ? 'Password is incorrect'
      : errors.password?.message;

  let confirmPasswordFieldErrors = errors.confirmPassword?.message;
  return (
    <>
      <div className='container w-50 mt-5 mx-auto'>
        <h2 className='fs-h2 text-center mb-3 text-uppercase'>
          {path === '/register'
            ? 'Sign Up'
            : from
            ? 'Sign In First'
            : 'Sign In'}
        </h2>
        <button
          className='d-flex justify-content-center align-items-center w-100 btn btn-primary'
          onClick={googleSignIn}>
          <img src={googleLogo} alt='' />
          <span className='ms-2'>
            {path === '/login' ? 'Sign in with Google' : 'Sign up using Google'}
          </span>
        </button>

        <div
          className='d-flex justify-content-center align-items-center mt-3 px-3'
          style={{ height: '40px' }}>
          <div className='w-100 bg-dark' style={{ height: '1px' }}></div>
          <p className='mx-2'>OR</p>
          <div className='w-100 bg-dark' style={{ height: '1px' }}></div>
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
          {path === '/register' && (
            <>
              <div class='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  {...register('displayName', {
                    required: 'Enter your name',
                    minLength: {
                      value: 3,
                      message: 'Name should be minimum 3 characters',
                    },
                    maxLength: {
                      value: 20,
                      message: 'Name should be maximum 20 characters',
                    },
                    pattern: {
                      value: /^([^0-9]*)$/,
                      message: 'Name should not contain numbers',
                    },
                  })}
                  placeholder='Full Name'
                />
                <p className='text-danger'>{displayNameFieldErrors}</p>
              </div>
            </>
          )}
          <div class='mb-3'>
            <input
              className='form-control'
              {...register('email', {
                required: 'Enter an email',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
                },
              })}
              placeholder='Email'
            />

            <p className='text-danger'>{emailFieldErrors}</p>
          </div>
          <div class='mb-3'>
            <input
              type='password'
              className='form-control'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: path === '/register' && 8,
                  message: 'Password should be minimum 8 characters',
                },
              })}
              placeholder='Password'
            />
            <p className='text-danger'>{passwordFieldErrors}</p>
          </div>

          {path === '/register' && (
            <>
              <div class='mb-3'>
                <input
                  type='password'
                  className='form-control'
                  {...register('confirmPassword', {
                    required: 'Confirm Password is required.',
                    validate: (v) =>
                      v === watch('password') || 'Password should match',
                  })}
                  placeholder='Confirm Password'
                />
                <p className='text-danger'>{confirmPasswordFieldErrors}</p>
              </div>
            </>
          )}

          <button className='btn btn-success w-100' type='submit'>
            {path === '/register' ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className='text-center mt-3'>
          <span>
            {path === '/login' ? 'New to Gymo? ' : 'Already have an account? '}
          </span>
          <Link
            className='text-secondary underline'
            to={path === '/login' ? '/register' : '/login'}>
            {path === '/login' ? 'Sign Up' : 'Sign-In'}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Authentication;
