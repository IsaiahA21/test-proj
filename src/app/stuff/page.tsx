import { supabase } from "@/lib/supabase";
import { mycreateClient } from "@/lib/supabase";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

interface Stuff {
  stuff_id: string;
  created_at: string;
  Title: string;
  description: string;
}

export default async function stuffPage() {
  //Serrver side data fetching no need to use getServerSideProp because of src/app directory
  const supabase = await mycreateClient();
  const { data: dbStuffs, error } = await supabase.from("stuffs").select();
  if (error) {
    return <h2>No stuffs in database</h2>;
  }

  return (
    <>
      <p className="text-center mt-3 text-purple-500 text-5xl font-bold ">
        Welcome to stuff page
      </p>
      <div className="m-auto border-2 w-3/4">
        <div className="flex flex-wrap justify-left content-center">
          {dbStuffs.length > 0 &&
            dbStuffs.map((st: Stuff, index: number) => (
              <Card key={index} className="w-[300px] m-5">
                <CardTitle>{st.Title}</CardTitle>
                <CardDescription>{st.description}</CardDescription>
                <CardFooter>{st.created_at}</CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}
