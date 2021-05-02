import React from 'react'
import { connect } from "react-redux";
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ children, user, ...rest }) {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user !== null ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
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

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
