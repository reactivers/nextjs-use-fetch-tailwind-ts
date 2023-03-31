import { useGet } from "@reactivers/use-fetch";
import { NextPage } from "next/types";
import { useEffect } from "react";
import { ITodo } from "utils/types";

const Home: NextPage = () => {
  const { request, response, fetched } = useGet<ITodo[]>();

  useEffect(() => {
    request({
      endpoint: "/todos",
    });
  }, [request]);

  const todos = fetched ? response : [];

  return (
    <div className="w-full flex justify-center">
      <div
        id="home-page-container"
        className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {todos.map((todo, index) => {
          return (
            <div
              className="col-span-1 h-[300px] relative bg-white/10"
              key={index}
            >
              <div className="absolute bottom-0 left-0 bg-black/40 text-center w-full py-2 text-white text-2xl">
                {todo.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
