import { MetaTags } from '@redwoodjs/web'

const CommentsPage = ({ username }) => {
  return (
    <>
      <MetaTags title="Comments" description="Comments page" />

      <h1>CommentsPage for {username}</h1>
    </>
  )
}

export default CommentsPage
