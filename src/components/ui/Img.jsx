import { useState } from "react";

export default function Img({src, alt, className = ""}) {
	const [failed, setFailed] = useState(!src);
	if (failed) return <div role="img" aria-label={alt} className={`bg-gray-100 ${className}`} />;
	return <img src={src} alt={alt} onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}