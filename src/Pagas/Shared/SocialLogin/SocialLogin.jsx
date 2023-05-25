import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    const googleWithLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={googleWithLogin} className="btn btn-circle btn-outline">G</button>
            </div>
        </div>
    );
};

export default SocialLogin;