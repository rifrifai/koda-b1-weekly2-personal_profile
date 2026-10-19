import { Link } from "react-router";

const variants = {
	dark: "bg-ink text-white border border-ink hover:bg-black/80",
	outline: "bg-white text-ink border border-gray-200 hover:border-ink",
	brand: "bg-brand text-white border border-brand hover:bg-brand/90",
}
export default function Button({to, href, variant = "dark", className = "", children, type = "button", ...props}) {
	const cls = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;
		if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
		if (href) return <a href={href} className={cls} {...props}>{children}</a>;
		return <button type={type} className={cls} {...props}>{children}</button>;
}