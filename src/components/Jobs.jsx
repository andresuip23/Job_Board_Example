import DummyData from "../DummyData";

function Jobs() {
    const data = DummyData;

  return (
    <>
      {data.map(job =>(
            <div className="mt-8 ml-4 border w-2/4 p-4 rounded-md hover:shadow-md" key={job.id}>
            <div className="flex justify-between">
            <div className="flex">
            <img  src={job.logo} alt="logo"className="mr-8 h-8 w-8"/>
              <div className="flex-col">
                <h1 className="text-lg font-bold">{job.title}</h1>
                <div className="flex content-center items-center">
                <p className="mr-3 text-gray-500">{job.companyName}</p>
                <p className="w-1 h-1 rounded mr-3 bg-gray-500"/>
                <p className="mr-3  h-4 text-center w-14 bg-red-200 rounded-md text-xs font-thin text-red-800">{job.type}</p>
                <p className="w-1 h-1 rounded mr-3 bg-gray-500"/>
                <p className=" p-1 text-xs font-thin tracking-widest text-gray-500">$1000-$15000 USD</p>
                </div>
              </div>
              </div>
              <div className="flex flex-col">
                <p className="text-md font-bold">San Miguelito, Panama</p>
                <p className="text-gray-500 text-right">Posted 10 min ago</p>
              </div>
            </div>
            <ul className="ml-16 mt-3">
                <li> Within this role, you will be creating content for a wide range of local and international clients</li>
                <li> Within this role, you will be creating content for a wide range of local and international clients</li>
            </ul>
            <div></div>
          </div>
      ))}
    </>
  );
}

export default Jobs;
