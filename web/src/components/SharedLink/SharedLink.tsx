import { Link, routes } from '@redwoodjs/router'

import Icon from '../Icon/Icon'

interface Props {
  id: string
  numberOfComments: number
  points: number
  submittedBy: {
    firstName: string
    lastName: string
    username: string
  }
  title: string
  url: string
}

const SharedLink = ({
  id,
  numberOfComments,
  points,
  submittedBy,
  title,
  url,
}: Props) => {
  return (
    <div className="shared-link flex gap-x-5 pb-6 pl-4 pr-8 pt-8 w-full">
      {/* vote */}
      <div className="flex flex-col">
        <button className="up filled">
          <Icon id="up" />
        </button>
        <button className="down">
          <Icon id="up" className="rotate-180" />
        </button>
      </div>

      {/* content */}
      <div className="flex-1">
        <h2 className="font-condensed text-6xl uppercase leading-[0.8]">
          <Link
            to={routes.link({ id })}
            className="text-cinder visited:text-telemagenta dark:text-icterine"
          >
            {title}
          </Link>
        </h2>
        <div className="text-medium font-sans text-sm dark:text-icterine">
          <strong>{points} points</strong> • submitted by{' '}
          <Link
            to={routes.profile({ username: submittedBy.username })}
            className="font-bold underline hover:no-underline"
          >
            {submittedBy.firstName} {submittedBy.lastName}
          </Link>{' '}
          • 0 minutes ago •{' '}
          <Link
            to={routes.link({ id })}
            className="font-bold underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            {numberOfComments} comments
          </Link>
        </div>
      </div>

      {/* arrow */}
      <Link to={url} className="text-cinder dark:text-icterine">
        <Icon id="arrow" className="relative top-2 w-14" />
      </Link>
    </div>
  )
}

export default SharedLink
