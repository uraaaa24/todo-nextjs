
const AddTask = () => {
  return (
    <form className="mb-4 space-y-3">
      <input type="text" className="w-full border px-4 rounded-lg focus:outline-none focus:border-blue-300"/>
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-300 hover:scale-95 duration-200">Add Task</button>
    </form>
  )
}

export default AddTask
