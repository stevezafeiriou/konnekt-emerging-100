# Konnekt Emerging 100 List

A React-based web application for showcasing and voting on emerging artists, featuring real-time statistics and performance tracking.

## Key Features

- 🎨 Artist Discovery Grid with search/filter capabilities
- 📊 Interactive performance charts using Recharts
- 🗳️ Voting system with local storage persistence
- 📱 Fully responsive design
- 🖼️ Artwork preview with click-to-zoom functionality
- 📈 Historical performance tracking
- 🔍 Context-based artist data management
- 🚀 React Router navigation with dynamic routing

## Technologies Used

- **Core**: React 18, React Router 6
- **Styling**: styled-components
- **Charts**: Recharts
- **Icons**: React Icons
- **State Management**: React Context API
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
   Create `.env` file in root directory:

   ```env
   REACT_APP_API_BASE=https://your-api-endpoint.com/wp-json
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
│   ├── ArtistProfile/       # Artist detail page components
│   ├── Header/              # Navigation header
│   ├── Footer/              # App footer
│   ├── Layout/              # Main app layout
│   ├── Table/               # Artist grid table
│   └── VotePopup/           # Voting modal
├── context/
│   └── ArtistsContext.js    # Global state management
├── assets/
│   └── styles/              # Global styles
└── App.js                   # Root component
```

## Core Components

### 1. Artist Table (`Table.js`)

- Dynamic grid of artists with search functionality
- Performance sparkline charts
- Responsive skeleton loading states
- Sorting and filtering capabilities

**Key Features:**

- Debounced search input
- Performance percentage change indicators
- Responsive design for all screen sizes
- Click-to-navigate artist profiles

### 2. Artist Profile (`ArtistProfile.js`)

- Detailed artist information page
- Artwork preview with zoom functionality
- Historical voting data visualization
- Contact information protection system

**Key Features:**

- Full-screen artwork preview
- Voting system with local storage tracking
- Protected contact information (requires vote)
- Interactive line chart with tooltips

### 3. Voting System

- Context-managed voting state
- Local storage persistence
- Vote confirmation modal
- Real-time vote count updates

```javascript
// Voting logic example from ArtistsContext
const handleVote = (artistId) => {
	setArtists(
		artists.map((artist) =>
			artist.id === artistId ? { ...artist, votes: artist.votes + 1 } : artist
		)
	);

	const votedArtists = JSON.parse(localStorage.getItem("votedArtists") || "[]");
	localStorage.setItem(
		"votedArtists",
		JSON.stringify([...votedArtists, artistId])
	);
};
```

## Configuration

### Environment Variables

| Variable           | Description                  | Default                          |
| ------------------ | ---------------------------- | -------------------------------- |
| REACT_APP_API_BASE | Base URL for artist data API | http://emerging100.local/wp-json |

### Performance Optimization

- Memoized components with `React.memo`
- Debounced search input
- Responsive image loading
- Code splitting with React Router
- Efficient chart rendering with Recharts

## Routing

```javascript
// App.js Routing Configuration
<Routes>
	<Route path="/" element={<Table />} />
	<Route path="/:artistSlug" element={<ArtistProfile />} />
</Routes>
```

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

**Development Guidelines:**

- Follow React best practices
- Maintain consistent styling with styled-components
- Use functional components with hooks
- Add PropTypes for component validation
- Include Storybook stories for new components

## Future Enhancements

- [ ] Artist registration system
- [ ] Social sharing capabilities
- [ ] Advanced filtering options
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Email notification system

## License

MIT License © 2024 Saphire Labs | Stefanos D. Zafeiriou

For full license text, see [LICENSE](LICENSE) file in the repository root.
