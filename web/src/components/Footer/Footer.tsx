import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  const currentYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <footer className="border-t-2 border-t-cinder py-8 pl-leftGutter text-black dark:border-t-icterine dark:text-icterine">
      Copyright &copy; {currentYear()}.{' '}
      <a href="https://ahhacreative.com" target="_blank" rel="noreferrer">
        Ah Ha Creative, LLC
      </a>
      . All Rights Reserved.
      <br />
      <Link to={routes.privacy()}>Privacy Policy</Link> .{' '}
      <Link to={routes.disclaimers()}>Disclaimers</Link> .{' '}
      <Link to={routes.terms()}>Terms and Conditions</Link>
    </footer>
  )
}

export default Footer
