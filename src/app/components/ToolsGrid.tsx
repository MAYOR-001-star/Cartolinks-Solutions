import React from 'react';
import { Image, Video, Zap, Sparkles, Palette, Play, User, Settings } from 'lucide-react';

type ToolColor = 'blue' | 'orange' | 'cyan' | 'gray' | 'purple' | 'green';

interface Tool {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  color: ToolColor;
  badge: string | null;
}

interface ToolsGridProps {
  isDark: boolean;
}

const ToolsGrid: React.FC<ToolsGridProps> = ({ isDark }) => {
  const tools: Tool[] = [
    { name: "Image", icon: Image, description: "Generate images with custom styles in Fun and Instagram.", color: "blue", badge: null },
    { name: "Video", icon: Video, description: "Generate videos with Haiper, Pika, Runway, Luma, and more.", color: "orange", badge: null },
    { name: "Realtime", icon: Zap, description: "Realtime AI rendering on a canvas. Instant feedback loops.", color: "cyan", badge: null },
    { name: "Enhancer", icon: Sparkles, description: "Upscale and enhance images and videos up to 10x.", color: "gray", badge: "NEW" },
    { name: "Edit", icon: Palette, description: "Edit video, add audio and generate.", color: "purple", badge: "BETA" },
    { name: "Video Lipsync", icon: Play, description: "Lip sync any video to any audio.", color: "green", badge: "BETA" },
    { name: "Motion Transfer", icon: User, description: "Transfer motion into any style.", color: "gray", badge: "BETA" },
    { name: "Train", icon: Settings, description: "Train LoRa to replicate any style, products, or characters.", color: "orange", badge: null }
  ];

  const colorClasses: Record<ToolColor, string> = {
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    cyan: 'bg-cyan-500',
    gray: 'bg-gray-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500'
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Generate</h2>
        <button className={`text-sm ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-600'} transition-colors`}>
          Show all
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool: Tool, index: number) => (
          <div key={index} className={`p-6 rounded-xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-all duration-200 cursor-pointer group`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${colorClasses[tool.color]} flex items-center justify-center`}>
                <tool.icon size={20} className="text-white" />
              </div>
              <div className="flex items-center space-x-2">
                {tool.badge && (
                  <span className={`px-2 py-1 text-xs font-medium rounded ${tool.badge === 'NEW' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {tool.badge}
                  </span>
                )}
                <button className={`px-3 py-1 text-xs rounded ${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}>
                  Open
                </button>
              </div>
            </div>
            <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{tool.name}</h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ToolsGrid };