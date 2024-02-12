function JobModal({ job, closeModal }) {
  return (
    <>
      <div className="h-auto w-2/4 border flex flex-col mt-2 rounded-md shadow-md absolute bg-white">
        <div
          className="text-right pr-4 border-b pb-2 bg-blue-200 text-blue-900 rounded-t-md"
          onClick={closeModal}
        >
          {" "}
          X{" "}
        </div>
        <div className="flex items-center pt-4">
          <img src={job.logo} alt="LOGO" className="h-16 w-16 ml-2" />
          <div className="pl-2 font-bold">{job.title}</div>
        </div>
        <div className="flex pt-4 pl-2 justify-between pr-2">
          <div className="flex">
            <div className="h-7 w-16 bg-blue-200 rounded-md text-center text-blue-900 font-bold mr-2">
              {job.location}
            </div>
            <div className="h-7 w-20 bg-yellow-200 rounded-md text-center text-yellow-900 font-bold mr-2">
              {job.type}
            </div>
          </div>
          <div>Posted: {job.postedOn.toLocaleDateString()}</div>
        </div>
        <div>
          <div className="flex pt-2 pl-2">
            <p className="pr-1 font-bold">Salary Range: </p>
            <p className="text-gray-500"> 1200 - 1500 USD</p>
          </div>
          <p className="pt-2 pl-2 font-bold">Responsabillities:</p>
          <ul className="list-inside list-disc text-justify">
            <li className="text-gray-500 pl-8 pr-2">
              User interface development: Creating attractive, responsive, and
              intuitive user interfaces using technologies like HTML, CSS, and
              JavaScript.
            </li>
            <li className="text-gray-500 pl-8 pr-2">
              Design implementation: Converting UX/UI designs into functional
              code, ensuring the design looks and works consistently across
              different browsers and devices.
            </li>
            <li className="text-gray-500 pl-8 pr-2">
              Performance optimization: Optimizing front end performance to
              ensure fast loading times and a smooth user experience, using
              techniques such as image optimization, caching, and reducing HTTP
              requests.
            </li>
            <li className="text-gray-500 pl-8 pr-2">
              Collaboration with the team: Working collaboratively with
              designers, back end developers, and other team members to
              integrate the front end with the back end, as well as to
              troubleshoot issues and enhance the overall user experience.
            </li>
          </ul>
          <div className="flex pt-2 pl-2 ">
            <div className="pr-2 font-bold">Skill Required:</div>
            {job.skills.map((skill, index) => (
              <div
                key={index}
                className=" h-7 w-24 bg-green-200 rounded-md text-center text-green-900 font-bold mr-2"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-4 mb-4 justify-center">
          <button className="w-20 h-8 mr-4 rounded-md border  text-blue-500 hover:bg-blue-500 hover:text-white">
            Details
          </button>
          <button className="w-24 h-8 mr-4 rounded-md border  text-blue-500 hover:bg-blue-500 hover:text-white">
            Easy Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default JobModal;
