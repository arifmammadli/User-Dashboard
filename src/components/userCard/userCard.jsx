function UserCard({ user }) {
  return (
    <div className="group bg-white rounded-xl border p-5
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-xl
    ">

      <div className="flex items-center gap-4 mb-4">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-16 h-16 rounded-full object-cover border
          transition-transform duration-300
          group-hover:scale-110"
        />

        <div>
          <h3 className="font-semibold text-lg">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-sm text-gray-500">
            @{user.username}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <p><b>Age:</b> {user.age}</p>
        <p><b>Gender:</b> {user.gender}</p>

        <p className="col-span-2">
          <b>Email:</b> {user.email}
        </p>

        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Card:</b> {user.bank?.cardNumber}</p>

        <p className="col-span-2">
          <b>Address:</b> {user.address?.address}, {user.address?.city}
        </p>

        <p><b>University:</b> {user.university}</p>
        <p><b>Company:</b> {user.company?.name}</p>

        <p className="col-span-2">
          <b>Title:</b> {user.company?.title}
        </p>

        <p className="col-span-2">
          <b>Role:</b> {user.role}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
