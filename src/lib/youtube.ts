const CHANNEL_ID = "UC09mzsanzSewWYQTcWS17Pg";

export interface YouTubeVideo {
  id: string;
  title: string;
  published: string;
  url: string;
  thumbnail: string;
  description: string;
}

// Shown if the live YouTube feed can't be reached (offline build, rate limit, etc.).
// Update occasionally so the page always has recent sermons even as a fallback.
const FALLBACK_VIDEOS: YouTubeVideo[] = [
  {
    id: "R-2vF8huttY",
    title: "Camp Meeting",
    published: "2026-06-05T00:00:00+00:00",
    url: "https://www.youtube.com/watch?v=R-2vF8huttY",
    thumbnail: "https://i.ytimg.com/vi/R-2vF8huttY/hqdefault.jpg",
    description: "Service from Highland Hills Baptist Church, Highland, MI.",
  },
  {
    id: "WOeS5fT_7wA",
    title: "Highland Hills Baptist Church Live Stream",
    published: "2026-06-04T00:00:00+00:00",
    url: "https://www.youtube.com/watch?v=WOeS5fT_7wA",
    thumbnail: "https://i.ytimg.com/vi/WOeS5fT_7wA/hqdefault.jpg",
    description: "Service from Highland Hills Baptist Church, Highland, MI.",
  },
  {
    id: "nKg2YCweCmw",
    title: "Highland Hills Baptist Church Live Stream",
    published: "2026-06-01T00:00:00+00:00",
    url: "https://www.youtube.com/watch?v=nKg2YCweCmw",
    thumbnail: "https://i.ytimg.com/vi/nKg2YCweCmw/hqdefault.jpg",
    description: "Service from Highland Hills Baptist Church, Highland, MI.",
  },
];

export async function getRecentVideos(): Promise<YouTubeVideo[]> {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

  try {
    const res = await fetch(url, { next: { revalidate: 600 } });
    if (!res.ok) return FALLBACK_VIDEOS;
    const xml = await res.text();
    const parsed = parseFeed(xml);
    return parsed.length ? parsed : FALLBACK_VIDEOS;
  } catch {
    return FALLBACK_VIDEOS;
  }
}

function parseFeed(xml: string): YouTubeVideo[] {
  const entries = xml.split("<entry>").slice(1);
  return entries
    .map((entry) => {
      const videoId = match(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
      const title = match(entry, /<title>([^<]+)<\/title>/);
      const published = match(entry, /<published>([^<]+)<\/published>/);
      const thumbnail =
        match(entry, /<media:thumbnail url="([^"]+)"/) ||
        (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "");
      const description = match(
        entry,
        /<media:description>([\s\S]*?)<\/media:description>/
      );

      return {
        id: videoId,
        title: decodeEntities(title),
        published,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail,
        description: decodeEntities(description).slice(0, 280),
      };
    })
    .filter((v) => v.id);
}

function match(text: string, re: RegExp): string {
  const m = text.match(re);
  return m ? m[1] : "";
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
