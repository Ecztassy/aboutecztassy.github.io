// Define the query with dynamic variables for both anime and manga
const query = `
  query ($userName: String, $type: MediaType, $sort: [MediaListSort]) {
    MediaListCollection(userName: $userName, type: $type, sort: $sort) {
      lists {
        entries {
          media {
            title {
              romaji
            }
            coverImage {
              medium
            }
            episodes
            chapters
          }
          progress
          updatedAt
        }
      }
    }
  }
`;

// Function to fetch data for a specific type
async function fetchData(userName, type) {
    const variables = {
        userName,
        type,
        sort: ["UPDATED_TIME_DESC"]
    };

    const url = 'https://graphql.anilist.co';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables
        })
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.data?.MediaListCollection?.lists[0]?.entries[0] || null;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Function to determine the most recent entry
function getMostRecentEntry(animeEntry, mangaEntry) {
    if (!animeEntry && !mangaEntry) return null;
    if (animeEntry && (!mangaEntry || animeEntry.updatedAt > mangaEntry.updatedAt)) return animeEntry;
    return mangaEntry;
}

// Fetch and display the most recent content
async function displayMostRecentContent() {
    try {
        const [animeEntry, mangaEntry] = await Promise.all([
            fetchData("Ecztassy", "ANIME"),
            fetchData("Ecztassy", "MANGA")
        ]);

        const mostRecentEntry = getMostRecentEntry(animeEntry, mangaEntry);

        const widget = document.getElementById('last-anime-widget');
        if (mostRecentEntry) {
            widget.innerHTML = `
                <div class="widget-title">
                    <p><strong>Last Seen</strong></p>
                </div>
                <div class="widget-content">
                    <img src="${mostRecentEntry.media.coverImage.medium}" alt="${mostRecentEntry.media.title.romaji}" class="widget-img" />
                    <div class="widget-info">
                      <p><strong>${mostRecentEntry.media.title.romaji}</strong></p>
                      <p><strong>Progress:</strong> ${mostRecentEntry.progress}/${mostRecentEntry.media.episodes || mostRecentEntry.media.chapters}</p>
                    </div>
                </div>
            `;
            console.log('Most recent content successfully displayed.');
        } else {
            widget.innerHTML = '<p>No content available.</p>';
            console.log('No content available.');
        }
    } catch (error) {
        console.error('Error displaying content:', error);
        document.getElementById('last-anime-widget').innerHTML = '<p>Error loading content.</p>';
    }
}

displayMostRecentContent();
