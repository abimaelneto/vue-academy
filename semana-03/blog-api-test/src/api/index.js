export default function api(path, options) {
  return fetch(`http://127.0.0.1:8080/${path}`, options);
}
