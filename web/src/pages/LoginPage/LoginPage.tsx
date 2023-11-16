import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.feed())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="page-grid min-h-screen bg-cinder">
        <div className="col-span-12 col-start-1 row-start-1">
          <h1 className="max-w-screen overflow-hidden pt-6 text-[375px] leading-[295px] text-fountainBlue">
            <div className="text-white">Login</div>
            <div className="outline">LOGIN</div>
            <div className="outline">LOGIN</div>
          </h1>
        </div>
        <div className="col-span-4 col-start-8 row-start-1">
          {/* LOGIN FORM */}
          <Form
            onSubmit={onSubmit}
            className="mt-[100px] bg-cinder p-4 text-white"
          >
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
                errorClassName="rw-input rw-input-error"
                ref={usernameRef}
                validation={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />

              <FieldError name="username" className="rw-field-error" />
            </div>

            <div className="field">
              <div className="flex items-end justify-between">
                <Label
                  name="password"
                  className="text-icterine"
                  errorClassName="rw-label rw-label-error"
                >
                  Password
                </Label>
                <Link
                  to={routes.forgotPassword()}
                  className="mb-3 text-icterine underline hover:text-white hover:no-underline"
                >
                  Forgot?
                </Link>
              </div>
              <PasswordField
                name="password"
                autoComplete="current-password"
                validation={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                }}
              />
            </div>

            <FieldError name="password" className="rw-field-error" />

            <Submit className="w-full bg-icterine py-6 text-center text-[38px] font-bold leading-none text-cinder hover:bg-fountainBlue">
              Login
            </Submit>
          </Form>
        </div>
      </div>

      <div className="border-t-2 border-t-icterine bg-icterine py-8 pl-leftGutter text-cinder">
        <Footer />
      </div>
    </>
  )
}

export default LoginPage
