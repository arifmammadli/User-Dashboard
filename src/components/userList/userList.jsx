import UserCard from "../userCard/userCard";


function UserList({ data = [], query = "" }) {
  const filteredData = data.filter((user) =>
  `${user.firstName ?? ""} ${user.lastName ?? ""}`
    .toLowerCase()
    .includes((query ?? "").toLowerCase())
);


  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      {filteredData.length === 0 ? (
        <p className="text-center text-gray-500 text-sm">
          No users found 😕
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredData.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
