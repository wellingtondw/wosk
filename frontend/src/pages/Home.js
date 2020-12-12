import React from 'react'
import { connect } from 'react-redux'


const Home = () => {
    return (
        <div>
            hello world
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
