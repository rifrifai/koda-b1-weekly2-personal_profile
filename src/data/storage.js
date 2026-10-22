/**
 * fungsi bantu untuk menyimpan pesan form Contact di localStorage browser.
 * data hanya tersimpan di browser pengunjung (tidak dikirim ke server).
 */

/** key localStorage tempat daftar pesan disimpan. */
export const MESSAGES_KEY = "contactMessages";

/**
 * @typedef {Object} ContactMessage
 * @property {string} id - ID unik pesan (UUID).
 * @property {string} name - nama pengirim.
 * @property {string} email - email pengirim.
 * @property {string} phone - nomor telepon (boleh kosong).
 * @property {string} subject - subjek pesan.
 * @property {string} country - negara (boleh kosong).
 * @property {string} message - isi pesan.
 * @property {string} method - metode kontak pilihan: "Email", "Phone", atau "Whatsapp".
 * @property {string[]} tech - teknologi yang diminati.
 * @property {string} createdAt - waktu pengiriman (format ISO 8601).
 */

/**
 * membaca semua pesan yang tersimpan di localStorage.
 * jika data kosong atau rusak, mengembalikan array kosong.
 *
 * @returns {ContactMessage[]} daftar pesan, yang terbaru di urutan pertama.
 */
export function loadMessages() {
	try {
		const raw = localStorage.getItem(MESSAGES_KEY);
		const data = raw ? JSON.parse(raw) : [];
		return Array.isArray(data) ? data : [];
	} catch (error) {
		console.error("Gagal membaca pesan dari localStorage:", error);
		return [];
	}
}

/**
 * menyimpan satu pesan baru ke localStorage (diletakkan di urutan paling atas).
 * ID dan waktu pengiriman ditambahkan otomatis, setelah berhasil data yang di localStorage akan ditampilkan di console
 *
 * @param {Omit<ContactMessage, "id" | "createdAt">} formData - data yang sudah lolos validasi.
 * @returns {boolean} `true` jika berhasil disimpan, `false` jika gagal
 *   (misalnya penyimpanan penuh atau diblokir browser).
 */
export function saveMessage(formData) {
	const newMessage = {
		id: crypto.randomUUID(),
		...formData,
		createdAt: new Date().toISOString(),
	};

	try {
		localStorage.setItem(MESSAGES_KEY, JSON.stringify([newMessage, ...loadMessages()]));
		console.log(`pesan berhasil di simpan di localStorage: ${newMessage}`);
		console.log(`semua pesan di localStorage (${MESSAGES_KEY}): `, loadMessages());
		return true;
	} catch (error) {
		console.error("Gagal menyimpan pesan ke localStorage:", error);
		return false;
	}
}
