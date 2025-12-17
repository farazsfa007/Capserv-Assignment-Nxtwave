import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getData, setData } from "../utils/storage";
import "./Signup.css"

const Signup = () => {
const [form, setForm] = useState({});
const navigate = useNavigate();

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSignup = () => {
const { name, email, password, phone, city } = form;

if (!name || !email || !password || !phone || !city) {
toast.error("All fields required");
return;
}

const users = getData("users");

if (users.some((u) => u.email === email)) {
toast.error("Email already exists");
return;
}

users.push({
id: Date.now(),
name,
email,
password,
phone,
city,
otp: "111222",
});

setData("users", users);
toast.success("Signup successful");
navigate("/login");
};

return (
<div className="signup-container">
<h2>Signup</h2>
<input name="name" placeholder="Name" onChange={handleChange} />
<input name="email" placeholder="Email" onChange={handleChange} />
<input name="password" type="password" placeholder="Password" onChange={handleChange} />
<input name="phone" placeholder="Phone" onChange={handleChange} />
<input name="city" placeholder="City" onChange={handleChange} />
<button onClick={handleSignup}>Signup</button>
</div>
);
};

export default Signup;