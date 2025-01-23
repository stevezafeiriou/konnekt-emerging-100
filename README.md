# Konnekt Emerging 100 List

A React-based web application for showcasing and voting on emerging artists, featuring real-time statistics and API-powered performance tracking.

## Key Features

- 🌐 **API-Driven Data** - Full integration with WordPress REST API
- 🎨 Artist Discovery Grid with advanced search/filter
- 📊 Interactive performance charts using Recharts
- 🗳️ Secure voting system with email verification
- 📱 Fully responsive design with skeleton loading states
- 🖼️ Artwork preview with click-to-zoom functionality
- 📈 Historical performance tracking with real data
- 🔄 Context API for global state management
- 🚀 React Router 6 with dynamic routing and deep linking

## Technologies Used

- **Core**: React 18, React Router 6
- **Styling**: styled-components
- **Charts**: Recharts
- **State Management**: React Context API
- **API**: Axios (implicit in fetch usage)
- **Build Tool**: Create React App
- **Utilities**: Lodash (debounce), date-fns

## Installation & Setup

1. **Clone repository**

   ```bash
   git clone https://github.com/stevezafeiriou/konnekt-emerging-100.git
   cd konnekt-emerging-100
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create `.env` file:

   ```env
   REACT_APP_API_BASE=https://konnekt.gr/wp-json
   ```

4. **Run development server**
   ```bash
   npm start
   # or
   yarn start
   ```

## Project Structure

```bash
src/
├── components/
│   ├── ArtistProfile/       # Artist detail components
│   ├── Table/               # Main artist grid
│   └── VotePopup/           # Voting system
├── context/
│   └── ArtistsContext.js    # Global state & API management
├── assets/
│   └── styles/              # Global styles
└── App.js                   # Root component
```

## Core Components

### 1. Artist Table (`Table.js`)

- API-powered artist grid with search
- Real-time performance charts
- Responsive skeleton loading
- Context-managed data flow

**Key Features:**

- Debounced search (300ms)
- Performance change indicators
- Deep linking to artist profiles
- Error boundary handling

### 2. Artist Profile (`ArtistProfile.js`)

- Hybrid data loading (context + direct API)
- Protected contact information
- Full-screen artwork preview
- Historical voting visualization

**Key Features:**

- Direct API fallback for deep links
- localStorage vote tracking
- Interactive tooltips
- Mobile-optimized layout

### 3. Voting System

- Email verification workflow
- Context-integrated voting
- API-powered vote initiation
- Real-time data refresh

```javascript
// Updated voting flow
const handleSubmit = async (e) => {
	e.preventDefault();
	// API call to initiate vote
	await fetch(`${API_BASE}/eap/v1/vote/initiate`, {
		method: "POST",
		body: JSON.stringify({ email, artist_id }),
	});
	// Update local storage and refresh data
	localStorage.setItem("votedArtists", [...votedArtists, artist.id]);
	refreshArtists(); // Context refresh
};
```

## API Integration

### Endpoints

| Endpoint                      | Method | Purpose              |
| ----------------------------- | ------ | -------------------- |
| `/eap/v1/artists`             | GET    | Get all artists      |
| `/eap/v1/artist/{artistSlug}` | GET    | Get single artist    |
| `/eap/v1/vote/initiate`       | POST   | Start voting process |

## Configuration

### Environment Variables

| Variable           | Description  | Default                      |
| ------------------ | ------------ | ---------------------------- |
| REACT_APP_API_BASE | API base URL | `https://konnekt.gr/wp-json` |

### Performance Features

- Memoized components with `React.memo`
- Optimized re-renders with `useMemo`
- Code splitting via React Router
- Efficient chart rendering

## Routing

```javascript
// Enhanced routing with context
<ArtistsProvider>
	<Router>
		<Layout>
			<Routes>
				<Route path="/" element={<Table />} />
				<Route path="/:artistSlug" element={<ArtistProfile />} />
			</Routes>
		</Layout>
	</Router>
</ArtistsProvider>
```

## Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/name`
3. Commit changes: `git commit -m 'Description'`
4. Push branch: `git push origin feature/name`
5. Create PR

**Development Standards:**

- API calls through context
- Error boundary patterns
- Mobile-first responsive design
- PropTypes validation
- Performance profiling

## Future Roadmap

- [ ] Voting analytics dashboard
- [ ] Artist social media integration
- [ ] Advanced search operators
- [ ] Email verification UI
- [ ] Performance benchmarking
- [ ] API caching system

## License

MIT License © 2024 Saphire Labs | Stefanos D. Zafeiriou

Full license: [LICENSE](LICENSE)
