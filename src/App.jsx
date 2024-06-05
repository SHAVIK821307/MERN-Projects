import React, { useState, useEffect } from "react";
import RecordForm from "./RecordForm.jsx";
import RecordItem from "./RecordItem";
import "./App.css";
import axios from "axios";

const App = () => {
  const [records, setRecords] = useState([]);
  const [updateUi, setUpdateUi] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => setRecords(result.data))
      .catch((err) => console.log(err));
  }, [updateUi]);

  const addRecord = (newRecord) => {
    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);

    axios
      .post("http://localhost:3000/add", { task: newRecord })
      .then((data) => {
        console.log(data);
        setUpdateUi((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const updateRecords = (index, newdata) => {
    axios
      .put(`http://localhost:3000/update/${index}`, { task: newdata })
      .then((res) => {
        console.log(res.data);
        // setUpdateUi((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const deleteRecord = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdateUi((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="head_container bg-dark bg-gradient">
        <h1 className="head">Money Record using React</h1>
      </div>
      <div className="container-fluid my-3">
        <div className="container">
          <RecordForm addRecord={addRecord} />
          <div className="show">
            {records.map((record, index) => (
              <RecordItem
                key={record._id}
                name={record.Name}
                amount={record.Amount}
                purpose={record.Purpose}
                deleteRecord={deleteRecord}
                updateRecords={updateRecords}
                id={record._id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
