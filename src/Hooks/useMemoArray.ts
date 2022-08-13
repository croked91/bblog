import { getPagesArray } from './../utils/pages';
import {useMemo} from 'react';


  

export const useMemoArray = (totalPages:number) => {
    const memoizedPagesArray = useMemo(
        () => getPagesArray(totalPages), [totalPages]
    )
    return memoizedPagesArray
}
