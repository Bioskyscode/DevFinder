import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"

function Home() {
  return (
    <>
    <UserSearch />
    {/* Search components */}
    <UserResults />
    </>
  )
}

export default Home