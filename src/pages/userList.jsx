import { useState } from "react";
import "./userList.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSliceActions } from "../store/reduxSlices/userSlice";

const UserList = () => {
  const dispatch = useDispatch()
  const userList = useSelector(state => state.users.userList);
  const [currentPage, setCurrentPage] = useState(0); // Initialize to 0
  const itemsPerPage = 10;

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const pageCount = Math.ceil(userList.length / itemsPerPage);
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userList.slice(indexOfFirstItem, indexOfLastItem);


  const handleDeleteUser = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      dispatch(userSliceActions.deleteUser({ id: id }));
    }
  };
  return (
    <div>
      <div>
        <Link to="/create"><button className="create-btn">Create + </button></Link>
        <div className="user-table-container">
          <table className="user-table">
            <thead>
              <tr className="">
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th className="action-data-head">Action</th>

              </tr>
            </thead>
            <tbody>

              {
                currentItems && currentItems.map((data, i) => (
                  <tr key={Math.random(i)}>
                    <td>{data.ID}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
                    <td className="action-data">
                      <Link to={`/userDetails/${data.ID}`} className="user-detail-view-btn">View</Link>
                      <div className="user-detail-delete-btn" onClick={() => handleDeleteUser(data.ID)}>Delete</div>
                    </td>
          
                  </tr>
                ))
              }
            </tbody>
          </table>

        </div>
        <div className="pagination-container">
          <button className="pagination-btn" onClick={() => handlePageClick(0)} disabled={currentPage === 0}>{"<<"}</button>
          <button className="pagination-btn" onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 0}>{"<"}</button>
          {[...Array(pageCount).keys()].slice(Math.max(0, currentPage - 1), Math.min(currentPage + 2, pageCount)).map((page) => (
            <button className={currentPage === page ? "pagination-active-page pagination-btn" : "pagination-btn"} key={page} onClick={() => handlePageClick(page)}>{page + 1}</button>
          ))}
          <button className="pagination-btn" onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === pageCount - 1}>{">"}</button>
          <button className="pagination-btn" onClick={() => handlePageClick(pageCount - 1)} disabled={currentPage === pageCount - 1}>{">>"}</button>
        </div>
      </div>
    </div>
  )
}

export default UserList