import { MetaTags } from '@redwoodjs/web'

const DisclaimersPage = () => {
  return (
    <>
      <MetaTags title="Disclaimers" description="Disclaimers page" />

      <h1 className="max-w-screen overflow-hidden pt-6 text-[375px] leading-[295px] text-cinder">
        Disclaimers
      </h1>

      <div className="page-grid">
        <div className="col-span-6 col-start-4 mb-[100px]">
          <p>
            This website/blog/email series is an educational and informational
            resource for business owners. It is not a substitute for working
            with a business consultant or other professional. I cannot guarantee
            the outcome of following the recommendations provided and any
            statements made regarding the potential outcome are expressions of
            opinion only. I make no guarantees about the information and
            recommendations provided herein. By continuing to use/
            read/participate in this website/blog/email series you acknowledge
            that I cannot guarantee any particular results, as such outcomes are
            based on subjective factors that are not within my control.
            Therefore, following any information or recommendations provided on
            this website/blog/email series are at your own risk. If you need
            business advice, you should hire a business consultant or other
            professional.
          </p>
        </div>
      </div>
    </>
  )
}

export default DisclaimersPage
