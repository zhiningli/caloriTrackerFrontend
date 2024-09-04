import axios from "axios";

export const checkSlugExist = async (slug) => {
    const response = await axios.get(`http://localhost:8080/api/users/check-slug/${slug}`);
    return response.data.exists;  // Assume the API returns a boolean indicating slug existence
};

export const generateIndexedSlug = async (slug) => {
    let uniqueSlug = slug;
    let count = 1;

    while (await checkSlugExist(uniqueSlug)) {
        uniqueSlug = `${slug}-${count}`;
        count += 1;
    }

    return uniqueSlug;
};

export const generateSlug = (username) => {
    return username.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}