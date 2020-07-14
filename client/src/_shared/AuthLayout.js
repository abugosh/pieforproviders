import React from 'react'
import PropTypes from 'prop-types'
import piefulltanlogo from '_assets/piefulltanlogo.svg'

export function AuthLayout({ backgroundImageClass, rightColumnContent }) {
  return (
    <div className="grid grid-cols-1 medium:grid-cols-8 large:grid-cols-2">
      <div
        className={`hidden large:block h-screen block bg-no-repeat bg-cover ${backgroundImageClass}`}
      />
      <div className="w-full medium:col-span-8 large:col-auto px-4 medium:px-8">
        {/* TODO: language switcher */}
        <p className="text-right">English</p>
        <img
          alt="Pie for Providers logo"
          src={piefulltanlogo}
          className="w-24 medium:w-48 mx-auto m-12"
        />
        <div className="text-center large:text-left large:col-span-3 medium:grid medium:grid-cols-8 large:grid-cols-6">
          <div className="medium:col-start-3 medium:col-span-4 large:col-span-4">
            {rightColumnContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

AuthLayout.propTypes = {
  backgroundImageClass: PropTypes.string,
  rightColumnContent: PropTypes.func
}