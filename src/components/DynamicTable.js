import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
const fundRoute = "http://localhost:3001/fundLoan/"

const useStyles = makeStyles({
    table: {
        minWidth: 250
    }
});

const handleClick = async (e, getData) => {
    const loanId = e.target.id
    const userId = e.target.name
    const borrowerName = e.target.value
    const loanInfo = {
        loanID: loanId,
        userID: userId,
        borrowerName: borrowerName
    }
    await axios.post(fundRoute, loanInfo)
    getData()
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
                        <TableRow>
                            {props.keys.map(c => <TableCell align="left">{row[c]}</TableCell>)}
                            {props.market ?
                                <TableCell>
                                    <button
                                        id={row.id}
                                        name={props.userID}
                                        value={row.borrowerName}
                                        onClick={e => handleClick(e, props.getData)}>
                                        Select
                                    </button>
                                </TableCell>
                                : null}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}