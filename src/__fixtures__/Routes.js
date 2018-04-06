import loadable from '../'

export const Book = loadable(() => import('./Book'), { modules: ['./Book'], filename: 'Routes.js' })
export const Books = loadable(() => import('./Books'), { modules: ['./Books'], filename: 'Routes.js' })
