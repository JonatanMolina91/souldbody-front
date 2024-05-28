import axios from 'axios';

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  
  axios.interceptors.request.use((config) => {
    const token = getCookie('token');
        config.headers.Authorization = `Bearer ${token}`;
    return config;
  });