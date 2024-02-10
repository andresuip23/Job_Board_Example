

function Header() {
    return ( 
        <>
        <nav className="flex justify-between pt-4 pb-4 border-b-2 shadow-md">
            <div className="flex items-center ml-12" >
                <img src="https://s40455.pcdn.co/wp-content/uploads/2019/07/veteranjobs-02-scaled.png" alt="logo" className="h-16"/>
            </div>
            <div className="flex justify-center justify-around items-center">
                <button className="w-28 h-12 mr-4 rounded-md border border-blue-500 border-opacity-50 shadow-md text-blue-500 hover:bg-blue-500 hover:text-white">Find Jobs</button>
                <button className="w-28 h-12 mr-4 rounded-md border border-blue-500 border-opacity-50 shadow-md text-blue-500 hover:bg-blue-500 hover:text-white">Upload a Job</button>
                <button className="w-28 h-12 mr-4 rounded-md border border-blue-500 border-opacity-50 shadow-md text-blue-500 hover:bg-blue-500 hover:text-white">About us</button>   
            </div>
            <div className="flex items-center mr-12">
                <button className=" w-24 h-12 mr-4 rounded-md border border-blue-500 border-opacity-50 shadow-md text-blue-500 hover:bg-blue-500 hover:text-white">Log in</button>
            </div>
        </nav>
        
        </>
     );
}

export default Header;