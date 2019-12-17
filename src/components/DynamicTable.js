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
import { keys } from 'mobx';

const useStyles = makeStyles({
    table: {
        minWidth: 250,
        color: white,
    },
});

export default function SimpleTable() {
    const classes = useStyles();
    // const data = props.data
    const keys = ["Name", "Period(m)", "Purpose", "Amount", "Interest", "Remaining Amount", "Status", "Issue Date", "Next Pay"]
    const rows = ['name', 'period', 'porpuse', 'amount', 'interest', 'remainingAmount', 'dateOfIssuance', 'nextPayment']
    return (
        <TableContainer id='dynamic-table' component={Paper}>
            <h3>Browse Loan Requests:</h3>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {keys.map(c => <TableCell>{c}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell scope="row">
                                {row.period}
                            </TableCell>
                            <TableCell scope="row">
                                {row.purpose}
                            </TableCell>
                            <TableCell scope="row">
                                {row.amount}
                            </TableCell>
                            <TableCell scope="row">
                                {row.interest}
                            </TableCell>
                            <TableCell scope="row">
                                {row.remainingAmount}
                            </TableCell>
                            <TableCell scope="row">
                                {row.status}
                            </TableCell>
                            <TableCell scope="row">
                                {row.issueDate}
                            </TableCell>
                            <TableCell scope="row">
                                {row.nextPay}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}