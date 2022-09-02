import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const HeaderInfos = () => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderData(res.data.data));
  });
  return (
    <div className="header-container">
      <h1>HEADER</h1>
    </div>
  );
};

export default HeaderInfos;
