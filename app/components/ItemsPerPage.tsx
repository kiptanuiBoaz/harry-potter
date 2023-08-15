import { UPDATE_ITEMS_PER_PAGE, selectPagination } from '@/redux/slice/paginationSlice';
import { useDispatch, useSelector } from 'react-redux';


export const ItemsPerPage = () => {
    const { limit }: PagenationInterface = useSelector(selectPagination);
    const dispatch = useDispatch();
    return (
        <div className='items-per-page'>
            <label>Items per page:</label>
            <select
                value={limit}
                onChange={(e) => dispatch(UPDATE_ITEMS_PER_PAGE(
                    { limit: (Number(e.target.value)) }
                ))}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
            </select>
        </div>
    )
}