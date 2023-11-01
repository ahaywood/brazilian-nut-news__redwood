import Footer from 'src/components/Footer/Footer'

type LinkLayoutProps = {
  children?: React.ReactNode
}

const LinkLayout = ({ children }: LinkLayoutProps) => {
  return (
    <div className="min-h-[100vh] min-w-[100vw] bg-icterine dark:bg-cinder">
      {children}
      <Footer />
    </div>
  )
}

export default LinkLayout
