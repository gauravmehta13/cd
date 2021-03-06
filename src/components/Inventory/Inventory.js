import Typography from "@material-ui/core/Typography";

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Divider } from "@material-ui/core";
import AddProductForm from "./AddProductForm";
import ShowProducts from "./ShowProducts";
import "../../Globalcss/globalcss.css";
const useStyles = makeStyles({
  formHeadings: {
    margin: 20,
    marginBottom: 0,
  },
  formControl: {
    marginTop: "1%",
  },
  container: {
    justifyContent: "space-between",
    flexDirection: "column",
    display: "flex",
  },
  btnHolder: {
    justifyContent: "flex-end",
    display: "flex",
    marginRight: "30px",
    marginBottom: "30px",
  },
});

const InventoryManager = (props) => {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const editButtonClicked = () => {
    setEditForm(!editForm);
    // alert(rows[checkedBoxes[0]].productId)
  };
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        {!editForm && (
          <Button
            onClick={toggleForm}
            className="row AllButtons"
            variant="contained"
            style={{ marginBottom: "10px", float: "right" }}
          >
            {showForm === true ? "My Products" : "Add new Product"}
          </Button>
        )}
      </div>

      {!showForm && !editForm && (
        <Typography fullWidth className="TypographyTitle" gutterBottom>
          Your Added Products
        </Typography>
      )}
      <div style={{ marginTop: "30px" }}></div>
      {showForm && <AddProductForm toggleForm={toggleForm} />}

      {!showForm && <ShowProducts editButtonClicked={editButtonClicked} />}
      <div style={{ marginTop: "60px" }}></div>
    </div>
  );
};

export default InventoryManager;
