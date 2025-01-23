import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
	TableWrapper,
	TableHeader,
	TableRow,
	ArtistColumn,
	TableHeaderCell,
	ArtistInfo,
	ArtistImage,
	SearchWrapper,
	SearchInput,
	VotesColumn,
	ChangeColumn,
	PerformanceColumn,
	SkeletonRow,
	SkeletonImage,
	SkeletonText,
	NoResults,
} from "./TableElements";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { debounce } from "lodash";
import { IoIosSearch } from "react-icons/io";
import { useArtists } from "../../context/ArtistsContext";

const Table = () => {
	const navigate = useNavigate();
	const { artists, loading, error } = useArtists();
	const [searchTerm, setSearchTerm] = useState("");
	const [delayedSearch, setDelayedSearch] = useState("");

	const PerformanceChart = ({ performance }) => {
		if (!performance || performance.length === 0)
			return <SkeletonText width="100%" />;

		return (
			<ResponsiveContainer width="100%" height={50}>
				<LineChart data={performance}>
					<Line
						type="monotone"
						dataKey="votes"
						stroke="#ff56b1"
						strokeWidth={1}
						dot={false}
					/>
					<XAxis
						dataKey="date"
						hide
						tickFormatter={(date) =>
							new Date(date).toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
							})
						}
					/>
					<Tooltip
						contentStyle={{
							background: "#fff",
							border: "none",
							borderRadius: "8px",
							boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
						}}
						labelFormatter={(date) =>
							new Date(date).toLocaleDateString("en-US", {
								weekday: "short",
								month: "short",
								day: "numeric",
							})
						}
					/>
				</LineChart>
			</ResponsiveContainer>
		);
	};

	const filteredArtists = useMemo(() => {
		if (!artists) return [];
		return artists.filter((artist) => {
			const cleanTerm = delayedSearch.toLowerCase().trim();
			if (!cleanTerm) return true;

			return (
				artist.artistName.toLowerCase().includes(cleanTerm) ||
				artist.category.toLowerCase().includes(cleanTerm) ||
				artist.votes.toString() === cleanTerm
			);
		});
	}, [artists, delayedSearch]);

	const handleSearchChange = debounce((term) => {
		setDelayedSearch(term);
	}, 300);

	if (error) return <NoResults>Error loading artists: {error}</NoResults>;

	return (
		<div>
			<SearchWrapper>
				<IoIosSearch />
				<SearchInput
					type="text"
					placeholder="name, category, or votes (e.g. '>100', 'digital')"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
						handleSearchChange(e.target.value);
					}}
				/>
			</SearchWrapper>

			<TableWrapper>
				<TableHeader>
					<TableHeaderCell $align="left">Artist</TableHeaderCell>
					<TableHeaderCell $align="center">Votes</TableHeaderCell>
					<TableHeaderCell $align="center">% Change</TableHeaderCell>
					<TableHeaderCell $align="center">Performance</TableHeaderCell>
				</TableHeader>

				{loading ? (
					Array(5)
						.fill()
						.map((_, i) => (
							<SkeletonRow key={i}>
								<ArtistColumn>
									<SkeletonImage />
									<ArtistInfo>
										<SkeletonText width="120px" />
										<SkeletonText width="80px" />
									</ArtistInfo>
								</ArtistColumn>
								<VotesColumn>
									<SkeletonText width="40px" />
								</VotesColumn>
								<ChangeColumn>
									<SkeletonText width="60px" />
								</ChangeColumn>
								<PerformanceColumn>
									<SkeletonText width="100%" />
								</PerformanceColumn>
							</SkeletonRow>
						))
				) : artists && artists.length > 0 ? (
					filteredArtists.map((artist) => (
						<TableRow
							key={artist.id}
							onClick={() => navigate(`/${artist.slug}`)}
						>
							<ArtistColumn>
								<ArtistImage src={artist.artistImage} alt={artist.artistName} />
								<ArtistInfo>
									<p>{artist.artistName}</p>
									<p>{artist.category}</p>
								</ArtistInfo>
							</ArtistColumn>

							<VotesColumn>
								<span>{artist.votes}</span>
							</VotesColumn>

							<ChangeColumn $positive={artist.performance_change >= 0}>
								{artist.performance_change >= 0
									? `+${artist.performance_change.toFixed(1)}%`
									: `${artist.performance_change.toFixed(1)}%`}
							</ChangeColumn>

							<PerformanceColumn>
								<PerformanceChart performance={artist.performance} />
							</PerformanceColumn>
						</TableRow>
					))
				) : (
					<NoResults>
						{artists?.length === 0
							? "No artists available"
							: `No results for "${delayedSearch}"`}
					</NoResults>
				)}
			</TableWrapper>
		</div>
	);
};

export default React.memo(Table);
