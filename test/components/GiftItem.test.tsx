import { render, screen } from "@testing-library/react"
import GiftItem from "../../src/components/GifItem"
import 'jest-extended';

describe('Test on <GiftItem/>', () => {
  const title = 'mock title'
  const url = 'mock url'
  test('should match with the snapshot', () => {
    const { container } = render(<GiftItem title={title} url={url} />)
    expect(container).toMatchSnapshot();
  });

  test('should show the image with the title and url', () => {
    render(<GiftItem title={title} url={url} />)
    const img = screen.getByRole('img')
    expect(img.getAttribute('src')).toBe(url)
    expect(img.getAttribute('alt')).toBe(title)
  })

  test('should print the title', () => {
    render(<GiftItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy();
  })
})