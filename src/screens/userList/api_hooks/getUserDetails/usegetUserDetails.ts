import axios from 'axios';
import {BaseUrl} from '../../../../../staging';

export const getUserDetails = async ({pageParam}: any) => {
  console.log('pageParam', pageParam);
  let response = false;
  try {
    let res = await axios.get(`${BaseUrl}?page=${pageParam}`);
    response = res?.data;
  } catch (err) {
    response = false;
    throw Error;
  }
  return response;
};

export const getNextPageParam = (lastPage: any) => {
  let page;
  if (lastPage?.page < lastPage?.total_pages) {
    page = lastPage.page + 1;
  }
  return page; // Return null when there are no more pages to fetch
};
