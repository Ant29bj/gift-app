import fetchGifs from "../../src/helpers/getGifts";
import fetch from 'node-fetch';
(global as any).fetch = fetch;

describe('Test on getGifts', () => {

  test('should return an array of gifts', async () => {
    const gifts = await fetchGifs('One punch');

    expect(gifts.length).toBeGreaterThan(0)
    expect(gifts[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})