import { createAction } from '@reduxjs/toolkit';

export const saveCustomerAction = createAction('customer/save');
export const fetchInitialDataAction = createAction('initialData');
export const clearCustomerAction = createAction('customer/clear');
