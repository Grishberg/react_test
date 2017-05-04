import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from './common/Header'

import { fetchCars, deleteCar, init } from './actions'
import { List } from 'immutable'

class App extends React.Component {

    componentWillMount() {
        this.props.fetchCars();
    }

    render() {
        const {deleteCar, cars = List(), init} = this.props;

        return (
            <div>
                <Header/>
                <button className='btn btn-default app-btn'  onClick={() => init()}>init</button>
                <div className='container'>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <td>model</td>
                            <td>number</td>
                            <td>delete</td>
                        </thead>
                        <tbody>
                        {
                            cars.map(({number, model}) =>
                                <tr>
                                    <td>{number}</td>
                                    <td>{model}</td>
                                    <td>
                                        <button className='btn btn-default btn-block' onClick={() => deleteCar(number)}>
                                            remove
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    value: React.PropTypes.object,
    cars: React.PropTypes.object,
    fetchCars: React.PropTypes.func.isRequired,
    deleteCar: React.PropTypes.func.isRequired,
    init: React.PropTypes.func.isRequired,
};

export default connect(
    (state) => {
        return {
            value: state.getIn(['app', 'main', 'value']),
            cars: state.getIn(['app', 'main', 'cars'])
        }
    },
    (dispatch) => bindActionCreators({
        fetchCars,
        deleteCar,
        init
    }, dispatch)
)(App);
