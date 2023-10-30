import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import loginCss from './UserLogin.css'
import LoginHeader from './UserHeader';

const ForgotPassword = () => {
    return (
        <>
            <LoginHeader />
            <div className='center-form'>
                <div class="container">
                    <div class="row">
                        <div class="col"> </div>
                        <div class="card login-card-body">
                            <div class="card-header">
                                <h3 className='text-center'>Reset Password</h3>
                            </div>
                            <div class="card-body">
                                <div class="col mt-4">
                                    <div>
                                        <h3>In Progress...</h3>
                                        <Link to='/login'>Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col"> </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ForgotPassword;