import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.feed())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.username,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      nickname: data.nickname,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="page-grid min-h-screen bg-cinder">
        <div className="col-span-12 col-start-1 row-start-1">
          <h1 className="max-w-screen overflow-hidden pt-6 text-[375px] leading-[295px] text-fountainBlue">
            <div className="text-white">SIGNUP</div>
            <div className="outline">SIGNUP</div>
            <div className="outline">SIGNUP</div>
          </h1>
        </div>
        <div className="col-span-4 col-start-8 row-start-1">
          {/* SIGNUP FORM */}
          <Form onSubmit={onSubmit} className="mt-[100px] bg-cinder text-white">
            <div className="field">
              <Label
                name="username"
                className="text-icterine"
                errorClassName="rw-label rw-label-error"
              >
                Email
              </Label>
              <TextField
                name="username"
                className="rw-input"
                errorClassName="rw-input rw-input-error"
                ref={usernameRef}
                validation={{
                  required: {
                    value: true,
                    message: 'Username is required',
                  },
                }}
              />
              <FieldError name="username" className="rw-field-error" />
            </div>

            <div className="field">
              <Label
                name="firstName"
                className="text-icterine"
                errorClassName="rw-label rw-label-error"
              >
                First Name
              </Label>
              <TextField
                name="firstName"
                className="rw-input"
                errorClassName="rw-input rw-input-error"
                validation={{
                  required: {
                    value: true,
                    message: 'First Name is required',
                  },
                }}
              />
              <FieldError name="firstName" className="rw-field-error" />
            </div>

            <div className="field">
              <Label
                name="lastName"
                className="text-icterine"
                errorClassName="rw-label rw-label-error"
              >
                Last Name
              </Label>
              <TextField
                name="lastName"
                className="rw-input"
                errorClassName="rw-input rw-input-error"
                validation={{
                  required: {
                    value: true,
                    message: 'Last Name is required',
                  },
                }}
              />
              <FieldError name="lastName" className="rw-field-error" />
            </div>

            <div className="field">
              <Label
                name="nickname"
                className="text-icterine"
                errorClassName="rw-label rw-label-error"
              >
                Nickname
              </Label>
              <TextField
                name="nickname"
                className="rw-input"
                errorClassName="rw-input rw-input-error"
                validation={{
                  required: {
                    value: true,
                    message: 'Nickname is required',
                  },
                }}
              />
              <FieldError name="nickname" className="rw-field-error" />
            </div>

            <div className="field">
              <Label
                name="password"
                className="text-icterine"
                errorClassName="rw-label rw-label-error"
              >
                Password
              </Label>
              <PasswordField
                name="password"
                className="rw-input"
                errorClassName="rw-input rw-input-error"
                autoComplete="current-password"
                validation={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                }}
              />
              <FieldError name="password" className="rw-field-error" />
            </div>

            <div>
              <Submit className="w-full bg-icterine py-6 text-center text-[38px] font-bold leading-none text-cinder hover:bg-fountainBlue">
                Sign Up
              </Submit>
              <div className="py-3 text-center">
                <span>Already have an account?</span>{' '}
                <Link
                  to={routes.login()}
                  className="text-icterine underline hover:text-white hover:no-underline"
                >
                  Log in!
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>

      <div className="border-t-2 border-t-icterine bg-icterine py-8 pl-leftGutter text-cinder">
        <Footer />
      </div>
    </>
  )
}

export default SignupPage
