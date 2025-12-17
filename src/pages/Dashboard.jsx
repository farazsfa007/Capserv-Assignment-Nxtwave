import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getData } from "../utils/storage";
import { useState } from "react";
import "./Dashboard.css"

const Dashboard = () => {
const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem("currentUser"));
const loans = getData("loans");

const [search, setSearch] = useState("");
const [status, setStatus] = useState("All");

const filteredLoans = loans.filter((loan) => {
return (
loan.customerName.toLowerCase().includes(search.toLowerCase()) &&
(status === "All" || loan.status === status)
);
});


const logout = () => {
localStorage.removeItem("currentUser");
toast.success("Logged out successfully");
navigate("/login");
};


return (
<div>
<h2>Welcome, {user.name}</h2>
<button onClick={logout}>Logout</button>


<input placeholder="Search name" onChange={(e) => setSearch(e.target.value)} />
<select onChange={(e) => setStatus(e.target.value)}>
<option>All</option>
<option>Approved</option>
<option>Pending</option>
</select>


<table border="1">
<thead>
<tr>
<th>Name</th>
<th>Loan Type</th>
<th>Status</th>
<th>City</th>
</tr>
</thead>
<tbody>
{filteredLoans.map((loan) => (
<tr key={loan.id}>
<td>{loan.customerName}</td>
<td>{loan.loanType}</td>
<td>{loan.status}</td>
<td>{loan.city}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};


export default Dashboard;