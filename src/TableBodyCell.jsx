import React from 'react';

const TableBodyCell = ({ tableBodyData, tableBodyTitle }) => {
  return (
    <td>
      {tableBodyTitle.component ? (
        <tableBodyTitle.component data={tableBodyData[tableBodyTitle.field]} />
      ) : (
        tableBodyData[tableBodyTitle.field]
      )}
    </td>
  );
};

export default TableBodyCell;
