import React from 'react'
import Navbar from './Navbar'

function Help() {
  return (
    <div>
      <Navbar />
      <div className="help-content" style={{ padding: '20px' }}>
        <h2>Help Center</h2>
        <p>
          Welcome to the help center! Here you can find answers to frequently
          asked questions, contact support, or browse through our documentation.
        </p>
        <h3>Frequently Asked Questions (FAQ)</h3>
        <p>
              Here are some common questions and answers that might help you:
          <ul>
            <li>How do I place an order?</li>
            <li>What payment methods do you accept?</li>
            <li>How can I track my order?</li>
          </ul>
        </p>
        <h3>Contact Support</h3>
        <p>
          If you can't find the answer to your question in the FAQ, feel free to
          contact our support team. We're here to help!

      </p>
      <div className='Contact'>
      <text>
      Email: sabrinawoo3895@gmail.com
      </text>
      <div>
        Phone: 604-727-5009
        </div>
      </div>
        <h3>Documentation</h3>
        <p>
          Check out our documentation for more detailed information about our
          products and services.
        </p>
      </div>
    </div>
  );
}

export default Help;