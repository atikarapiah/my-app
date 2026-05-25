export default function Users () {
    return (
    <div className="h-screen p-8">
      <div className="w-96 bg-gray-900 rounded-xl text-gray-800 p-8 flex flex-col gap-4">
        <div className="flex items-center justify-between font-bold">
          <h2 className="text-2xl">codinglab</h2>
          <button>
            <img src="/x.svg" className="h-6 w-6" />
          </button>
        </div>
        </div>
        <div className="flex gap-4 mt-4">
          <img
            src={"/avatar-2.avif"}
            className="rounded-full w-12 h-12 bg-cover"
          />
          <div className="flex flex-col justify-center items-start font-bold">
            <p className="text-lg">Menu Main</p>
            <div className="bg-gray-900 py-1 px-2 rounded-full flex items-center gap-1">
              <img src={"/award.svg"} className="h-4 w-4" />
              <p className="text-sm">Dashboard</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gray-900 rounded-xl">
          <p className="font-bold">overview</p>
          <div className="flex items-center gap-12">
            <div className="mt-2 text-gray-600  ">
              <div className="flex gap-2 items-center   ">
                <img src={"/hourglass.svg"} className="h-4 w-4" />
                <p>analylic</p>
              <div/>
        <div className="p-6 bg-gray-900 rounded-xl">
          <p className="font-bold">general</p>
          <div className="flex items-center gap-12">
            <div className="mt-2 text-gray-600  ">
              <div className="flex gap-2 items-center   ">
                <img src={"/hourglass.svg"} className="h-4 w-4" />
                <p>projects</p>
            <div className="bg-gray-900 py-1 px-2 rounded-full flex items-center gap-1">
              <img src={"/award.svg"} className="h-4 w-4" />
              <p className="text-sm">groups</p>
            </div>
             <div className="bg-gray-900 py-1 px-2 rounded-full flex items-center gap-1">
              <img src={"/award.svg"} className="h-4 w-4" />
              <p className="text-sm">Report</p>
            </div>
        <div className="p-6 bg-gray-900 rounded-xl">
          <p className="font-bold">Account</p>
          <div className="flex items-center gap-12">
            <div className="mt-2 text-gray-600  ">
              <div className="flex gap-2 items-center   ">
                <img src={"/hourglass.svg"} className="h-4 w-4" />
                <p>profile</p>
            <div className="bg-gray-900 py-1 px-2 rounded-full flex items-center gap-1">
              <img src={"/award.svg"} className="h-4 w-4" />
              <p className="text-sm">Settings</p>
            </div>
          </div>
          </div>
          </div>
          </div>
                </div>
            </div>
        </div>
            </div>
          </div>
          <button>
        </button>
        </div>
        </div>
        </div>
        </div>
        );
         }