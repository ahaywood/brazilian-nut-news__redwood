import { MetaTags } from '@redwoodjs/web'

const CommentsPage = ({ nickname }) => {
  return (
    <>
      <MetaTags title="Comments" description="Comments page" />

      <h1>CommentsPage for {nickname}</h1>
    </>
  )
}

export default CommentsPage
