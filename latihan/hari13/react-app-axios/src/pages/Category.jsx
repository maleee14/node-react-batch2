import axios from "axios";
import { useEffect, useState } from "react";

function Category() {
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [isUpdated, setIsUpdate] = useState(false);

  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/categories");
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isUpdated) {
        await axios.put(`http://localhost:3000/api/categories/${id}`, { name });
        clearData();
      } else {
        await axios.post("http://localhost:3000/api/categories", { name });
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const getDataById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/categories/${id}`
      );
      const data = response.data.category;

      setName(data.name);
      setId(data.id);
      setIsUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/categories/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const clearData = () => {
    setId("");
    setName("");
    setIsUpdate(false);
  };

  // 🔹 Logic pagination di frontend
  const totalPages = Math.ceil(categories.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = categories.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <h1 className="font-bold my-5">
        <span className="text-white">Categories</span>
      </h1>
      <div className="crud-page">
        <div className="crud-form justify-center">
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category Name?</legend>
              <input
                type="text"
                className="input"
                value={name}
                onChange={handleNameChange}
                placeholder="Type here"
              />
              <p className="label">Optional</p>
            </fieldset>
            {isUpdated ? (
              <div className="flex justify-around">
                <button className="btn btn-info" type="submit">
                  Update
                </button>
                <button className="btn btn-error" onClick={clearData}>
                  Cancel
                </button>
              </div>
            ) : (
              <button className="btn btn-info" type="submit">
                Submit
              </button>
            )}
          </form>
        </div>

        <div className="crud-table">
          <div className="h-80 overflow-x-auto">
            <table className="table table-zebra">
              <thead className="sticky top-0 bg-base-100 text-center">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((category, index) => (
                  <tr key={category.id}>
                    <td>{startIndex + index + 1}</td>
                    <td>{category.name}</td>
                    <td>
                      <div className="button-group space-x-4">
                        <button
                          className="btn btn-primary"
                          onClick={() => getDataById(category.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => deleteData(category.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 🔹 Pagination */}
          <div className="flex justify-center mx-auto space-x-5 mt-4">
            <button
              className="btn btn-accent btn-sm"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              «
            </button>
            <p>{currentPage}</p>
            <button
              className="btn btn-accent btn-sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
