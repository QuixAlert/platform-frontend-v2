'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

{/* não usei o use router pra verificar o estado da pagina*/}

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = (path) => {
    setActiveLink(path); // 
  };

  return (
    <>
    <div className="mt-[76px] w-[77px] h-screen bg-[#269996] relative">
      <nav className="absolute inset-0 bg-[url('/assets/sidebar-backgroud.png')] bg-no-repeat bg-top bg-contain">
        <ul className='flex flex-col items-center gap-[57px] pt-[47px]'>
          <li>
            <Link href="/Home" onClick={() => handleClick('/Home')}>
              <Image
                src={activeLink === '/Home' ? '/assets/icons-sidebar/home-blue.png' : '/assets/icons-sidebar/home.png' }
                alt="Home"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href="/#" onClick={() => handleClick('#')}>
              <Image
                src={activeLink === '#' ? '/assets/icons-sidebar/person-blue.png' :  '/assets/icons-sidebar/person.png'}
                alt="#"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href="/#" onClick={() => handleClick('#')}>
              <Image
                src={activeLink === '#' ? '/assets/icons-sidebar/document-blue.png' :  '/assets/icons-sidebar/document.png'}
                alt="#"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href="/#" onClick={() => handleClick('#')}>
              <Image
                src={activeLink === '#' ? '/assets/icons-sidebar/dog-blue.png' :  '/assets/icons-sidebar/dog.png'}
                alt="#"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href="/#" onClick={() => handleClick('#')}>
              <Image
                src={activeLink === '#' ? '/assets/icons-sidebar/alert-blue.png' :  '/assets/icons-sidebar/alert.png'}
                alt="#"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
             <Link href="/#" onClick={() => handleClick('#')}>  {/*pegar a imagen correta */}
              <Image  
                src={activeLink === '#' ? '/assets/icons-sidebar/config-blue.png' :  '/assets/icons-sidebar/config.png'}
                alt="#"
                width={24}
                height={24}
                />
              </Link>
          </li>
          <li>
            <Link href="/#" onClick={() => handleClick('#')}>
              <Image
                src={activeLink === '#' ? '/assets/icons-sidebar/interrogacao-blue.png' :  '/assets/icons-sidebar/interrogacao.png'}
                alt="#"
                width={24}
                height={24}
                />
              </Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Sidebar;
