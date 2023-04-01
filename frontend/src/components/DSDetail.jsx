import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Record from "./Record";

function DSDetail() {
  let { id, ds } = useParams();
  const [columns, setColumns] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("http://localhost:4000/getDataSource", { dataSourceID: ds })
      .then((response) => {
        setColumns(response.data.columns);
        setName(response.data.name);
      });
  }, []);

  let goBack = () => {
    navigate(`/app/${id}`);
  };
  return (
    <div>
      <div>DSDetail {name}</div>
      <button onClick={goBack}>back</button>
      <Record columns={columns}></Record>
    </div>
  );
}

export default DSDetail;
