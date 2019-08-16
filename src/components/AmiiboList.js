import React from 'react';
import { connect } from 'react-redux';

import Amiibo from './Amiibo';
import styles from './amiibolist.module.css';

import { apiCall } from '../actions';

function AmiiboList(props) {
    const allAmiibos = props.amiibos.map((amiibo, index) => <Amiibo key={index} amiibo={amiibo} />);

    return (
        <div className={styles.amiibosWrap}>
            <h1>Super Smash Brothers Amiibos!</h1>
            <button onClick={props.apiCall}>See the List!</button>
            <div className={styles.amiibos}>{props.amiibos.length ? allAmiibos : null}</div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        amiibos: state.amiibos,
        isLoading: state.isLoading
    };
};

export default connect(
    mapStateToProps,
    { apiCall }
)(AmiiboList);
