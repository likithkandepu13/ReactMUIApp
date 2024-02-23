import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, name, gender, mobileno, location,age) {
  return { id, name, gender, mobileno, location,age};
}

const rows = [
  createData('837',"likith","male","3898888","Vizag",19),
  createData('838',"Anju","male","354888","Guntur",19),
  createData('839',"Sai","male","885548","Nuzived",19),
  createData('840',"Bhargav","male","888588","Eluru",19),
];

export default function Demo2() {
  return (
   <div>
    <h3 align="center"><u> Employee Information : </u></h3>
     <TableContainer component={Paper}>
      <Table width="50%" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell >Gender</StyledTableCell>
            <StyledTableCell >Age&nbsp;</StyledTableCell>
            <StyledTableCell >Phno&nbsp;</StyledTableCell>
            <StyledTableCell >location&nbsp;</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id} align="center">
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.gender}</StyledTableCell>
              <StyledTableCell>{row.age}</StyledTableCell>
              <StyledTableCell>{row.mobileno}</StyledTableCell>
              <StyledTableCell>{row.location}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
  );
}