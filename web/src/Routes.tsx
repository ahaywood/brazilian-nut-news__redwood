// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import BaseLayout from './layouts/BaseLayout/BaseLayout'
import LegalLayout from './layouts/LegalLayout/LegalLayout'
import LinkLayout from './layouts/LinkLayout/LinkLayout'
import ProfileLayout from './layouts/ProfileLayout/ProfileLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BaseLayout}>
        <Set wrap={ProfileLayout}>
          <Route path="/profile/{username:String}/favorites" page={FavoritesPage} name="favorites" />
          <Route path="/profile/{username:String}/comments" page={CommentsPage} name="comments" />
          <Route path="/profile/{username:String}" page={ProfilePage} name="profile" />
          <Route path="/profile/{username:String}/edit" page={EditProfilePage} name="editProfile" />
        </Set>

        <Set wrap={LegalLayout}>
          <Route path="/terms" page={TermsPage} name="terms" />
          <Route path="/disclaimers" page={DisclaimersPage} name="disclaimers" />
          <Route path="/privacy" page={PrivacyPage} name="privacy" />
        </Set>

        <Set wrap={LinkLayout}>
          <Route path="/" page={FeedPage} name="feed" />
          <Route path="/latest" page={LatestPage} name="latest" />
          <Route path="/submit" page={SubmitLinkPage} name="submitLink" />
          <Route path="/{id:String}" page={LinkPage} name="link" />
        </Set>

        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
