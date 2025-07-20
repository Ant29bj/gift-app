import useFetchGifs from "../../src/hooks/useFetchGifs"
import { act, renderHook, waitFor } from "@testing-library/react";
import fetchGifs from "../../src/helpers/getGifts";


jest.mock('../../src/helpers/getGifts')

const mockFetchGifs = fetchGifs as jest.MockedFunction<typeof fetchGifs>


describe('Test on usFetchGifs custom hook', () => {
  test('should return an initial value', async () => {
    // Arrange
    mockFetchGifs.mockResolvedValue([])
    const { result } = renderHook(() => useFetchGifs('Miles Davis'))
    await act(async () => {
      await Promise.resolve();
    })

    const { gifts, isLoading } = result.current
    // Assert
    expect(gifts.length).toBe(0)
    expect(isLoading).toBeFalsy();
  })

  test('should return an array of gifs and isLoadin false', async () => {
    const mockGifs = [
      {
        id: "abc123",
        title: "Funny Cat",
        url: "https://media.giphy.com/media/abc123/giphy.gif"
      },
      {
        id: "def456",
        title: "Dancing Dog",
        url: "https://media.giphy.com/media/def456/giphy.gif"
      }
    ];
    mockFetchGifs.mockResolvedValue(mockGifs)
    const { result } = renderHook(() => useFetchGifs('Miles Davis'))

    await waitFor(
      () => expect(result.current.gifts.length).toBe(2)
    )

    const { gifts, isLoading } = result.current
    // Assert
    expect(gifts.length).toBe(2)
    expect(isLoading).toBeFalsy();
  })
})