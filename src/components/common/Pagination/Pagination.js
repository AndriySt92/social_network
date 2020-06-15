import React, {useState} from 'react';
import styles from "./Pagination.module.css";


const Paginator = ({currentPage,onChangePage,pageSize,usersTotal,portionSize=10}) => {
    let totalPages = Math.ceil(usersTotal / pageSize);

    let pages = [];

    for(let i = 1;i<=totalPages;i++){
        pages.push(i)
    }

    let portionCount = Math.ceil(totalPages / portionSize);
    let [portionNumber, setPortionalNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize+1;
    let rightPortionPageNumber =  portionSize * portionNumber;
    let changePage = 0
    changePage = currentPage;


        

    return <div>
        <div className={styles.pagesNumber}>
            {portionNumber > 1 && <button onClick={() => {
                setPortionalNumber(portionNumber-1);
                onChangePage(changePage -= portionSize)
                } }>Prev</button> }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p=> {
                return <div className={currentPage === p && styles.selectedPage} onClick={() => onChangePage(p)}>{p} </div>
            })}
            {portionCount > portionNumber && <button onClick={ () => {
                setPortionalNumber(portionNumber+1);
                onChangePage(changePage +=portionSize)
                }}>Next</button> }
        </div>
    </div>
};

export default Paginator
  