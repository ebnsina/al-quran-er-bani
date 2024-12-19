export default function Greet() {
  return (
    <div className="flex space-x-2 items-center">
      <div>
        <span>
          {new Date().toLocaleDateString("bn-BD", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
