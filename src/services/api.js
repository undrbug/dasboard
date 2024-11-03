export const URL = "http://localhost:3008/api";

export const fetchUsers = async () => {
	const response = await fetch(`${URL}/users`);
	if (!response.ok) {
		throw new Error("Error fetching users");
	}
	
	return await response.json();
};

export const fetchProducts = async () => {
	const response = await fetch(`${URL}/products`);
	if (!response.ok) {
		throw new Error("Error fetching products");
	}

	return await response.json();
};
