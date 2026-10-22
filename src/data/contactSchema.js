import * as yup from "yup";
import { contactMethods } from "./site";

/**
 * atur validasi (yup) untuk form di halaman Contact.
 * dipakai oleh react hook form lewat `yupResolver(contactSchema)`.
 * semua pesan error akan ditampilkan ke bawah input yang bermasalah.
 * 
 * - name, email, subject, message: wajib di isi.
 * - phone dan country: opsional.
 * - method: harus salah satu dari `contactMethods`.
 * - tech: daftar teknologi yang dicentang (boleh kosong).
 */

export const contactSchema = yup.object({
    name: yup
        .string()
        .trim()
        .required("nama wajib diisi!")
        .min(3, "nama minimal 3 karakter"),
    email: yup
        .string()
        .trim()
        .required("email wajib diisi!")
        .email("format email tidak valid"),
    phone: yup
        .string()
        .trim()
        .matches(/^[0-9+()\-\s]*$/, {
            message: "nomor telepon hanya boleh di isi angka, spasi, +, ( ) dan -",
            excludeEmptyString: true,
        }),
    subject: yup
        .string()
        .trim()
        .required("subject wajib diisi!"),
    country: yup.string(),
    message: yup
        .string()
        .trim()
        .required("pesan wajib diisi!")
        .min(10, "minimal 10 karakter"),
    method: yup
        .string()
        .required("pilih metode kontak!")
        .oneOf(contactMethods, "pilih salah satu metode kontak"),
    tech: yup.array().of(yup.string()).default([]),
});

/**
 * nilai awal form Contact. Dipakai sebagai `defaulValues` pada `useForm`,
 * sehingga `reset()` otomatis mengembalikan form ke kondisi dini.
 * 
 * @type {{ name: string, email: string, phone: string, subject: string, country: string, message: string, method: string, tect: string[] }}
 */
export const contactDefaultValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    country: "",
    message: "",
    method: "Email",
    tect: [],
};