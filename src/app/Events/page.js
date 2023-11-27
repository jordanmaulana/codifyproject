import { Card } from "@/components/Card";

async function getEvents(){
  const res = await fetch("https://eventmakers-api.vercel.app/api/event",{
    //cache: "no-store",  
    cache: "force-cache",
  });
  const result = await res.json();
  //console.log(result);
  return result;
}

export default async function Events() {
  
  const { data } = await getEvents();
  
  return (
    <div className="flex flex-row justify-center h-screen bg-slate-100">
      <div className="max-h-screen overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 m-1">
              {data?.map((data) => {
                return (
                  <Card 
                  id={data.id}
                  createdAt={data.createdAt}
                  updatedAt={data.updatedAt}
                  name={data.name}
                  description={data.description}
                  location={data.location}
                  date={data.date}
                  isBanned={data.isBanned}
                  authorId={data.authorId}
                  participants={data.participants}
                  author={data.author}
                    />
                );
              })}
          </div>
      </div>
    </div>
  )
}
