import React from 'react'
import { connect } from "react-redux";
import { Redirect, Route } from 'react-router-dom';

function AuthRoute({ children, user, ...rest }) {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user == null ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/Home",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

const mapStateToProps = (state) => ({
    user: state.userReducer.user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute)
