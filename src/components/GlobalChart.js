import React from "react";
import { useEffect, useState } from "react";
import { Tooltip, Treemap } from "recharts";
import colors from "../styles/_settings.scss";

const GlobalChart = ({ coinsData }) => {
  const [dataArray, setDataArray] = useState([]);
  /* Retourne la couleur de la boite en fonction du % d'évolution 24h*/
  const colorPicker = (number) => {
    if (number >= 20) {
      return colors.color1;
    } else if (number >= 5) {
      return colors.green2;
    } else if (number >= 0) {
      return colors.green1;
    } else if (number >= -5) {
      return colors.red1;
    } else if (number >= -20) {
      return colors.red2;
    } else {
      return colors.black2;
    }
  };
  /* Permet d'exclure les stablecoins  de la watchlist*/
  const excludeCoin = (coin) => {
    if (
      coin === "usdt" ||
      coin === "usdc" ||
      coin === "busd" ||
      coin === "dai" ||
      coin === "ust" ||
      coin === "mim"
    ) {
      return false;
    } else {
      return true;
    }
  };
  useEffect(() => {
    let chartData = [];

    if (coinsData.length > 0) {
      for (let i = 0; i < 45; i++) {
        if (excludeCoin(coinsData[i].symbol)) {
          chartData.push({
            name:
              coinsData[i].symbol.toUpperCase() +
              " " +
              coinsData[i].market_cap_change_percentage_24h.toFixed(1) +
              "%",
            size: coinsData[i].market_cap,
            fill: colorPicker(coinsData[i].price_change_percentage_24h),
          });
        }
      }
    }
    setDataArray(chartData);
  }, [coinsData]);

  /* Retourne le nom de la crypto au survol de la boite */
  const TreemapToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].payload.name}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="global-chart">
      <Treemap
        width={730}
        height={181}
        data={dataArray}
        dataKey="size"
        stroke="rgb(51,51,51)" /* Bordures */
        fill="black" /* Couleur Lettres */
        aspectRatio="1" /* Forme des boites */
      >
        <Tooltip content={<TreemapToolTip />} />
      </Treemap>
    </div>
  );
};

export default GlobalChart;
