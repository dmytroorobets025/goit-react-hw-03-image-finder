import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api';
const MY_KEY = '29925771-85ed6933735d557420d38b301';

export const GetImages = async (query, page, per_page = 12) => {
  try {
    const response = await axios.get('/', {
      params: {
        key: MY_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        page,
        per_page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

GetImages.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  per_page: PropTypes.number,
};
