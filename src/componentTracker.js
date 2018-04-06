const components = {}

export const track = (component, modules, filename) => {
  const id = [filename, ...modules].join('-')
  components[id] = component
  return id
}

export const get = id => components[id]
export const getAll = () => ({ ...components })
