import React from 'react'
import Footer from '../components/Footer'
import SignUpForm from '../components/SignUpForm'

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-light">
      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SignUpForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default SignUpPage
