import {React,useState} from 'react'
const Navbar = () => {
    const [navToggle,setNavToggle] = useState(true)

    const setNavState = ()=>{
        setNavToggle(!navToggle)
    }
  return (
    <div className=' parent flex justify-center items-center h-24 max-w-[80vw] mx-auto px-4 text-white'>
        <h1 className=" navbar w-full text-3xl font-bold text-[#00df9a]">Navbar</h1>

        <ul className="fullmenu hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
        </ul>
        <div onClick={setNavState} className='menuicon text-4xl text-center pt-2 block md:hidden'>
            
            {!navToggle ? <ion-icon name="close-outline"/> : <ion-icon name="menu-outline"/> }

        </div>

        <div className={!navToggle ? "sidemenu fixed top-0 left-0 w-[60%] border-r border-r-gray-800 h-full pt-5 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%] ease-in-out duration-[100000]"}>
        <h1 className=" navbarside w-full text-3xl font-bold text-[#00df9a] m-4">Navbar</h1>
        <ul className="uppercase p-4">
            <li className="p-4 border-b border-b-gray-800">Home</li>
            <li className="p-4 border-b border-b-gray-800">Company</li>
            <li className="p-4 border-b border-b-gray-800">Resources</li>
            <li className="p-4 border-b border-b-gray-800">About</li>
            <li className="p-4 border-b border-b-gray-800">Contact</li>
        </ul>
        </div>

    </div>
  )
}

export default Navbar