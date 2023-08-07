import { useForm } from "react-hook-form";

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // fetch user profile

  // TODO: Profile Picture
  // add click event handler to profile picture
  // open modal to upload picture
  // save picture and update
  // show notification of success/error

  // TODO: User Profile
  // fetch and display user information
  // when user interacts with the form, display validation
  // onSubmit, validation form, update data, and show notifications of success/error

  // TODO: Location Services
  // user may view if their location is enabled
  // then have an option to enable their location by displaying instructions on how to enable on their device/browser

  // TODO: Connections
  // fetch user connections and display
  // user may remove connection

  return (
    <div className="m-6">
      <h1 className="mb-2 text-2xl font-bold">Profile</h1>
      <section className="mb-6">
        {/* TODO: profile picture */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg border p-6"
        >
          <div className="grid sm:grid-cols-2 sm:gap-4">
            <div className="mb-2">
              <label className="block" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded border p-1"
                type="text"
                value=""
                id="name"
                {...register("name", { required: "This field is required." })}
              />
            </div>
            <div className="mb-2">
              <label className="block" htmlFor="username">
                Username
              </label>
              <input
                className="w-full rounded border p-1"
                type="text"
                value={""}
                id="username"
                {...register("username")}
              />
            </div>
            <div className="mb-2">
              <label className="block" htmlFor="visibility">
                Visibility
              </label>
              <select
                className="w-full rounded border p-1"
                id="visibility"
                {...register("visibility", {
                  required: "This field is required",
                })}
              >
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block" htmlFor="status">
                Status
              </label>
              <select className="w-full rounded border p-1" id="status">
                <option value="Offline">Offline</option>
                <option value="Not Playing">Not Playing</option>
                <option value="Playing">Playing</option>
                <option value="Looking to Play">Looking to Play</option>
                <option value="Looking for Partner">Looking for Partner</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded border p-1"
                type="text"
                value={""}
                id="email"
              />
            </div>
            <div className="mb-2">
              <label className="block">City</label>
              <input
                className="w-full rounded border p-1"
                type="text"
                value={""}
              />
            </div>
            <div className="mb-2">
              <label className="block" htmlFor="zipCode">
                Zip
              </label>
              <input
                className="w-full rounded border p-1"
                type="text"
                value={""}
                id="zipCode"
              />
            </div>
            <div className="mb-2">
              <label className="block" htmlFor="bio">
                Bio
              </label>
              <textarea
                className="w-full rounded-lg border p-1"
                id="bio"
                name="bio"
                rows={5}
              ></textarea>
            </div>
          </div>
          <button
            className="w-full rounded border border-purple-600 px-6 py-2 text-purple-600 sm:w-fit"
            type="submit"
          >
            Save
          </button>
        </form>
      </section>
      <section>
        <h2 className="mb-2 text-xl">Connections</h2>
        <ul className="rounded-lg border">
          <li>No Connections</li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
