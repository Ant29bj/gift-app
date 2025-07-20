import { render, screen } from "@testing-library/react";
import GiftGrid from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

const mockUseFetchGifs = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>

describe('Test on <GiftGrid/>', () => {
  const mockCategory: string = 'testInput'
  test('should show loading ', () => {
    // Act 
    mockUseFetchGifs.mockReturnValue({
      gifts: [],
      isLoading: true
    })

    render(<GiftGrid category={mockCategory} />)
    // Assert
    expect(screen.getByText('Cargando'))
    expect(screen.getByText(mockCategory))
  })

  test('should show images when isLoading is false', () => {
    // Arrange
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
    mockUseFetchGifs.mockReturnValue({
      gifts: mockGifs,
      isLoading: false
    })
    // Act
    render(<GiftGrid category={mockCategory} />)
    screen.debug();

    const imgs: HTMLImageElement[] = screen.getAllByRole('img');

    // Assert
    expect(imgs.length).toBe(mockGifs.length)
    imgs.map((img, i) => {
      expect(img.src).toBe(mockGifs[i].url)
      expect(img.alt).toBe(mockGifs[i].title)
    })
  })

})