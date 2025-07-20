import { act, fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp";
import fetchGifs from "../src/helpers/getGifts";
import useFetchGifs from "../src/hooks/useFetchGifs";

jest.mock('../src/helpers/getGifts')
jest.mock('../src/hooks/useFetchGifs')


const mockFetchGifs = fetchGifs as jest.MockedFunction<typeof fetchGifs>
const mockUseFetchGifs = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>


describe('Test on <GifExpertApp/>', () => {

  test('should add category', async () => {
    // Arrange
    const newCategory = 'Jhon Coltrane'
    const mockGifs = [
      {
        id: "abc123",
        title: "Funny Cat",
        url: "https://media.giphy.com/media/abc123/giphy.gif"
      }]
    mockFetchGifs.mockResolvedValue(mockGifs)
    mockUseFetchGifs.mockReturnValue({
      gifts: mockGifs,
      isLoading: false
    })
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox') as HTMLInputElement
    const form = screen.getByRole('form') as HTMLFormElement

    await act(async () => {
      fireEvent.input(input, { target: { value: newCategory } })
      await Promise.resolve();
    })

    await act(async () => {
      fireEvent.input(input, { target: { value: newCategory } })
      await Promise.resolve();
    })
    fireEvent.submit(form)

    // Ac
    screen.debug();

    // Assert 
    expect(screen.getAllByText(newCategory).length).toBe(1)
  });
});