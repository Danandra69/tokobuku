import API from "./api";

export async function getBooks() {
    const res = await fetch('${API}/books');
    return res.json();
}

export async function getBookById(id) {
    const res = await fetch('${API}/books/${id}');
    return res.json();
}