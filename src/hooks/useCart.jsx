import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      `https://lens-masters-academy-server.vercel.app/carts/email/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setLoading(false);
      });
  }, [cart, user?.email]);
  return [cart, loading];
};

export default useCart;
