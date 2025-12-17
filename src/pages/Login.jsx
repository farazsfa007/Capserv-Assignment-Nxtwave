import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getData } from "../utils/storage";
import "./Login.css"

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [otp, setOtp] = useState("");
const [step, setStep] = useState("LOGIN");
const [tempUser, setTempUser] = useState(null);
const navigate = useNavigate();


const handleLogin = () => {
const users = getData("users");
const user = users.find(
(u) => u.email === email && u.password === password
);


if (!user) {
toast.error("Invalid email or password");
return;
}


setTempUser(user);
setStep("OTP");
toast.success("OTP sent successfully");
};


const verifyOtp = () => {
if (otp === tempUser.otp) {
localStorage.setItem("currentUser", JSON.stringify(tempUser));
toast.success("Login successful");
navigate("/dashboard");
} else {
toast.error("Invalid OTP");
}
};


return (
<div className="login-container">
<h2>Login</h2>


{step === "LOGIN" ? (
<>
<input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
<input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
<button onClick={handleLogin}>Login</button>
<p>
New user? <Link to="/signup">Signup</Link>
</p>
</>
) : (
<>
<input placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
<button onClick={verifyOtp}>Verify OTP</button>
</>
)}
</div>
);
};


export default Login;