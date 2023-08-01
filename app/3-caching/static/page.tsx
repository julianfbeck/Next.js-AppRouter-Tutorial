type Time = {
  datetime: string;
};

export default async function DataFetching() {
  // By default, next.js fetches data once during build time
  const res = await fetch("http://worldtimeapi.org/api/timezone/Europe/Berlin");

  const data: Time = await res.json();
  const hourMinuteSecond = data.datetime.split("T")[1].split(".")[0];
  return (
    <main>
      <div className="">
        <h1 className="text-xl pb-3">Current time in Berlin </h1>
        <p className="text-4xl inline-flex font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-1">
          {hourMinuteSecond}
        </p>
      </div>
    </main>
  );
}
