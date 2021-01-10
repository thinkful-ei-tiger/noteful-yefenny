import CONFIG from '../config';
const FoldersService = {
  getAllFolders() {
    return fetch(`${CONFIG.API_ENDPOINT}folders/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((folders) => {
        return folders;
      });
  },
  createFolder(query) {
    return fetch(`${CONFIG.API_ENDPOINT}folders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    })
      .then((res) => {
        if (!res.ok) {
          Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then((data) => data);
  }
};

export default FoldersService;
