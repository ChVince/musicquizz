import * as React from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'rank', headerName: 'Rank', width: 150 },
  {
    field: 'name',
    headerName: 'Name',
    width: 220,
  },
  {
    field: 'numCorrect',
    headerName: 'Correct Answers',
    width: 200,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 400,
  },
];

interface resultRow {
    id: number,
    rank: number,
    name: string,
    numCorrect: number,
    date: string
};

type ResultsTableProps = {
    resultsData: Array<resultRow>
};

function ResultsTable({resultsData}:ResultsTableProps) {
    return <div style={{ height: 400, width: 700 }}>
      <DataGrid
        rows={resultsData}
        columns={columns}
        pageSize={10}
        // page={6}
        hideFooterSelectedRowCount
        selectionModel={[5]}
      />
    </div>
};



export default ResultsTable;