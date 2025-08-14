export interface Plugin {
  name: string;
  features: string[];
  link: string;
}

export const plugins: Plugin[] = [
  {
    name: "Weather Map",
    features: [
      "Displays real-time weather for up to 6 locations on an interactive map.",
      "Built-in API key validation before saving settings.",
      "15-minute transient cache to optimize performance and reduce API requests.",
    ],
    link: "https://wordpress.org/plugins/weather-map",
  },
  {
    name: "Findit Post Search and Filter(Super Post Search)",
    features: [
      "Search by post title and content with keyword highlighting.",
      "Filter by category and tag.",
      "'Load More' button to load results incrementally for better performance.",
    ],
    link: "https://wordpress.org/plugins/findit-post-search-and-filter/",
  },
];
