import { UPDATE_ITEMS_PER_PAGE, selectPagination } from '@/redux/slice/paginationSlice';
import { selectTheme } from '@/redux/slice/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ItemsPerPage = () => {
    const { limit }: PagenationInterface = useSelector(selectPagination);
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    const selectBackgroundClass = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black';

    return (
        <div className={`items-per-page`}>
            <label>Items per page:</label>
            <select
                className={`${selectBackgroundClass} px-2 py-1 rounded-md outline-none focus:ring focus:ring-blue-300`}
                value={limit}
                onChange={(e) => dispatch(UPDATE_ITEMS_PER_PAGE(
                    { limit: Number(e.target.value) }
                ))}
            >
                <option value={5}>5</option>
                <option value={8}>8</option>
            </select>
        </div>
    )
}
