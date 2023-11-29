import Form from "./Form";

function Navbar() {
  return (
    <header className="bg-[#58249c] m-auto">
      <nav className="flex justify-between items-center py-5 px-10">
      <h1 className="text-white text-3xl">Cooking</h1>
      <div className="flex gap-8">
        <input className="py-2 px-4 outline-none rounded-md"
          type="text"
          placeholder="Write here..."
          autoComplete="off"
        />
        <button
          className="text-white border-white py-2 px-5 border-2 hover:bg-white hover:text-black "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Create food
        </button>
        <Form />
      </div>
      </nav>
    </header>
  );
}

export default Navbar;
