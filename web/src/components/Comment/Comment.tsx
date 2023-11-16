import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { formatRelativeTime } from 'src/helpers/dateHelpers'

import CommentForm from '../CommentForm/CommentForm'
import Icon from '../Icon/Icon'

interface Props {
  body: string
  children?: JSX.Element | null
  commentedBy: {
    firstName: string
    lastName: string
    nickname: string
  }
  isChildComment?: boolean
  id?: string
  lastUpdated: string
  linkId: string
  link?: {
    title?: string
  }
  showRelatedLinkInfo?: boolean
}

const Comment = ({
  body,
  children,
  commentedBy,
  isChildComment = false,
  id,
  lastUpdated,
  linkId,
  link,
  showRelatedLinkInfo = false,
}: Props) => {
  const [isCommentsShowing, setIsCommentsShowing] = useState(false)
  const { isAuthenticated } = useAuth()

  console.log({ link })
  return (
    <div className="flex gap-x-5 pl-4 pr-8" id={`comment-${id}`}>
      {/* vote */}
      <div className="flex w-[20px] flex-col items-center">
        {!isChildComment && isAuthenticated && (
          <>
            <button className="up filled">
              <Icon id="up" size={16} />
            </button>
            <button className="down">
              <Icon id="up" className="rotate-180" size={16} />
            </button>
          </>
        )}
      </div>

      <div className="flex-1">
        {/* comment meta data */}
        <div className="text-medium mb-2 flex-1 font-sans text-sm dark:text-icterine">
          1 point • commented by{' '}
          <Link
            to={routes.profile({ nickname: commentedBy.nickname })}
            className="font-bold underline hover:no-underline"
          >
            {commentedBy.firstName} {commentedBy.lastName}
          </Link>{' '}
          • {formatRelativeTime(lastUpdated)}
          {showRelatedLinkInfo && link && (
            <span>
              {' '}
              • posted on{' '}
              <Link
                to={routes.link({ id: linkId })}
                className="underline hover:no-underline"
              >
                {link.title}
              </Link>
            </span>
          )}
        </div>

        {/* comment content */}
        <div
          className={`comment text-cinder dark:text-icterine ${
            isChildComment ? 'pb-4' : ''
          }`}
        >
          <p>{body}</p>

          {!isChildComment && isAuthenticated && (
            <div className="pb-14">
              {!isCommentsShowing && (
                <button
                  className="button small secondary mb-"
                  onClick={() => setIsCommentsShowing(true)}
                >
                  Reply
                </button>
              )}

              <AnimatePresence>
                {isCommentsShowing && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <CommentForm
                      close={() => setIsCommentsShowing(false)}
                      linkId={linkId}
                      parentCommentId={id}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* nested comments */}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Comment
