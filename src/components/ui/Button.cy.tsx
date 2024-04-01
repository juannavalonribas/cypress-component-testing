// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from '@/components/ui/Button'

describe('<Button> ', () => {
  it('Button variant default', () => {
    cy.mount(<Button variant='default'>Hello world!</Button>)
  })
  it('Button variant destructive', () => {
    cy.mount(<Button variant='destructive'>Hello world!</Button>)
  })
  it('Button variant outline', () => {
    cy.mount(<Button variant='outline'>Hello world!</Button>)
  })
  it('Button variant secondary', () => {
    cy.mount(<Button variant='secondary'>Hello world!</Button>)
  })
  it('Button variant ghost', () => {
    cy.mount(<Button variant='ghost'>Hello world!</Button>)
  })
  it('Button variant link', () => {
  cy.mount(<Button variant='link'>Hello world!</Button>)
    cy.get('button').realHover()
    cy.get('button').should('have.css', 'text-decoration-line', 'underline')
  })
})
