import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setUser(data);
      } catch {
        setError("Failed to load user");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>

      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Username: {user?.username}</p>
    </div>
  );
}

export default UserProfile;
