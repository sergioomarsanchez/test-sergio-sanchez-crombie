const url = 'https://s2ju1fj7u1.execute-api.us-east-2.amazonaws.com/Prod/api/practices'
const fetchData = async () => {
  const res = await fetch(url)
  return await res.json()
}

export const data = fetchData()