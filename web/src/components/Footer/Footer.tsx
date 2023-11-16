import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  const currentYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <footer>
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
