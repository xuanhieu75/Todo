import React from "react";
import { useEffect, useState } from "react";
import "./Table.scss";
import axios from "axios";
import moment from "moment";
const Table = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // componetDidMount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // setTimeout( () = {}, 3000)
    try {
      async function fetchData() {
        const today = moment().startOf("day").toISOString(true);
        const fromDay = moment()
          .startOf("day")
          .subtract(31, "days")
          .toISOString(true);

        let res = await axios.get(
          `https://api.covid19api.com/country/vietnam?from=${fromDay}&to=${today}`
        );
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse(); // ham dao nguoc mang
        }
        setDatas(data);
        setLoading(true);
        setIsError(false);
      }
      fetchData();
    } catch (e) {
      setIsError(true);
      setLoading(true);
    }
  }, []);

  return (
    <div className="table">
      <p>Hi! This is list Table Covid</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            loading === true &&
            datas &&
            datas.length > 0 &&
            datas.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}

          {loading === false && (
            <tr>
              <td colSpan="5"> Loading...</td>{" "}
            </tr>
          )}
          {isError === true && (
            <tr>
              <td colSpan="5">Something Wrong...</td>{" "}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
