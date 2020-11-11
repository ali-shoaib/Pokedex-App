import React from 'react';
import Button from '@material-ui/core/Button';

const Pagination = ({gotoNextPage, gotoPrevPage}) => {
    return(
        <div>
            {gotoPrevPage && 
            <Button 
            className="prevpage"
            onClick={gotoPrevPage}
            variant='outlined'
            color='primary'
            size='medium'
            style={{
                fontSize: 20,
                marginTop: '20px'
            }}>
                Previous Page
            </Button>}{'  '}
            {gotoNextPage && <Button 
            className="nextpage"
            onClick={gotoNextPage}
            variant='outlined'
            color='secondary'
            size='medium'
            style={{
                fontSize: 20,
                marginTop: '20px'
            }}>
                Next Page
            </Button>}
        </div>
    )
}

export default Pagination;