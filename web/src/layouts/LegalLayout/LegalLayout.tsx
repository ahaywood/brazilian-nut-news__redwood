import Footer from 'src/components/Footer/Footer'

type LegalLayoutProps = {
  children?: React.ReactNode
}

const LegalLayout = ({ children }: LegalLayoutProps) => {
  return (
    <div className="legal-content bg-icterine">
      {children}
      <div className="border-t-2 border-t-cinder py-8 pl-leftGutter text-black">
        <Footer />
      </div>
    </div>
  )
}

export default LegalLayout
