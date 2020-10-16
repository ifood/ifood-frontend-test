import '@testing-library/jest-dom/extend-expect'
import { configure } from '@testing-library/react'

jest.mock('shared/ui/canvas')

configure({ defaultHidden: true })
