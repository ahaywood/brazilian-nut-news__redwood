import Header from 'src/components/Header/Header'
import Nav from 'src/components/Nav/Nav'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Nav />
      <Header />
      {children}
      {/* the footer is not included on this page because it needs to use the
        background color of the nested layout */}
    </>
  )
}

export default BaseLayout
