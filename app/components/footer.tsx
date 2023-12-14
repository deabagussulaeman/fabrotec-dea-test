import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="items-center text-center">
          <div className='h-6 text-2xl'>Dea</div>
          <div className='h-4'>Fabrotec Test</div>
        </div>

        <div>
          <p className="ml-4">Copyright &copy;{currentYear} All Right Reserved</p>
        </div>

        <div className="flex items-center">
        </div>
      </div>
    </footer>
  );
};

export default Footer;