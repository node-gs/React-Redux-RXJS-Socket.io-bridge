import { Decoder } from './decoder.js';


describe('game state decoder', () => {
  let decodeUrl = new Decoder();

  it('can be initiated', () => {  
    expect(typeof decodeUrl).toBe('object');  
  });

  it('decodes a string and returns it into a useable format', () => {
    let myArr = [101, 202, 303, 404].toString();
    let encodedArray = btoa(myArr);
    let decodedArray = decodeUrl.decode(encodedArray)
    expect(Array.isArray(decodedArray)).toBe(true);
    expect(decodedArray.length).toBe(4);
    expect(decodedArray.includes(101)).toBe(true);
    expect(decodedArray.includes(202)).toBe(true);
    expect(decodedArray.includes(303)).toBe(true);
    expect(decodedArray.includes(404)).toBe(true);
  });

  it('can get a url', () => {
    window.history.pushState({}, 'Test Title', '/test.html?a=1&b=3&state=helloworld');
    let state = decodeUrl.url("state");
    expect(state).toBe("helloworld");
  });

  it('decodes and returns the url correctly', () => {
    let myArr = [101, 202, 303, 404].toString();
    let encodedArray = btoa(myArr);
    window.history.pushState({}, 'Test Title', `/test.html?a=1&b=3&state=${encodedArray}`);
    let state = decodeUrl.fetch("state");
    expect(Array.isArray(state)).toBe(true);
    expect(state.length).toBe(4);
    expect(state.includes(101)).toBe(true);
    expect(state.includes(202)).toBe(true);
    expect(state.includes(303)).toBe(true);
    expect(state.includes(404)).toBe(true);
  });
});
