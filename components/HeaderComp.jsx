import { useContext } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { darkModeContext } from '@/app/layout';

const HeaderComp = () => {
  const modeContext = useContext(darkModeContext);
  return (
    <header className={`fixed top-0 right-0 left-0  border-b-2 border-gray-300  px-5 md:px-20 w-full flex h-20 justify-between items-center ${modeContext.darkMode ? 'bg-[#202C36] text-white' : 'bg-white text-black'}`}>
      <h2 className='font-bold'>Where in the world?</h2>
      <button onClick={modeContext.mode} className='flex items-center gap-3'>
        {
          modeContext.darkMode ? <><MdLightMode /> Light Mode</> : <> <MdDarkMode /> Dark Mode</>
        }
      </button>
    </header>
  )
}

export default HeaderComp;
