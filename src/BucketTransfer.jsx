import React, { useState } from "react";

const BucketTransfer = () => {
  const [bucket1, setBucket1] = useState(["Item 1", "Item 2", "Item 3", "Item 4","Item 5","Item 6"]);
  const [bucket2, setBucket2] = useState([]);
  const [selectedBucket1, setSelectedBucket1] = useState([]);
  const [selectedBucket2, setSelectedBucket2] = useState([]);

  const transferSelected = (source, setSource, target, setTarget, selected, setSelected) => {
    setTarget([...target, ...selected]);
    setSource(source.filter(item => !selected.includes(item)));
    setSelected([]);
  };

  const transferAll = (source, setSource, target, setTarget) => {
    setTarget([...target, ...source]);
    setSource([]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px" }}>
      {/* Bucket 1 */}
      <div>
        <h3>Bucket 1</h3>
        <select
          multiple
          value={selectedBucket1}
          onChange={(e) => 
            setSelectedBucket1(Array.from(e.target.selectedOptions, option => option.value))
          }
          style={{ width: "150px", height: "200px" }}
        >
          {bucket1.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div style={{ marginTop: "10px" }}>
          <button className="btn" onClick={() => transferSelected(bucket1, setBucket1, bucket2, setBucket2, selectedBucket1, setSelectedBucket1)}>
            Add
          </button>
          <button className="btn1" onClick={() => transferAll(bucket1, setBucket1, bucket2, setBucket2)}>Add All</button>
        </div>
      </div>

      {/* Bucket 2 */}
      <div>
        <h3>Bucket 2</h3>
        <select
          multiple
          value={selectedBucket2}
          onChange={(e) => 
            setSelectedBucket2(Array.from(e.target.selectedOptions, option => option.value))
          }
          style={{ width: "150px", height: "200px" }}
        >
          {bucket2.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div style={{ marginTop: "10px" }}>
          <button className="btn" onClick={() => transferSelected(bucket2, setBucket2, bucket1, setBucket1, selectedBucket2, setSelectedBucket2)}>
            Remove
          </button>
          <button className="btn1" onClick={() => transferAll(bucket2, setBucket2, bucket1, setBucket1)}>Remove All</button>
        </div>
      </div>
    </div>
  );
};

export default BucketTransfer;
