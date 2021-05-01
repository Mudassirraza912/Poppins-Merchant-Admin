import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';

export const CustomModal = ({
    isVisible = false,
    setModalVisible = () => { },
    title = "Password changed",
    description = "you may now continue using Poppins with your new password",
    redirectTo="/login"
}) => {
    return (
        <Modal className="modal-dialog modal-dialog-centered" role="document"
            isOpen={isVisible}
            contentLabel="Example Modal"
            onRequestClose={(e) => setModalVisible(false)}
        >
            <div >
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 289 289">
                                        <circle id="Oval" cx="144.5" cy="144.5" r="144.5" fill="#ffbe00" />
                                    </svg>
                                </div>
                                <div className="col-md-12 text-center">
                                    <h3>{title}</h3>
                                    <p style={{
                                        fontSize: "10px"
                                    }}>{description}</p>
                                </div>
                                <div className="col-md-12 text-center mb-5">
                                    <NavLink to={redirectTo} onClick={(e) => setModalVisible(false)} className="btn btn-primary w-50">Close</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal)
