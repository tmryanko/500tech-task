import React from 'react';
import TableBodyRow from './TableBodyRow';

const Grid = ({ config, data }) => {
  const tableHead = config.map(({ title }) => {
    return <th key={title}>{title}</th>;
  });

  const tableBody = data.map((tableBodyData, i) => {
    const uKey = `${new Date()}${i}`;
    return (
      <TableBodyRow key={uKey} data={config} tableBodyData={tableBodyData} />
    );
  });

  return (
    <table>
      <thead>
        <tr>{tableHead}</tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};

export default Grid;
