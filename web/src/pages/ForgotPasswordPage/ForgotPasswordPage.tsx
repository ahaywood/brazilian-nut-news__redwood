import { useEffect, useRef } from 'react'

import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.feed())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { username: string }) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />

      <div className="page-grid min-h-screen bg-cinder">
        <div className="col-span-12 col-start-1 row-start-1">
          <h1 className="max-w-screen overflow-hidden pt-6 text-[375px] leading-[295px] text-fountainBlue">
            <div className="text-white">FORGOT</div>
            <div className="outline">PASSWORD</div>
          </h1>
        </div>
        <div className="col-span-4 col-start-8 row-start-1">
          {/* FORGOT PASSWORD FORM */}
          <Form
            onSubmit={onSubmit}
            className="mt-[100px] bg-cinder p-2 text-white"
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
                className="rw-input"
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

            <Submit className="w-full bg-icterine py-6 text-center text-[38px] font-bold leading-none text-cinder hover:bg-fountainBlue">
              Submit
            </Submit>

            <div className="my-3 text-center">
              <Link
                className="text-icterine underline hover:text-white hover:no-underline"
                to={routes.login()}
              >
                Ready to login?
              </Link>
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

export default ForgotPasswordPage
