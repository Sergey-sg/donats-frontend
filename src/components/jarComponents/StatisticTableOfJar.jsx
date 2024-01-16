import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Table from "react-bootstrap/Table";
import { fetchGetJarStatistic } from "../../redux/jar/jarActions";

const StatisticTableOfJar = ({ jarId }) => {
  const dispatch = useAppDispatch();
  const statistic = useAppSelector((state) => state.jarStatistic);

  const getOnlyDate = (date) => {
    return new Date(date).toISOString().split('T')[0]
  }

  useEffect(() => {
    console.log("start useEffect in JarStatistic");

    dispatch(fetchGetJarStatistic(jarId));
  }, [dispatch, jarId]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Amount</th>
          <th>Incomes</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {statistic?.map((amount, index) => (
          <tr key={amount.id}>
            <td>{ index + 1}</td>
            <td>{Math.round(amount.sum / 100)}</td>
            <td>{Math.round(amount.incomes / 100)}</td>
            <td>{getOnlyDate(amount.date_added)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StatisticTableOfJar;
