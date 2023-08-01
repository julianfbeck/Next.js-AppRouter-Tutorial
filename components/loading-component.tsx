async function fetchDataMock(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 2000);
  });
}

export default async function LoadingComponent() {
  const response = await fetchDataMock();
  /*
  1: Streaming Server Rendering - Progressively rendering HTML from the server to the client.
  2: Selective Hydration  - Hydrating only the parts of the page that need to be interactive.

  See:  https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense
  */

  return (
    <main>
      <h4 className="text-4xl font-bold leading-7 ">Loaded {response}</h4>
    </main>
  );
}
