import { MdDarkMode, MdLightMode } from 'react-icons/md';

const HeaderComp = () => {
  return (
    <header className='fixed top-0 right-0 left-0 bg-white text-black  px-5 md:px-20 w-full flex h-20 justify-between items-center'>
      <h2 className='font-bold'>Where in the world?</h2>
      <button className='flex items-center gap-3'>
        <MdDarkMode /> Dark Mode
      </button>
    </header>
  )
}

export default HeaderComp;
