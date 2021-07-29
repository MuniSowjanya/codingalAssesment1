import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      <h1 style={{ paddingTop: "2px" }}>Simple Inventory Table</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
            <thead style={{ backgroundColor: "green", color: "white" }}>
              <tr>
                <th>User ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* <div className="pagination">
        <ReactPaginate
          activePage={posts}
          pageCount={postsPerPage}
          totalItemsCount={posts.length}
          pageRangeDisplayed={posts.length / postsPerPage}
          onPageChange={handlePageChange}
        />
      </div> */}

      <div className="pagination-background">
        <Pagination
          activePage={posts}
          itemsCountPerPage={postsPerPage}
          totalItemsCount={posts.length}
          pageRangeDisplayed={posts.length / postsPerPage}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  );
}
