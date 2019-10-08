export default (to: string = '') => {

  if(!to) return window.location.href = '';

  const arr = to.split('?');
  let url = '';
  if(arr.length === 1) {
    url = window.location.origin + '/' + to + '?popup=true';
  } else if(arr.length === 2 && !arr[1]) {
    url = window.location.origin + '/' + to + 'popup=true';
  } else {
    url = window.location.origin + '/' + to + '&popup=true';
  }

  const toUrl = new URL(url);
  const search = toUrl.search.replace(/^\?{1}/g, '');
  const encodeParams = encodeURIComponent(search).replace(/%3D/g, '=').replace(/%26/g, '&');
  window.location.href = toUrl.origin + toUrl.pathname + '?' + encodeParams; 
}