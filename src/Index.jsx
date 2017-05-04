import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import React from 'react'

require('index.scss');

function Index(props) {
    return (
        <div className='app'>
            {React.cloneElement(props.children, props)}
        </div>
    )
}

Index.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default connect(null, (dispatch) => bindActionCreators({}, dispatch))(Index);

