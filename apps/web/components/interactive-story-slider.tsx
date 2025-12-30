"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";
import Image from "next/image";
import { Button } from "@erickharlein/ui";

interface StorySlide {
	id: number;
	emoji: string;
	title: string;
	subtitle: string;
	story: string[];
	image: string;
	gradient: string;
	particleColor: string;
	progress: number;
	soundFile?: string;
	atmosphere?: string;
}

const slides: StorySlide[] = [
	{
		id: 1,
		emoji: "🇭🇹",
		title: "Roots of Discipline",
		subtitle: "Haiti",
		story: [
			"I was shaped in Haiti — first at Collège Les Normaliens, where discipline, structure, and responsibility were not concepts, they were a way of life.",
			"Then the earthquake came. And everything changed.",
			"Leaving home wasn't a choice. It was survival.",
			"I carried with me nothing but languages, values, and the belief that adversity is a teacher."
		],
		image: "/images/story/haiti.png",
		soundFile: "/images/sounds/chapters/haiti-ambient.wav",
		gradient: "from-emerald-500 via-teal-500 to-cyan-500",
		particleColor: "rgba(16, 185, 129, 0.3)",
		progress: 15
	},
	{
		id: 2,
		emoji: "🇺🇸",
		title: "Learning to Rise",
		subtitle: "USA",
		story: [
			"In the United States, I started from the bottom — Home Depot. Walmart warehouse. Hospital mental health technician. Retail.",
			"Different worlds. Same lesson: keep moving.",
			"That's when I made the decision that changed my future — I chose education.",
			"I earned my Associate of Science in IT Management & Cybersecurity at Indian River State College. Then moved to Boston. Worked as a Senior Engineer at Compucom. Enrolled at UMass Boston to pursue my bachelor's.",
			"And then I chose service."
		],
		image: "/images/story/usa.png",
		soundFile: "/images/sounds/chapters/usa-ambient.wav",
		gradient: "from-blue-500 via-indigo-500 to-purple-500",
		particleColor: "rgba(59, 130, 246, 0.3)",
		progress: 35
	},
	{
		id: 3,
		emoji: "⚓",
		title: "The Weight of Responsibility",
		subtitle: "Navy",
		story: [
			"I entered naval service on the aviation side, operating across multiple platforms — from aircraft carriers to amphibious operations — before transitioning into the Operations Specialist community.",
			"Today, I serve as an instructor at EWTGLANT, training operational forces in combat information systems, amphibious operations, and tactical command-and-control environments.",
			"While serving full-time, I made a second commitment: to build the mind that would carry me for the rest of my life.",
			"I self-funded my Bachelor's degree in Computer Engineering, with a minor in Cybersecurity Policy Management, graduating from University of Maryland Global Campus in December 2023 — while supporting my wife and our first daughter.",
			"Along the way I earned certifications: Security+, ITS, CySA+, CISSP, and more."
		],
		image: "/images/story/navy.png",
		soundFile: "/images/sounds/chapters/navy-ambient.wav",
		gradient: "from-slate-600 via-blue-700 to-indigo-800",
		particleColor: "rgba(30, 58, 138, 0.3)",
		progress: 65
	},
	{
		id: 4,
		emoji: "🎓",
		title: "Relentless Growth",
		subtitle: "University",
		story: [
			"I am now pursuing two master's degrees simultaneously: Applied Computing at the Naval Postgraduate School and Cybersecurity & Information Assurance at Western Governors University.",
			"Growth is not a phase. It is a commitment."
		],
		image: "/images/story/university.png",
		soundFile: "/images/sounds/chapters/university-ambient.wav",
		gradient: "from-purple-500 via-violet-500 to-fuchsia-500",
		particleColor: "rgba(168, 85, 247, 0.3)",
		progress: 80
	},
	{
		id: 5,
		emoji: "🧠",
		title: "Protecting the Future",
		subtitle: "AI & Cyber",
		story: [
			"I do not believe AI should replace humans. I believe it should protect them.",
			"My work focuses on building intelligent, secure systems that respect human autonomy and strengthen decision-making in critical environments."
		],
		image: "/images/story/ai-cyber.png",
		soundFile: "/images/sounds/chapters/ai-cyber-ambient.wav",
		gradient: "from-pink-500 via-rose-500 to-red-500",
		particleColor: "rgba(236, 72, 153, 0.3)",
		progress: 92
	},
	{
		id: 6,
		emoji: "🚀",
		title: "Building What Comes Next",
		subtitle: "TechKlein & Beyond",
		story: [
			"TechKlein is my life's work.",
			"KleinAI — a dual-AI architecture: Klein (the human interface) and Ophir (the guardian system).",
			"KleinOS — an operating system designed for secure, intelligent, human-centered computing.",
			"Everything I build is guided by one belief: technology must serve humanity, not replace it."
		],
		image: "/images/story/techklein.png",
		soundFile: "/images/sounds/chapters/techklein-ambient.wav",
		gradient: "from-orange-500 via-amber-500 to-yellow-500",
		particleColor: "rgba(251, 146, 60, 0.3)",
		progress: 100
	}
];

export function InteractiveStorySlider() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAutoPlay, setIsAutoPlay] = useState(false);
	const [isSoundEnabled, setIsSoundEnabled] = useState(false);
	const [direction, setDirection] = useState(0);
	const [completedSlides, setCompletedSlides] = useState<number[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const currentStory = slides[currentSlide];

	// Load and play ambient sound for current chapter
	useEffect(() => {
		if (!isSoundEnabled || !currentStory.soundFile) return;

		// Stop previous audio if exists
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
		}

		// Create and play new audio
		const audio = new Audio(currentStory.soundFile);
		audio.volume = 0.15; // 15% volume - subtle ambient
		audio.loop = true;
		audio.play().catch((err) => console.log("Audio autoplay blocked:", err));
		audioRef.current = audio;

		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current = null;
			}
		};
	}, [currentSlide, isSoundEnabled, currentStory.soundFile]);

	// Session save to localStorage
	useEffect(() => {
		localStorage.setItem("storyProgress", JSON.stringify({ currentSlide, completedSlides }));
	}, [currentSlide, completedSlides]);

	// Load saved progress on mount
	useEffect(() => {
		const saved = localStorage.getItem("storyProgress");
		if (saved) {
			try {
				const { currentSlide: savedSlide, completedSlides: savedCompleted } = JSON.parse(saved);
				setCurrentSlide(savedSlide);
				setCompletedSlides(savedCompleted);
			} catch (e) {
				console.log("Could not restore progress");
			}
		}
	}, []);

	// Auto-play functionality
	useEffect(() => {
		if (!isAutoPlay) return;
		const timer = setInterval(() => {
			if (currentSlide < slides.length - 1) {
				nextSlide();
			} else {
				setIsAutoPlay(false);
			}
		}, 8000); // 8 seconds per slide
		return () => clearInterval(timer);
	}, [isAutoPlay, currentSlide]);

	// Keyboard navigation
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") prevSlide();
			if (e.key === "ArrowRight") nextSlide();
			if (e.key === " ") setIsAutoPlay(!isAutoPlay);
		};
		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [currentSlide, isAutoPlay]);

	// Mark slide as completed when viewed
	useEffect(() => {
		if (!completedSlides.includes(currentSlide)) {
			const timer = setTimeout(() => {
				setCompletedSlides([...completedSlides, currentSlide]);
			}, 3000); // Mark as complete after 3 seconds
			return () => clearTimeout(timer);
		}
	}, [currentSlide]);

	const nextSlide = useCallback(() => {
		if (currentSlide < slides.length - 1) {
			setDirection(1);
			setCurrentSlide(currentSlide + 1);
		}
	}, [currentSlide]);

	const prevSlide = useCallback(() => {
		if (currentSlide > 0) {
			setDirection(-1);
			setCurrentSlide(currentSlide - 1);
		}
	}, [currentSlide]);

	const goToSlide = useCallback((index: number) => {
		setDirection(index > currentSlide ? 1 : -1);
		setCurrentSlide(index);
	}, [currentSlide]);

	const variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
			scale: 0.8
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
			scale: 1
		},
		exit: (direction: number) => ({
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
			scale: 0.8
		})
	};

	// Touch swipe handling for mobile
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 150) {
			nextSlide();
		}
		if (touchStart - touchEnd < -150) {
			prevSlide();
		}
	};

	return (
		<div 
			ref={containerRef} 
			className="relative w-full min-h-screen overflow-x-hidden"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{/* Dynamic Background Gradient */}
			<motion.div
				key={currentSlide}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
				className={`absolute inset-0 bg-gradient-to-br ${currentStory.gradient} opacity-20 blur-3xl`}
			/>

			{/* Animated Particles */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={`${currentSlide}-${i}`}
						initial={{ 
							x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920), 
							y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
							scale: 0 
						}}
						animate={{ 
							x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920)],
							y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
							scale: [0, Math.random() * 0.5 + 0.3, 0]
						}}
						transition={{ 
							duration: Math.random() * 10 + 10, 
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear"
						}}
						className="absolute w-2 h-2 rounded-full"
						style={{ backgroundColor: currentStory.particleColor }}
					/>
				))}
			</div>

			{/* Main Content Container */}
			<div className="relative z-10 w-full min-h-screen flex items-center">
				<div className="container mx-auto px-4 py-12 md:py-20">
					<div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
						{/* Photo Section */}
						<AnimatePresence mode="wait" custom={direction}>
							<motion.div
								key={currentSlide}
								custom={direction}
								variants={variants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									x: { type: "spring", stiffness: 300, damping: 30 },
									opacity: { duration: 0.5 }
								}}
								className="relative"
							>
								<div className="relative group perspective-1000">
									{/* Glowing Border */}
									<div className={`absolute -inset-4 bg-gradient-to-r ${currentStory.gradient} opacity-50 blur-3xl group-hover:opacity-70 transition-opacity`} />
									
									{/* Image Container */}
									<motion.div
										whileHover={{ scale: 1.05, rotateY: 5 }}
										transition={{ type: "spring", stiffness: 300 }}
									className="relative w-full min-h-[500px] aspect-[3/4] md:aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white/20 backdrop-blur-xl shadow-2xl"
									>
										<Image
											src={currentStory.image}
											alt={currentStory.subtitle}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
											className="object-cover object-top"
											priority
										/>
										
										{/* Enhanced Overlay Gradient for Better Text Contrast */}
										<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
										
										{/* Chapter Number */}
										<div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
											<span className="text-2xl font-black text-white">{currentSlide + 1}</span>
										</div>
									</motion.div>
								</div>
							</motion.div>
						</AnimatePresence>

						{/* Story Content Section */}
						<AnimatePresence mode="wait" custom={direction}>
							<motion.div
								key={`content-${currentSlide}`}
								custom={direction}
								variants={variants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									x: { type: "spring", stiffness: 300, damping: 30 },
									opacity: { duration: 0.5 }
								}}
								className="space-y-6 md:space-y-8 p-6 md:p-8 rounded-3xl bg-slate-900/50 backdrop-blur-2xl border border-white/10"
							>
								{/* Emoji + Subtitle */}
								<motion.div
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
									className="flex items-center gap-4"
								>
									<span className="text-6xl drop-shadow-2xl">{currentStory.emoji}</span>
									<span className="text-2xl font-bold text-slate-200 drop-shadow-lg">{currentStory.subtitle}</span>
								</motion.div>

								{/* Title */}
								<motion.h2
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
									className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r ${currentStory.gradient} bg-clip-text text-transparent leading-tight drop-shadow-2xl`}
									style={{ textShadow: "0 0 40px rgba(0,0,0,0.5)" }}
								>
									{currentStory.title}
								</motion.h2>

								{/* Story Paragraphs with Enhanced Readability */}
								<div className="space-y-6">
									{currentStory.story.map((paragraph, i) => (
										<motion.p
											key={i}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.5 + i * 0.1 }}
											className="text-lg md:text-xl text-slate-100 leading-relaxed font-medium"
											style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
										>
											{paragraph}
										</motion.p>
									))}
								</div>

								{/* Chapter Complete Badge */}
								{completedSlides.includes(currentSlide) && (
									<motion.div
										initial={{ scale: 0, rotate: -180 }}
										animate={{ scale: 1, rotate: 0 }}
										className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-xl"
									>
										<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
										<span className="text-sm font-semibold text-green-400">Chapter Complete</span>
									</motion.div>
								)}
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>

			{/* Progress Bar */}
			<div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-t border-white/10">
				<div className="container mx-auto px-4 py-6">
					{/* Progress Track */}
					<div className="relative h-3 bg-slate-800 rounded-full overflow-hidden mb-6">
						<motion.div
							className={`absolute inset-y-0 left-0 bg-gradient-to-r ${currentStory.gradient} rounded-full`}
							initial={{ width: 0 }}
							animate={{ width: `${currentStory.progress}%` }}
							transition={{ duration: 0.8, ease: "easeInOut" }}
						/>
						
						{/* Clickable Segments */}
						<div className="absolute inset-0 flex">
							{slides.map((slide, i) => (
								<button
									key={slide.id}
									onClick={() => goToSlide(i)}
									className="flex-1 relative group"
									aria-label={`Go to ${slide.subtitle}`}
								>
									<div className={`absolute inset-0 ${i === currentSlide ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'} transition-colors`} />
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
										<div className="px-2 py-1 bg-slate-900 rounded text-xs text-white whitespace-nowrap">
											{slide.emoji} {slide.subtitle}
										</div>
									</div>
								</button>
							))}
						</div>
					</div>

					{/* Navigation Controls */}
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							{/* Sound Toggle */}
							<Button
								variant="outline"
								size="sm"
								onClick={() => setIsSoundEnabled(!isSoundEnabled)}
								className="bg-slate-800/50 border-white/10 hover:bg-slate-700/50"
								title={isSoundEnabled ? "Mute ambient sound" : "Enable ambient sound"}
							>
								{isSoundEnabled ? (
									<><Volume2 className="w-4 h-4 mr-2" /> Sound On</>
								) : (
									<><VolumeX className="w-4 h-4 mr-2" /> Sound Off</>
								)}
							</Button>

							{/* Auto-play Toggle */}
							<Button
								variant="outline"
								size="sm"
								onClick={() => setIsAutoPlay(!isAutoPlay)}
								className="bg-slate-800/50 border-white/10 hover:bg-slate-700/50"
							>
								{isAutoPlay ? (
									<><Pause className="w-4 h-4 mr-2" /> Pause</>
								) : (
									<><Play className="w-4 h-4 mr-2" /> Auto Play</>
								)}
							</Button>

							{/* Replay Journey */}
							<Button
								variant="outline"
								size="sm"
								onClick={() => {
									setCurrentSlide(0);
									setCompletedSlides([]);
									setDirection(-1);
								}}
								className="bg-slate-800/50 border-white/10 hover:bg-slate-700/50"
								title="Restart from beginning"
							>
								<RotateCcw className="w-4 h-4 mr-2" /> Replay
							</Button>

							{/* Slide Counter */}
							<span className="text-sm text-slate-400 font-semibold">
								{currentSlide + 1} / {slides.length}
							</span>
						</div>

						{/* Arrow Navigation */}
						<div className="flex items-center gap-2">
							<Button
								variant="outline"
								size="icon"
								onClick={prevSlide}
								disabled={currentSlide === 0}
								className="bg-slate-800/50 border-white/10 hover:bg-slate-700/50 disabled:opacity-30"
							>
								<ChevronLeft className="w-5 h-5" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								onClick={nextSlide}
								disabled={currentSlide === slides.length - 1}
								className="bg-slate-800/50 border-white/10 hover:bg-slate-700/50 disabled:opacity-30"
							>
								<ChevronRight className="w-5 h-5" />
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Final Quote Overlay (shown on last slide) */}
			{currentSlide === slides.length - 1 && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2 }}
					className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none"
				>
					<div className="text-center space-y-4 px-4">
						<p className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-2xl">
							This is not a story of success.
						</p>
						<p className="text-3xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
							It is a story of responsibility.
						</p>
					</div>
				</motion.div>
			)}
		</div>
	);
}
