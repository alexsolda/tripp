import LinkWrapper from '.'
import { render, screen } from '@testing-library/react'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(
      <LinkWrapper href="/sobre">
        <p>anything</p>
      </LinkWrapper>
    )

    const children = screen.getByText(/anything/i)

    expect(children).toBeInTheDocument()
  })
})
