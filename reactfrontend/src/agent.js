
import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';


const superagent = superagentPromise(_superagent, global.Promise);

//const API_ROOT = 'http://localhost/labzac-php-fullstack/public/api';
//const API_ROOT = 'http://www.farmaciaszacatelco.com.mx/api';
//const API_ROOT = 'https://labzac-nodejs-1.herokuapp.com/api';
const API_ROOT = 'http://localhost:3000/api';


const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};

const Tags = {
  getAll: () => requests.get('/tags')
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = article => Object.assign({}, article, { id: undefined })

const Promociones = {
  all: page =>
    requests.get(`/promociones?${limit(10, page)}`),
  get: id =>
    requests.get(`/promociones/${id}`),
  update: promocion =>
    requests.put(`/promociones/${promocion.id}`, { promocion: omitSlug(promocion) }),
  create: promocion =>
    requests.post('/promociones', { promocion })
};

const Articles = {
  all: page =>
    requests.get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) =>
    requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTag: (tag, page) =>
    requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`),
  del: slug =>
    requests.del(`/articles/${slug}`),
  favorite: slug =>
    requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: () =>
    requests.get('/articles/feed?limit=10&offset=0'),
  get: slug =>
    requests.get(`/articles/${slug}`),
  unfavorite: slug =>
    requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article =>
    requests.post('/articles', { article })
};

const Comments = {
  create: (slug, comment) =>
    requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug =>
    requests.get(`/articles/${slug}/comments`)
};

const Profile = {
  follow: username =>
      requests.post(`/profiles/${username}/follow`),
  get: username =>
      requests.get(`/profiles/${username}`),
  unfollow: username =>
      requests.del(`/profiles/${username}/follow`)
};

const Diagnosticos = {
  byVenta: (venta) =>
      requests.get(`/diagnosticos?venta=${encode(venta)}`),
  all: page =>
      requests.get(`/diagnosticos?${limit(10, page)}`),
  update: diagnostico =>
      requests.put(`/disgnosticos/${diagnostico.slug}`, { diagnostico: omitSlug(diagnostico) }),
  create: diagnostico =>
      requests.post(`/diagnosticos/${diagnostico.venta}`, { diagnostico }),
  get: id =>
      requests.get(`/diagnosticos/${id}`)
};

const Ventas = {
  byClient: (client, page) =>
      requests.get(`/ventas?client=${encode(client)}&${limit(10, page)}`),
  all: page =>
      requests.get(`/ventas?${limit(10, page)}`),
  update: venta =>
      requests.put(`/ventas/${venta.slug}`, { venta: omitSlug(venta) }),
  create: venta =>
      requests.post('/ventas', { venta })
};

const CommentsDX = {
  create: (slug, comment) =>
    requests.post(`/diagnosticos/${slug}/commentsdx`, {comment}),
  delete: (slug, commentId) =>
    requests.del(`/diagnosticos/${slug}/commentsdx/${commentId}`),
  forDx: slug =>
    requests.get(`/diagnosticos/${slug}/commentsdx`)
};

const Clientes = {
  update: cliente =>
      requests.put(`/clientes/${cliente.id}`, { cliente: omitSlug(cliente) }),
  create: cliente  =>
      requests.post('/clientes', { cliente })
};

export default {
  Diagnosticos,
  Articles,
  Auth,
  Comments,
  CommentsDX,
  Profile,
  Tags,
  Ventas,
  Clientes,
  setToken: _token => { token = _token; }
};
