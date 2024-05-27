import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const SearchNav = () => {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();
  const path = useLocation().pathname;

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">Blog page</Link>
      </h1>
      {(path === "/blog" || path === "/admin/blog") && (
        <div className="flex justify-center items-center space-x-0">
          <p
            onClick={() =>
              navigate(
                prompt
                  ? `?search=${prompt}`
                  : path === "/blog"
                  ? "/blog"
                  : "/admin/blog"
              )
            }
            className="cursor-pointer"
          >
            <MdSearch />
          </p>
          <input
            onChange={(e) => setPrompt(e.target.value)}
            className="outline-none px-3"
            placeholder="search a post"
            type="text"
          />
        </div>
      )}
    </div>
  );
};

export default SearchNav;
