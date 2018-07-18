import moment from 'moment';

const filtersReducerDefaultState = {
    description: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                description: action.description
            };
        case 'SET_SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE_FILTER':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE_FILTER':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};