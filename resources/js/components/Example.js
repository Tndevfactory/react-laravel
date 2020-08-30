import React from 'react';
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';


function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center mb-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header ">Example material ui icon</div>

                                <Icon>add_circle</Icon>
                                <Icon color="primary">add_circle</Icon>
                                <Icon color="secondary">add_circle</Icon>
                                <Icon style={{ color: green[500] }}>add_circle</Icon>
                                <Icon fontSize="small">add_circle</Icon>
                                <Icon style={{ fontSize: 30 }}>add_circle</Icon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

