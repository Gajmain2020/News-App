export interface Wallpaper {
  url: string;
  urlToImage: string;
  title: string;
  desc: string;
}

interface FullWallpaper extends Wallpaper {
  saved: boolean;
  suggested: boolean;
  library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpaper();
  return wallpapers.filter((w) => w.suggested);
}
export function useSavedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpaper();
  return wallpapers.filter((w) => w.saved);
}
export function useLibraryWallpaper(): FullWallpaper[] {
  const wallpapers = useWallpaper();
  return wallpapers.filter((w) => w.library);
}

export function useWallpaper(): FullWallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/P6W0ehVmRO2g4wlQ-aWRjA",
      title: "Breaking News: Tech Innovations",
      urlToImage:
        "https://ideogram.ai/assets/progressive-image/balanced/response/P6W0ehVmRO2g4wlQ-aWRjA",
      desc: "Explore the latest advancements in technology that are shaping the future.",
      saved: false,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/1Z_WSZpTRKmJr4P0EzCGmg",
      title: "Health Update: New Discoveries",
      urlToImage:
        "https://ideogram.ai/assets/progressive-image/balanced/response/1Z_WSZpTRKmJr4P0EzCGmg",
      desc: "Recent studies reveal groundbreaking discoveries in the health sector.",
      saved: false,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/U0djTlVWRTiewg8BMBF_SQ",
      title: "World Events: Global Summit Recap",
      urlToImage:
        "https://ideogram.ai/assets/progressive-image/balanced/response/U0djTlVWRTiewg8BMBF_SQ",
      desc: "A summary of key discussions and outcomes from the recent global summit.",
      saved: false,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/zMhqSEr7Qi6187Ybt5WjPg",
      title: "Sports: Championship Highlights",
      urlToImage:
        "https://ideogram.ai/assets/progressive-image/balanced/response/zMhqSEr7Qi6187Ybt5WjPg",
      desc: "Catch up on the most exciting moments from this year's championship.",
      saved: false,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/37A5cHMKRmGOTcxiyQeqNQ",
      title: "Travel: Top Destinations to Visit",
      urlToImage:
        "https://ideogram.ai/assets/progressive-image/balanced/response/37A5cHMKRmGOTcxiyQeqNQ",
      desc: "Discover the must-visit travel destinations for your next vacation.",
      saved: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/U0djTlVWRTiewg8BMBF_SQ",
      title: "Finance: Market Trends",
      urlToImage:
        "https://ideogram.ai/assets/progressive-image/balanced/response/U0djTlVWRTiewg8BMBF_SQ",
      desc: "An analysis of current market trends and investment opportunities.",
      saved: true,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/goaRhF8sQ9-tn0Gg0jmpKw",
      title: "Environment: Climate Change",
      urlToImage:
        "https://ideogram.ai/assets/progressive-image/balanced/response/goaRhF8sQ9-tn0Gg0jmpKw",
      desc: "A deep dive into the impacts of climate change on our planet.",
      saved: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/wqLRpHt1Q_iv31P5ge3ayA",
      title: "Entertainment: Movie Releases",
      urlToImage:
        "https://ideogram.ai/assets/progressive-image/balanced/response/wqLRpHt1Q_iv31P5ge3ayA",
      desc: "Explore the most anticipated movie releases of the year.",
      saved: true,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ILXQ_xJOQuiwcdnnrVYnvw",
      title: "Lifestyle: Home Decor Trends",
      urlToImage:
        "https://ideogram.ai/assets/progressive-image/balanced/response/ILXQ_xJOQuiwcdnnrVYnvw",
      desc: "Get inspired by the latest home decor trends to refresh your space.",
      saved: true,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/WDDFsQf-SPiGGx31qLY03w",
      title: "Science: Space Exploration",
      urlToImage:
        "https://ideogram.ai/assets/progressive-image/balanced/response/WDDFsQf-SPiGGx31qLY03w",
      desc: "Discover the latest achievements in space exploration and research.",
      saved: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/QRH7f3RQQfmRDuONFyaqhg",
      title: "Education: Learning Innovations",
      urlToImage:
        "https://ideogram.ai/assets/progressive-image/balanced/response/QRH7f3RQQfmRDuONFyaqhg",
      desc: "A look at innovative approaches to learning in today's education system.",
      saved: false,
      suggested: true,
      library: true,
    },
  ];
}
