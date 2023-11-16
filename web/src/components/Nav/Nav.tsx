import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const Nav = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <nav className="top-bar sticky-bar fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between bg-cinder px-6 py-3 shadow-md">
      {/* left side */}
      <ul>
        <li>
          <Link to={routes.feed()}>Home</Link>
        </li>
        <li>
          <Link to={routes.latest()}>Latest</Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link to={routes.submitLink()}>Submit a Link</Link>
          </li>
        )}
      </ul>

      {/* right side */}
      <ul>
        {!isAuthenticated ? (
          <>
            <li>
              <Link to={routes.signup()}>Sign Up</Link>
            </li>
            <li>
              <Link to={routes.login()} className="button">
                Login
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <button onClick={() => logOut()}>Logout</button>
            </li>
            {currentUser?.nickname && (
              <li>
                <Link
                  to={routes.profile({ nickname: currentUser.nickname })}
                  className="button"
                >
                  My Profile
                </Link>
              </li>
            )}
          </>
        )}
      </ul>
    </nav>
  )
}

export default Nav
