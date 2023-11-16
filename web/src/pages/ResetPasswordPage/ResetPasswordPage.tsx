import { useEffect, useRef, useState } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'

const ResetPasswordPage = ({ resetToken }: { resetToken: string }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.feed())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error)
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [resetToken, validateResetToken])

  const passwordRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Password changed!')
      await reauthenticate()
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Reset Password" />

      <div className="page-grid min-h-screen bg-cinder">
        <div className="col-span-12 col-start-1 row-start-1">
          <h1 className="max-w-screen overflow-hidden pt-6 text-[375px] leading-[295px] text-fountainBlue">
            <div className="text-white">RESET</div>
            <div className="outline">PASSWORD</div>
          </h1>
        </div>
        <div className="col-span-4 col-start-8 row-start-1">
          {/* RESET PASSWORD FORM */}
          <Form onSubmit={onSubmit} className="mt-[100px] bg-cinder text-white">
            <div className="text-left">
              <div className="field">
                <Label
                  name="password"
                  className="text-icterine"
                  errorClassName="rw-label rw-label-error"
                >
                  New Password
                </Label>
                <PasswordField
                  name="password"
                  autoComplete="new-password"
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  disabled={!enabled}
                  ref={passwordRef}
                  validation={{
                    required: {
                      value: true,
                      message: 'New Password is required',
                    },
                  }}
                />
              </div>

              <FieldError name="password" className="rw-field-error" />
            </div>

            <div className="rw-button-group">
              <Submit
                className="w-full bg-icterine py-6 text-center text-[38px] font-bold leading-none text-cinder hover:bg-fountainBlue"
                disabled={!enabled}
              >
                Submit
              </Submit>
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

export default ResetPasswordPage
