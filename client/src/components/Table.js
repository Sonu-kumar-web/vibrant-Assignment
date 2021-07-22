import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { getPosts, deletePost } from "../redux/actions/post";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function BasicTable({ post: { posts }, getPosts, deletePost }) {
  const classes = useStyles();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // Delete User
  const deleteUser = (id) => {
    deletePost(id);
  };

  return (
    <div>
      <div className="button_container">
        <Link to="/create">
          <Button variant="contained" color="primary">
            ADD USER
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>UserId</b>
              </TableCell>
              <TableCell align="right">
                <b>Name</b>
              </TableCell>
              <TableCell align="right">
                <b>Location</b>
              </TableCell>
              <TableCell align="right">
                <b>Edit</b>
              </TableCell>
              <TableCell align="right">
                <b>Delete</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.userId}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">
                  <Link
                    to={{ pathname: "/edit", data: { row } }}
                    style={{ color: "black" }}
                  >
                    <EditIcon className="icon" />
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    className="icon"
                    onClick={() => deleteUser(row._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    post: state.modifyPost,
  };
};

export default connect(mapStateToProps, { getPosts, deletePost })(BasicTable);
