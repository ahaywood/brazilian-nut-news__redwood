import type {
  FindProfileHeaderQuery,
  FindProfileHeaderQueryVariables,
} from 'types/graphql'

import { NavLink, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Icon from 'src/components/Icon/Icon'

export const QUERY = gql`
  query FindProfileHeaderQuery($nickname: String!) {
    userByNickname(nickname: $nickname) {
      id
      lastName
      nickname
      firstName
      twitter
      facebook
      youtube
      linkedin
      github
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindProfileHeaderQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userByNickname,
}: CellSuccessProps<
  FindProfileHeaderQuery,
  FindProfileHeaderQueryVariables
>) => {
  const { currentUser } = useAuth()
  return (
    <div className="border-b-2 border-b-icterine pb-2">
      <h1 className="max-w-screen overflow-hidden pt-6 text-[19em] leading-[.8] text-white">
        <span className="tex-white outline">{userByNickname.firstName}</span>{' '}
        <span className="text-fountainBlue">{userByNickname.lastName}</span>
      </h1>

      <div className="flex flex-col items-start justify-between pr-5 md:flex-row md:items-center">
        <nav>
          <ul className="flex flex-col justify-start text-left font-condensed text-3xl uppercase text-fountainBlue md:flex-row md:gap-11 md:text-4xl lg:text-6xl">
            <li>
              <NavLink
                className="hover:text-white"
                activeClassName="text-icterine"
                to={routes.profile({ nickname: userByNickname.nickname })}
              >
                Links Shared
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-white"
                activeClassName="text-icterine"
                to={routes.comments({ nickname: userByNickname.nickname })}
              >
                Comments
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-white"
                activeClassName="text-icterine"
                to={routes.favorites({ nickname: userByNickname.nickname })}
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>

        {userByNickname.id === currentUser?.id ? (
          <NavLink
            className="font-condensed text-3xl uppercase text-stormDust hover:text-white md:text-4xl lg:text-6xl"
            activeClassName="text-icterine"
            to={routes.editProfile({ nickname: userByNickname.nickname })}
          >
            Edit My Profile
          </NavLink>
        ) : (
          <ul className="flex gap-8 text-stormDust">
            {userByNickname.github && (
              <li>
                <a
                  href={userByNickname.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-icterine"
                >
                  <Icon size={42} id="github" />
                </a>
              </li>
            )}
            {userByNickname.facebook && (
              <li>
                <a
                  href={userByNickname.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-icterine"
                >
                  <Icon size={42} id="facebook" />
                </a>
              </li>
            )}
            {userByNickname.youtube && (
              <li>
                <a
                  href={userByNickname.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-icterine"
                >
                  <Icon size={42} id="youtube" />
                </a>
              </li>
            )}
            {userByNickname.linkedin && (
              <li>
                <a
                  href={userByNickname.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-icterine"
                >
                  <Icon size={42} id="linkedin" />
                </a>
              </li>
            )}
            {userByNickname.twitter && (
              <li>
                <a
                  href={userByNickname.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-icterine"
                >
                  <Icon size={42} id="twitter" />
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}
