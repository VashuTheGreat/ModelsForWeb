import React, { useEffect,useState } from 'react';
import {
  Brain,
  Zap,
  Star,
  Github,
  ExternalLink,
  TrendingUp,
  Eye,
  Heart,
  Code,
  Cpu,
  Database,
  Layers,
  Activity,
  BarChart,
  LineChart,
  ArrowUpRight,
  FunctionSquare,
  Binary,
  Filter,
  MessageSquare,
  Cloud,
  FileCode,
  Rocket,
  Wrench,
  Sliders,
  Target,
  ShieldCheck,
  FlaskConical,
  Sigma,
  Upload,
  Download,
  ChevronDown,
  ChevronUp,

  // 🔥 Additional Useful Icons:
  BarChart3,         // More chart styles
  Bot,               // Chatbots / AI assistant
  BookOpen,          // Research papers / docs
  Box,               // Dataset / containers
  ClipboardList,     // Tasks / metrics / TODO
  Clock,             // Time series / timestamps
  Terminal,          // CLI tools / scripting
  Puzzle,            // Algorithms / components
  Lightbulb,         // Ideas / innovation
  BadgeCheck,        // Verified / certified models
  ClipboardCheck,    // Evaluation / checklist
  Beaker,            // Experimentation / lab work
  RefreshCw,         // Retraining / iterations
  Play,              // Model running
  Pause,             // Model paused / frozen
  Settings,          // Hyperparams or system
  Grid,              // Data matrix / grid
  Info,              // Additional info
  AlertTriangle,     // Warnings / performance issues
  BookUser,          // User profiling / personalization
  Rss,               // Real-time data / feeds
  Wifi,              // Online deployment
  ShieldAlert,       // Validation / anomaly detection
  Volume2,           // Audio / speech ML
  Music,             // Audio signal processing
  Image,             // Image recognition
  Video,             // Video analytics
  Mic,               // Speech recognition
  Globe,             // World data / geolocation
  Map,               // Map-based ML / data plotting
  Sun,               // Brightness, highlights
  Moon,              // Themes or dark mode
  User,              // User ML models
  Group,             // Team / collaboration
  Search,            // Search-related ML
  ScanSearch         // Object detection
} from 'lucide-react';



const iconMap = {
  Heart,
  Brain,
  Zap,
  Star,
  Github,
  ExternalLink,
  TrendingUp,
  Eye,
  Code,
  Cpu,
  Database,
  Layers,
  Activity,
  BarChart,
  LineChart,
  ArrowUpRight,
  FunctionSquare,
  Binary,
  Filter,
  MessageSquare,
  Cloud,
  FileCode,
  Rocket,
  Wrench,
  Sliders,
  Target,
  ShieldCheck,
  FlaskConical,
  Sigma,
  Upload,
  Download,
  ChevronDown,
  ChevronUp,
};

const MLProjectsSection = () => {
  const [data,setData]=useState([])
   useEffect(() => {
fetch(`${import.meta.env.BASE_URL}data.json`) 
     .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json); // Check in console
      });
  }, []);
  const[projects,setProjects]=useState([])
  
  const [visibleCount, setVisibleCount] = useState(4); // show 4 initially

  // Sample projects data - you can replace with your actual projects
 useEffect(()=>{
      setProjects(data);

 })

  const visibleProjects = projects.slice(0, visibleCount);

  const handleShowMore = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(4); // reset to 4
    } else {
      setVisibleCount((prev) => prev + 4); // load 4 more
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Machine Learning
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore my collection of AI and ML projects, from neural networks to deep learning models
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">Live Models</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="text-sm">Open Source</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {visibleProjects.map((project, index)=>{  const Icon = iconMap[project.icon]; // resolve the icon component
 return (
          
          <div
            key={index}
            className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === 'Live' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {project.status}
              </span>
            </div>

            {/* Project Icon */}
            <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${project.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
{Icon && <Icon className="w-6 h-6" />}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {project.name}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* Accuracy */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-white/10 rounded-full px-3 py-1">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold text-white">
                    {project.accuracy}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 pt-4">
                <a href={project.view} target="_blank" rel="noreferrer">
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Demo</span>
                  </button>
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  <button className="flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                </a>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        )})}
      
      </div>

      {/* Show More / Less Button */}
      {projects.length > 4 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300 hover:scale-105"
          >

    {visibleCount >= projects.length ? '⌃ Show Less' : '⌄ Show More'}
          </button>
        </div>
      )}
    </>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on challenging ML projects and explore new possibilities in AI.
            </p>
           <a href='https://vashuthegreat.netlify.app/' target='_blank'>
             <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </button>
           </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLProjectsSection;