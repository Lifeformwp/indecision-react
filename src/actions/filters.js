export const setTextFilter = ((description = '') => ({
    type: 'SET_TEXT_FILTER',
    description
}));

export const sortByAmount = () => ({
    type: 'SET_SORT_BY_AMOUNT'
});

export const sortByDate = () => ({
    type: 'SET_SORT_BY_DATE'
});

export const setStartDate = ((startDate) => ({
    type: 'SET_START_DATE_FILTER',
    startDate
}));

export const setEndDate = ((endDate) => ({
    type: 'SET_END_DATE_FILTER',
    endDate
}));