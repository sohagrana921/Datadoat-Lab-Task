import { useEffect, useState } from "react";

const useCourse = () => {
  const [loading, setLoading] = useState(true);

  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch(`https://lens-masters-academy-server.vercel.app/courses`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      });
  }, [course]);
  return [course, loading];
};

export default useCourse;
