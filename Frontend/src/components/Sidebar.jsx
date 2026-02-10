import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block px-5 py-4 text-white no-underline flex items-center  font-medium
     ${isActive ? "bg-slate-700" : "bg-transparent"}
     hover:bg-slate-800`;

  return (
    <div className="fixed top-0 left-0 w-[230px] h-screen bg-slate-900 text-white overflow-y-auto">
      
      {/* 🔵 Circular Images */}
      <div className="text-center pb-8">
        <img
          src="/image2.png"
          alt="Blood System"
          className="w-[120px] h-[120px] object-cover rounded-full border-[3px] border-white mt-10 mb-3 mr-4 inline-block"
        />

        <img
          src="/image1.png"
          alt="Blood System"
          className="w-[120px] h-[120px] object-cover rounded-full border-[3px] border-white mt-5 mr-4 inline-block"
        />
      </div>

      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
      <NavLink to="/tabular-result" className={linkClass}>Tabular Result</NavLink>
      <NavLink to="/research" className={linkClass}>Research Work</NavLink>
      <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
    </div>
  );
}

export default Sidebar;
