import Footer from 'src/components/Footer/Footer'

type LinkLayoutProps = {
  children?: React.ReactNode
}

const LinkLayout = ({ children }: LinkLayoutProps) => {
  return (
    <div className="min-h-[100vh] min-w-[100vw] bg-icterine dark:bg-cinder">
      {children}
      <div className="border-t-2 border-t-cinder py-8 pl-leftGutter text-black dark:border-t-icterine dark:text-icterine">
        <Footer />
      </div>
    </div>
  )
}

export default LinkLayout
