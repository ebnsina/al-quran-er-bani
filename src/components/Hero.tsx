export default function Hero() {
  return (
    <div className='bg-slate-100 rounded-md px-6 py-10 sm:py-20 text-center'>
      <h1 className='text-base sm:text-2xl font-medium mb-2'>
        Al Quran er Bani
      </h1>

      <a
        href='https://www.youtube.com/playlist?list=PLAZsqCFh4XjrYpEWusdW_Kk2bavfbgu7e'
        target='_blank'
        className='px-4 sm:px-8 py-2.5 bg-rose-500 text-white rounded-md inline-flex text-xs sm:text-sm'
      >
        Watch on Youtube
      </a>
    </div>
  );
}
