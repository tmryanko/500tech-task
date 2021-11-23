import React from 'react';
import TableBodyCell from './TableBodyCell';

const TableBodyRow = ({ data, tableBodyData }) => {
  return (
    <tr>
      {data.map((tableBodyTitle) => {
        return (
          <TableBodyCell
            key={tableBodyData[tableBodyTitle.field]}
            tableBodyData={tableBodyData}
            tableBodyTitle={tableBodyTitle}
          />
        );
      })}
    </tr>
  );
};

export default TableBodyRow;
