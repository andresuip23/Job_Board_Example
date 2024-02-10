function SearchBar() {
  return (
    <>
      <div className="flex justify-center items-center p-8 border-b-2 ">
        <input
          type="text"
          placeholder="  Country or Timezone"
          className="rounded mr-8 w-1/4 h-8 border"
        />
        <input
          type="text"
          placeholder="Job title or Keyword"
          className="rounded mr-8 w-1/4 h-8 border"
        />
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Find Job
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Filter
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
