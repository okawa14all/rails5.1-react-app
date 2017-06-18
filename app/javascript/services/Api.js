export const postTodo = (payload) => {
  let headers = new Headers()
  headers.append("Content-Type", "application/json")
  headers.append("Accept", "application/json")

  return fetch('/todos', {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        todo: { text: payload.params.text }
      })
    })
    .then(res => res.json() )
    .then(todo => ({ todo }))
    .catch(error => { error })
}
