import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { logo } from '../assets';
import { links } from '../assets/constants';

// navlink component for use in sidebar
// loop through links objects and return a NavLink component for each link
const NavLinks = ({ handleClick }) => (
  <div className='mt-10'>
    {links.map((item) => (
      <NavLink
        className='flex flex-row justify-start my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
        onClick={() => handleClick && handleClick()}
        key={item.name}
        to={item.to}
      >
        <item.icon className='w-6 h-6 mr-2' />
        {item.name}
      </NavLink>
    ))}
  </div>
);

// sidebar component
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]'>
        <img src={logo} alt='logo' className='w-full h-14 object-contain' />
        <NavLinks />
      </div>

      {/* mobile menu */}
      <div className='absolute md:hidden block top-6 right-3'>
        {/* if mobile menu is open, show the close icon, else showopen icon */}
        {mobileMenuOpen ? (
          <RiCloseLine className='w-6 h-6 text-white mr-2' />
        ) : (
          <HiOutlineMenu className='w-6 h-6 text-white mr-2' />
        )}
      </div>
    </>
  );
};

export default Sidebar;
