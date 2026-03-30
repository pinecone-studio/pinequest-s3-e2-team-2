import { useState, useMemo } from "react";
import { transliterate } from "../utils/search-helper";

const normalize = (str: string) =>
  str.toLowerCase().replace(/\s+/g, " ").trim();

export function useStudentSearch<
  T extends { name: string; course: string; major: string }
>(items: T[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [majorFilter, setMajorFilter] = useState("all");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const query = normalize(searchQuery);
      const name = normalize(item.name);

      const matchesName =
        !query ||
        name.includes(query) ||
        transliterate(name).includes(query);

      const matchesCourse =
        courseFilter === "all" ||
        normalize(item.course) === normalize(courseFilter);

      const matchesMajor =
        majorFilter === "all" ||
        normalize(item.major) === normalize(majorFilter);

      return matchesName && matchesCourse && matchesMajor;
    });
  }, [items, searchQuery, courseFilter, majorFilter]);

  return {
    searchQuery,
    setSearchQuery,
    courseFilter,
    setCourseFilter,
    majorFilter,
    setMajorFilter,
    filteredItems,
  };
}