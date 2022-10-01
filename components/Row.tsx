import { title } from "process";
import { Movie } from "../typings";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  movies: Movie[];
}
function Row({ title, movies }: Props) {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-white transition duration-200 hover:text-gray-50 md:text-2xl ">
        {title}
      </h2>
      <div className="group relative  md:-ml-2">
        <MdArrowBackIosNew className="absolute top-0 bottom-0 left-2 z-40 m-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125  " />

        <div className="flex item-center  space-x-0.5 overflow-x-scroll no-scrollbar md:space-x-2.5 md:p-2">
            {
                movies.map((movie)=>(
                    <Thumbnail movie={movie} key={movie.id}/>

                ))
            }
   
        </div>
        <MdArrowForwardIos className="absolute top-0 bottom-0 left-2 z-40 m-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125  " />
      </div>
    </div>
  );
}

export default Row;
