import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import UserList from "./components/userList/userList"

import { users } from "./data/data";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-1">Students</h1>
        <p className="text-sm text-gray-500 mb-6">
          Total: {users.length}
        </p>

        <UserList data={users} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
