export default function Header() {
  return (
    <header className='py-3'>
      <form className='flex gap-4 items-center'>
        <label className='sr-only' htmlFor='search'>
          Search
        </label>
        <input
          className='w-full border border-slate-300 rounded-md px-4 py-2 text-sm text-slate-600 focus:ring-0 focus:outline-none focus:border-slate-400'
          type='search'
          name='search'
          id='search'
          placeholder='Search'
        />
        <button
          type='submit'
          className='px-6 py-2 border border-blue-500 bg-blue-500 text-white rounded-md text-sm'
        >
          Search
        </button>
      </form>
    </header>
  );
}
