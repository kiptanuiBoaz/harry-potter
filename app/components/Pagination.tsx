import React from 'react';
import './pagination.scss';
import { useSelector, useDispatch } from "react-redux";
import { NAVIGATE_PAGE, selectPagination } from '@/redux/slice/paginationSlice';
import { ItemsPerPage } from './ItemsPerPage';
import { selectFilterdCharacters } from '@/redux/slice/charactersSlice';
import {GrNext,GrPrevious} from "react-icons/gr";



export const Pagination: React.FC = () => {
    //show three page numbers
    const pagesToShow = 3;
    const totalCharacters = useSelector(selectFilterdCharacters).length;
    // pagination state from redux store
    const { limit, page: currentPage } = useSelector(selectPagination);

    const dispatch = useDispatch();

    const totalPages = Math.ceil(totalCharacters / limit);
    //page numbers to display
    const pageNumbers = Array.from({ length: pagesToShow }, (_, index) => currentPage - 1 + index);
    return (
        <div className="pagination flex items-center justify-center space-x-5 m-5">

        {totalCharacters > limit && <ItemsPerPage />}
      
        {currentPage > 1 && (
          <button
            className="pagination-button text-sm md:text-base lg:text-sm"
            disabled={currentPage === 1}
            onClick={() => dispatch(NAVIGATE_PAGE({ page: "prev" }))}
          >
            <GrPrevious /> Back
          </button>
        )}
      
        <div className="page-numbers flex items-center">
          {pageNumbers.map(
            (pageNumber) =>
              pageNumber > 0 &&
              totalPages - 1 > currentPage && (
                <button
                  key={pageNumber}
                  className={`page-number ${
                    pageNumber === currentPage ? 'active' : ''
                  } text-xs md:text-sm lg:text-base`}
                  onClick={() => dispatch(NAVIGATE_PAGE({ page: pageNumber }))}
                >
                  {pageNumber}
                </button>
              )
          )}
        </div>
      
        {totalPages - 1 > currentPage && (
          <button
            className="pagination-button text-sm md:text-base lg:text-sm"
            disabled={currentPage === totalPages}
            onClick={() => dispatch(NAVIGATE_PAGE({ page: "next" }))}
          >
            Next <GrNext className="font-#fff" />
          </button>
        )}
      
      </div>
      
      
    );
};

