import { fireEvent, render, screen } from "@testing-library/react"
import AddCategory from "../../src/components/AddCategory"

describe('Test on <AddCategory/>', () => {

  test('should change the text content', () => {
    // Arrange 
    render(<AddCategory onAddCategory={() => { }} />)
    const input: HTMLElement = screen.getByRole('textbox')
    // Act 
    fireEvent.input(input, { target: { value: 'saitama' } })
    // Assert
    expect((input as HTMLInputElement).value).toBe('saitama')
  })

  test('should call onNewCategory', () => {
    // Arrange 
    const inputValue = 'testInput'
    const onNewCategoryMock = jest.fn();
    render(<AddCategory onAddCategory={onNewCategoryMock} />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    const form = screen.getByRole('form') as HTMLFormElement
    // Act 
    fireEvent.input(input, { target: { value: inputValue } })
    screen.debug();

    fireEvent.submit(form)
    screen.debug();
    // Assert
    expect(input.value).toBe('')
    expect(onNewCategoryMock).toHaveBeenCalledTimes(1)
    expect(onNewCategoryMock).toHaveBeenCalledWith(inputValue)
  })

  test('should not call onNewCategory', () => {
    // Arrange
    const onNewCategoryMock = jest.fn();
    render(<AddCategory onAddCategory={onNewCategoryMock} />)
    const form = screen.getByRole('form') as HTMLFormElement

    // Act
    fireEvent.submit(form)

    // Assert
    expect(onNewCategoryMock).not.toHaveBeenCalled();
  })
})