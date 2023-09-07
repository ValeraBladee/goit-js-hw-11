export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '39305794-3d1f740c5205d41738903dcf4';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};
