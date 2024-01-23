export default function Input({ label, ...props }) {
  return (
    <>
      <div className="input-group">
        <label htmlFor={name}>{label}</label>
        <input {...props} />
      </div>
    </>
  );
}
