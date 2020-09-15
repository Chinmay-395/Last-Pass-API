import React from 'react'
import { connect } from 'react-redux';
const HomePage = (props) => {
  const { auth } = props;
  console.log(" well here we are ", props)
  return (
    <div className="container">
      <section>
        <h3>Save you password securely</h3>
        <p>
          <span>
            Mitigate your stress of remembering all your password
          </span>
        </p>
        <div className="box-1">
          <img src="" alt="A lock logo" />
          <p>
            <span>
              Creates a high-strength passwords for all website and applications
              and use them to store in secure vault.
            </span>
          </p>
        </div>
        <div className="box-2">
          <img src="" alt="A key logo" />
          <p>
            <span>
              Creates a high-strength passwords for all website and applications
              and use them to store in secure vault.
            </span>
          </p>
        </div>
      </section>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}
export default connect(mapStateToProps)(HomePage);
