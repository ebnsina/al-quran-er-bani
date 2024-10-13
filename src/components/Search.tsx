import { useState } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

export default function Search({ onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='sticky top-0 left-0 right-0 w-full z-20 bg-white px-1.5 py-2'>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex gap-2 sm:gap-4 items-center'
      >
        <label className='sr-only' htmlFor='search'>
          Search
        </label>
        <input
          className='w-full border border-slate-300 rounded-md px-4 py-2 text-xs sm:text-sm text-slate-600 focus:ring-0 focus:outline-none focus:border-slate-400'
          type='search'
          name='search'
          id='search'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='px-6 py-2 border border-blue-500 bg-blue-500 text-white rounded-md text-xs sm:text-sm'
        >
          Search
        </button>
      </form>
    </div>
  );
}
