export default function Greet() {
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? 'Good morning'
      : currentHour < 18
      ? 'Good afternoon'
      : 'Good evening';

  return (
    <div className='flex space-x-2 items-center'>
      <div>{greeting}!</div>

      <div>
        <span>
          {new Date().toLocaleDateString('bn-BD', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
      </div>
    </div>
  );
}
