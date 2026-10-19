export default function Card({className = "", children}) {
	return <div className={`rounded-xl border border-gray-100 shadow-sm ${className}`}>{children}</div>;
}