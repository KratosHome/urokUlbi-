import React from 'react';
import { getPagesArray } from '../../utils/pages';

const Pagination = ({totalPage, page, changePage}) => {
    let pagesAray = getPagesArray(totalPage)
    return (
        <div className="page__wrapper">
        {pagesAray.map(p =>
          <button
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}>{p}</button>
        )}
      </div>
    );
}

export default Pagination;
