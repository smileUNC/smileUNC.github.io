import React, { useState } from "react";
import publications from "./papers.json";
import { Button } from "../Button";
import PaperItem from "./paperItem";
import "../Button.css";
import "../Content.css";
import "./publications.css";

export default function Publications() {
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    type: null,
    year: null,
    topic: null,
  });
  const [filteredPublications, setFilteredPublications] =
    useState(publications);

  // Create arrays of unique types, years, and topics from your publications data
  const types = [...new Set(publications.map((pub) => pub.type))];
  const years = [...new Set(publications.map((pub) => pub.year))];
  const topics = [...new Set(publications.map((pub) => pub.topic))];
  const handleFilterChange = (filterType, value) => {
    // Update the selected filter state
    setSelectedFilter((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        [filterType]: value,
      };

      setFilteredPublications(
        publications.filter((publication) => {
          return (
            (newFilters.type === null ||
              newFilters.type === "ALL" ||
              publication.type === newFilters.type) &&
            (newFilters.year === null ||
              newFilters.year === "ALL" ||
              publication.year.toString() === newFilters.year) &&
            (newFilters.topic === null ||
              newFilters.topic === "ALL" ||
              publication.topic === newFilters.topic)
          );
        })
      );

      return newFilters;
    });

    // Close all dropdowns
    setTypeDropdownOpen(false);
    setYearDropdownOpen(false);
    setTopicDropdownOpen(false);
  };

  const isSelected = (filterType, value) =>
    selectedFilter[filterType] === value;

  const sortByYear = () => {
    const sortedPublications = [...publications].sort((a, b) => {
      // Assuming year is stored as a string, we need to convert it to a number
      return parseInt(b.year, 10) - parseInt(a.year, 10);
    });

    setFilteredPublications(sortedPublications);
    // Reset selected filters
    setSelectedFilter({
      type: null,
      year: null,
      topic: null,
    });
  };

  return (
    <div className="content-container">
      <div className="content-heading">Publications</div>
      <Button
        onClick={sortByYear}
        buttonStyle="btn--primary"
        buttonSize="btn--medium"
      >
        ALL: BY YEAR
      </Button>
      {/* Dropdown for Types */}
      <div className="dropdown">
        <Button onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}>
          {selectedFilter.type || "TYPE"}
        </Button>
        {typeDropdownOpen && (
          <div className="dropdown-content">
            {types.map((type) => (
              <a
                key={type}
                className={isSelected("type", type) ? "selected" : ""}
                onClick={() => handleFilterChange("type", type)}
              >
                {type}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Similar dropdowns for Year and Topic */}
      <div className="dropdown">
        <Button onClick={() => setTopicDropdownOpen(!topicDropdownOpen)}>
          {selectedFilter.topic || "TOPIC"}
        </Button>
        {topicDropdownOpen && (
          <div className="dropdown-content" style={{ minWidth: "300px" }}>
            {topics.map((topic) => (
              <a
                key={topic}
                className={isSelected("topic", topic) ? "selected" : ""}
                onClick={() => handleFilterChange("topic", topic)}
              >
                {topic}
              </a>
            ))}
          </div>
        )}
      </div>
      {/* Dropdown for Years */}
      <div className="dropdown">
        <Button onClick={() => setYearDropdownOpen(!yearDropdownOpen)}>
          {selectedFilter.year || "YEAR"}
        </Button>
        {yearDropdownOpen && (
          <div className="dropdown-content">
            {years.map((year) => (
              <a
                key={year}
                className={isSelected("year", year) ? "selected" : ""}
                onClick={() => handleFilterChange("year", year)}
              >
                {year}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="selected-filters-container">
        <span className="filter-category">Type:</span>
        <span className="filter-value">{selectedFilter.type || "All"}</span>

        <span className="filter-category">Topic:</span>
        <span className="filter-value">{selectedFilter.topic || "All"}</span>

        <span className="filter-category">Year:</span>
        <span className="filter-value">{selectedFilter.year || "All"}</span>
      </div>

      {/* Display filtered publications */}
      <div className="content-text">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((publication, index) => (
            <PaperItem
              key={publication.id}
              number={index + 1}
              title={publication.title}
              link={publication.url}
              authors={publication.author}
              info={publication.info}
            />
          ))
        ) : (
          <p>No publications found for the selected filter.</p>
        )}
      </div>
    </div>
  );
}
