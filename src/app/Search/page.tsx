import SearchBar from '../components/SearchBar'

type Data = { id: number; name: string; totalBeds: string }[];
const url =
  'https://s2ju1fj7u1.execute-api.us-east-2.amazonaws.com/Prod/api/practices'
const fetchData = () => {
  return fetch(url).then((res) => res.json())
}

export default async function Home () {
  const data: Data = await fetchData()
  return (
    <main className='flex bg-gray-200 w-full pl-24'>
      <SearchBar data={data} />
    </main>
  )
}
