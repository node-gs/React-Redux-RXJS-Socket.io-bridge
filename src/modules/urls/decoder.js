export class Decoder {
  fetch = (state) => {
    return this.decode(this.url(state));
  }
  decode = string =>  {
    return atob(string)
      .split(",")
      .map(Number);
  }
  url = (state) => {
    return window.location.search.split(`${state}=`)[1]
  }
}
