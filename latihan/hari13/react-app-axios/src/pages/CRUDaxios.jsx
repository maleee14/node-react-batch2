import "../assets/css/CRUDaxios.css";
import axios from "axios";
import { useState, useEffect } from "react";

function CRUDaxios() {
  const [movies, setData] = useState([]);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/movies");
        console.log(response.data.movies);
        setData(response.data.movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/categories"
        );
        setCategory(response.data.categories);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

  return (
    <>
      <h1>CRUD Axios</h1>
      <div className="crud-page">
        <div className="crud-form">
          <form>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Movie title.."
            />

            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              name="year"
              placeholder="Movie year.."
            />

            <label htmlFor="categoryId">Category</label>
            <select id="categoryId" name="categoryId">
              {categories.map((cat, index) => (
                <option key={index} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="crud-table">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Year</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{movie.title}</td>
                  <td>{movie.year}</td>
                  <td>{movie.category.name || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CRUDaxios;
