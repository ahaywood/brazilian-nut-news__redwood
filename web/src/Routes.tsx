// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import BaseLayout from './layouts/BaseLayout/BaseLayout'
import LegalLayout from './layouts/LegalLayout/LegalLayout'
import LinkLayout from './layouts/LinkLayout/LinkLayout'
import ProfileLayout from './layouts/ProfileLayout/ProfileLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={BaseLayout}>
        <Set wrap={ProfileLayout}>
          <Route path="/profile/{nickname:String}/favorites" page={FavoritesPage} name="favorites" />
          <Route path="/profile/{nickname:String}/comments" page={CommentsPage} name="comments" />
          <Route path="/profile/{nickname:String}" page={ProfilePage} name="profile" />
          <Route path="/profile/{nickname:String}/edit" page={EditProfilePage} name="editProfile" />
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
