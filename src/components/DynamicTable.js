import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { white } from 'material-ui/styles/colors';

const useStyles = makeStyles({
    table: {
        minWidth: 250,
        // color: "white",
    },
    TableCell: {
        root: {
            // color: "white"
        }
    }
});
const handleClick = (e) => {
  const selectedInvest = [e.target.id]
  console.log(selectedInvest)
}

export default function SimpleTable(props) {
    const classes = useStyles();
    return (
        <TableContainer id='dynamic-table' component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {props.head.map(c => <TableCell>{c}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map(row => (
                        <TableRow key={row.name}>
                            {props.keys.map(c => <TableCell align="left">{row[c]}</TableCell>)}
                            {props.market ? <TableCell><button className="invest-btn" id={row.id} onClick={handleClick}>&#9547;</button></TableCell> : null}
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}