import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'

import CommentForm from '../CommentForm/CommentForm'
import Icon from '../Icon/Icon'

interface Props {
  children?: JSX.Element | null
  commentedBy: {
    firstName: string
    lastName: string
    nickname: string
  }
}

const Comment = ({ children, commentedBy }: Props) => {
  const [isCommentsShowing, setIsCommentsShowing] = useState(false)

  return (
    <div className="shared-link mb-10 flex gap-x-5 pb-6 pl-4 pr-8 pt-8">
      {/* vote */}
      <div className="flex w-[60px] flex-col items-center">
        <button className="up filled">
          <Icon id="up" size={16} />
        </button>
        <button className="down">
          <Icon id="up" className="rotate-180" size={16} />
        </button>
      </div>

      <div>
        {/* comment meta data */}
        <div className="text-medium mb-2 font-sans text-sm dark:text-icterine">
          <Link
            to={routes.profile({ nickname: commentedBy.nickname })}
            className="font-bold underline hover:no-underline"
          >
            {commentedBy.firstName} {commentedBy.lastName}
          </Link>{' '}
          • 0 minutes ago
        </div>

        {/* comment content */}
        <div className="comment text-cinder dark:text-icterine">
          <p>
            Travelling the universe at this scale seems as important and amazing
            to me as travelling to a distant star. The igniting matchstick image
            has so much going on!
          </p>

          <p>
            One cringe though ... the images all seem excessively post-processed
            to me. Unrealistically saturated, contrasted, sharpened, etc. The
            colour, especially, just seems over the top and I feel like seeing
            these microscopic subjects enlarged is mind-blowing enough without
            the postprocessing distraction which makes it seem less real.
          </p>

          <p>Anyways, amazing images! Thanks!</p>

          {!isCommentsShowing && (
            <button
              className="button small secondary"
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
                <CommentForm close={() => setIsCommentsShowing(false)} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* nested comments */}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Comment
