import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as SpotifyRoutes from '../../routes/spotify';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



class List extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            listaItens: [],
            limit: "",
            next: "",
            offset: "",
            previous: "",
            total: "",
            page: 0,
            rowsPerPage: 10
         };
        this.getItems = this.getItems.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.filterTableByName = this.filterTableByName.bind(this);
    }


    getItems() {
        let filter = this.prepareFilter(this.props.filter);
        SpotifyRoutes.default.getFeaturedPlaylists(filter)
          .then(response => {
            this.setState({ listaItens: response.data.playlists.items });
        }).catch((err) => { 
            localStorage.removeItem('token');
            this.props.history.push('/login');
         });
    }
      
    componentDidMount() {
        this.getItems();
        this.att = setInterval(() => {
            this.getItems()
          }, 30000);
        
    }

    componentWillUnmount() {
        clearInterval(this.att);
    }

    filterTableByName(){
        let stateAtual = this.state.listaItens;
        const stateFiltrado = stateAtual.filter( itens =>  {
            return itens.name === this.props.filter.name
        });
        this.setState({listaItens: stateFiltrado});
    }

    componentDidUpdate(prevProps){
        if ((prevProps.filter.locale !== this.props.filter.locale && typeof prevProps.filter.locale !== "undefined") ||
         (prevProps.filter.country !== this.props.filter.country  && typeof prevProps.filter.locale !== "undefined")) {
            this.getItems();
        }
        
        if (prevProps.filter.name !== this.props.filter.name) {
            this.filterTableByName();
        }

        if (this.props.filter.name === ""){
            this.getItems();
        }
    }

    prepareFilter(filter){
        Object.keys(filter).forEach((key) =>{
            if(filter[key] == "") {
                delete filter[key];
            }
        });
        return filter;
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ page: 0, rowsPerPage: event.target.value });
    };

    render() {
        const { listaItens, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, listaItens.length - page * rowsPerPage);
        return (
            <Grid item xs={12}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Paper >
                        <div>
                        <Table>
                            <TableBody>
                                {listaItens.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                                    
                                    <TableRow key={row.name} >
                                        <TableCell align="right">{row.name}</TableCell>
                                    </TableRow>
                                ))}
                                {emptyRows > 0 && (
                                    <TableRow>
                                    <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        </div>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={listaItens.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                'aria-label': 'Previous Page',
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'Next Page',
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
            </Grid>
        )
      }
}
export default connect((state) => {
    return { filter: state.filter};
})(List);