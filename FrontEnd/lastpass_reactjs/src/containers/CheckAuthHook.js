import React, { useState, useEffect } from 'react'
import { connect, useSelector } from "react-redux";
function CheckAuthHook() {
  const [isAuth, setAuth] = useState(false)
  const authVal = useSelector(state => state.auth)

  useEffect(() => {
    // console.log("The Props", props)
    console.log("Working here")
    console.log(authVal)
    if (authVal) {
      console.log("Exists")
      setAuth(!isAuth)
    }

  }, [])

  return (
    <div>
      <h1>Hook</h1>
      {console.log("   ", isAuth)}
      {/* {authVal.token} */}
    </div>
  )
}
export default CheckAuthHook
