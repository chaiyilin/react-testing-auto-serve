const finder = ({types: t}) => {
  return {
    name: 'finder',
    visitor: {
      MemberExpression: {
        enter(path) {
          path.get('body')
        }
      }
    }
  }
}
