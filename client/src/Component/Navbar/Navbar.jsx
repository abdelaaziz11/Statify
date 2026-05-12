import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth, logout } from '../../auth';

const NavLink = ({ to, href, children, onClick }) => {
  const inner = (
    <span className="relative group inline-block px-4 py-2">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-sky-400 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
    </span>
  );

  if (to) {
    return <Link to={to} className="text-slate-300 hover:text-white text-[15px] font-medium transition-colors duration-300">{inner}</Link>;
  }
  return <a href={href} onClick={onClick} className="text-slate-300 hover:text-white text-[15px] font-medium transition-colors duration-300 cursor-pointer">{inner}</a>;
};

const LoggedInLinks = () => (
  <>
    <NavLink to="/home">Form</NavLink>
    <NavLink to="/createform">Create Form</NavLink>
    <NavLink href="/" onClick={() => logout()}>Log Out</NavLink>
  </>
);

const LoggedOutLinks = () => (
  <>
    <NavLink to="/">Home</NavLink>
    <NavLink href="#about">About</NavLink>
    <NavLink href="#contact">Contact</NavLink>
    <NavLink to="/signup">Signup</NavLink>
    <NavLink to="/login">Login</NavLink>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const [logged] = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 h-[70px] bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <header className="flex items-center justify-between h-full max-w-7xl mx-auto px-6">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text tracking-tight font-heading m-0">
            Statify
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {logged ? <LoggedInLinks /> : <LoggedOutLinks />}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-slate-50 hover:scale-110 transition-transform bg-transparent border-none p-2">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="absolute flex flex-col top-[70px] left-0 w-full bg-[#0b0f19]/95 backdrop-blur-xl border-b border-white/5 py-4 px-4 shadow-2xl md:hidden gap-1">
            {logged ? <LoggedInLinks /> : <LoggedOutLinks />}
          </div>
        )}
      </header>
    </nav>
  );
};

export default Navbar;
