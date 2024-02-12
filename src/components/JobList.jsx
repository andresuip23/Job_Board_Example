import Jobs from "./Jobs";
import SearchBar from "./SearchBar";

function JobList() {
  
  return (
    <>
      <div className="pt-4 pb-10  bg-blue-50">
        <h1 className="text-5xl mb-4 ml-20 mt-14 antialiased font-extrabold tracking-tighter text-blue-700">
          Find your dream job
        </h1>
        <p className="ml-20 tracking-wider">
          Looking for jobs? Browse our lates job opening to view & apply to the
          best jobs today
        </p>
      </div>
      <SearchBar/>
      <div className="ml-96">
      <Jobs/>
      </div>
    </>
  );
}

export default JobList;
