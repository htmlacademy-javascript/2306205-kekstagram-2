const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};


const sendRequest = async (route, method, data = null) => {
  const response = await fetch(`${BASE_URL}${route}`,
    {
      method: method,
      body: data
    });

  return !response.ok ? Promise.reject() : response.json();
};

const sendData = async (body) => sendRequest(Route.SEND_DATA, Method.POST, body);

const getData = async () => sendRequest(Route.GET_DATA, Method.GET);

export {getData, sendData};
