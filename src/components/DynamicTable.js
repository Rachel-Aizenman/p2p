import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { white } from 'material-ui/styles/colors';

const useStyles = makeStyles({
    table: {
        minWidth: 250,
        color: white,
    },
});

function createData(name, period, purpose, amount, interest, remainingAmount, status, issueDate, nextPay) {
    return { name, period, purpose, amount, interest, remainingAmount, status, issueDate, nextPay };
}

const rows = [
    createData('Guy', 24, 'Education', 2400, 4.0, 4, 'pending','12/12/19', '12/12/20'),
    createData('Yonatan', 14, 'Education', 22400, 2.0, 4, 'pending','12/12/19', '12/12/20'),
    createData('Racheli', 12, 'Education', 400, 4.0, 4, 'pending','12/12/19', '12/12/20'),
    createData('Noam', 6, 'Education', 22300, 4.0, 4, 'pending','12/12/19', '12/12/20'),
    createData('Dudi', 24, 'Education', 20, 4.0, 4, 'pending','12/12/19', '12/12/20'),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <TableContainer id='dynamic-table' component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Period (m)</TableCell>
                        <TableCell align="right">Purpose</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Interest</TableCell>
                        <TableCell align="right">Remaining Amount</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Issuance Date</TableCell>
                        <TableCell align="right">Next Payment</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.period}</TableCell>
                            <TableCell align="right">{row.purpose}</TableCell>
                            <TableCell align="right">${row.amount}</TableCell>
                            <TableCell align="right">%{row.interest}</TableCell>
                            <TableCell align="right">{row.remainingAmount}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.issueDate}</TableCell>
                            <TableCell align="right">{row.nextPay}</TableCell>
                            

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}