type LegalLayoutProps = {
  children?: React.ReactNode
}

const LegalLayout = ({ children }: LegalLayoutProps) => {
  return <div className="bg-icterine">{children}</div>
}

export default LegalLayout
